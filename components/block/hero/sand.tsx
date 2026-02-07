"use client";

import React, { useEffect, useMemo, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

interface SandProps {
    particleCount?: number;
    baseColor?: string;
    highlightColor?: string;
}

// Vertex Shader: Handles the position and displacement of sand grains
const vertexShader = `
    uniform float uTime;
    uniform vec3 uMouse;
    
    attribute float aRandom;
    attribute float aSize;
    
    varying float vRandom;
    varying float vHeight;
    
    // 2D Random
    float random (vec2 st) {
        return fract(sin(dot(st.xy, vec2(12.9898,78.233)))* 43758.5453123);
    }

    // 2D Noise
    float noise (in vec2 st) {
        vec2 i = floor(st);
        vec2 f = fract(st);

        // Four corners in 2D of a tile
        float a = random(i);
        float b = random(i + vec2(1.0, 0.0));
        float c = random(i + vec2(0.0, 1.0));
        float d = random(i + vec2(1.0, 1.0));

        vec2 u = f * f * (3.0 - 2.0 * f);

        return mix(a, b, u.x) +
                (c - a)* u.y * (1.0 - u.x) +
                (d - b) * u.x * u.y;
    }

    void main() {
        vRandom = aRandom;
        vec3 pos = position;
        
        float distanceToMouse = distance(pos.xy, uMouse.xy);
        float interactionRadius = 1.75; 
        
        // Smooth force: 1.0 at center, 0.0 at edge
        float force = smoothstep(interactionRadius, 0.0, distanceToMouse);
        
        vec2 dir = normalize(pos.xy - uMouse.xy);
        
        // Noise for direction
        float n = noise(pos.xy * 3.0 + uTime * 0.1);
        float angle = n * 0.8; 
        mat2 rot = mat2(cos(angle), -sin(angle), sin(angle), cos(angle));
        dir = rot * dir;

        // Physics Simulation:
        // 1. Inertia: Larger particles (aSize) move less
        float inertia = 0.2 + aSize * 0.8; 

        // 2. Parting effect (XY Displacement)
        // Push particles away. 
        pos.xy += dir * force * 2.5 * (1.0 - inertia * 0.5);

        // 3. Piling effect (Z Displacement)
        // Create a ridge at the edge of the cursor influence.
        // The sin(force * PI) creates a hump peaking at force 0.5 (mid-radius).
        float ridge = sin(force * 3.14159);
        pos.z += ridge * 0.6 * inertia; 

        // 4. Base terrain noise
        // Give the sand a non-flat, natural surface texture
        float terrain = noise(pos.xy * 0.8);
        pos.z += terrain * 0.2;

        vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
        
        // Size attenuation
        // Scale up slightly based on ridge to simulate light catching
        gl_PointSize = (6.0 * aSize + ridge * 4.0) * (1.0 / -mvPosition.z);
        
        gl_Position = projectionMatrix * mvPosition;
        
        vHeight = pos.z; // Pass height to fragment shader
    }
`;

// Fragment Shader
const fragmentShader = `
    uniform vec3 uColorBase;
    uniform vec3 uColorHighlight;
    
    varying float vRandom;
    varying float vHeight;
    
    void main() {
        vec2 coord = gl_PointCoord - vec2(0.5);
        float dist = length(coord);
        if (dist > 0.5) discard;
        
        // Soft particle edge
        float alpha = 1.0 - smoothstep(0.3, 0.5, dist);
        
        // Base Color mix
        vec3 color = mix(uColorBase, uColorHighlight, vRandom);
        
        // Lighting approximation:
        // Higher particles (ridges) get lighter.
        // Lower particles (troughs) get darker.
        float light = smoothstep(-0.2, 0.6, vHeight);
        color = mix(color * 0.85, color * 1.15, light);
        
        gl_FragColor = vec4(color, alpha);
    }
`;

export const SandParticles: React.FC<SandProps> = ({
    particleCount = 100000,
    baseColor = "#E6DBC4",
    highlightColor = "#C8B28E",
}) => {
    const meshRef = useRef<THREE.Points<THREE.BufferGeometry, THREE.ShaderMaterial>>(null);
    const { gl } = useThree();

    // State for smooth animation
    const mousePosition = useRef(new THREE.Vector3(100, 100, 0)); // Start far away
    const targetMousePosition = useRef(new THREE.Vector3(100, 100, 0));
    const isHovering = useRef(false);

    // Initialize Uniforms
    const uniforms = useMemo(() => ({
        uTime: { value: 0 },
        uMouse: { value: new THREE.Vector3(100, 100, 0) },
        uColorBase: { value: new THREE.Color(baseColor) },
        uColorHighlight: { value: new THREE.Color(highlightColor) },
    }), [baseColor, highlightColor]);

    // Use window listeners to ensure interaction works even over UI overlays
    useEffect(() => {
        const onPointerMove = (e: PointerEvent) => {
            isHovering.current = true;
        };

        const onPointerLeaveWindow = (e: MouseEvent) => {
            if (!e.relatedTarget) isHovering.current = false;
        };

        window.addEventListener("pointermove", onPointerMove);
        window.addEventListener("mouseout", onPointerLeaveWindow);

        return () => {
            window.removeEventListener("pointermove", onPointerMove);
            window.removeEventListener("mouseout", onPointerLeaveWindow);
        };
    }, [gl]);

    // Generate Particle Data
    const particleAttributes = useMemo(() => {
        const positions = new Float32Array(particleCount * 3);
        const randoms = new Float32Array(particleCount);
        const sizes = new Float32Array(particleCount);

        const width = 16;
        const height = 10;

        for (let i = 0; i < particleCount; i++) {
            const x = (Math.random() - 0.5) * width;
            const y = (Math.random() - 0.5) * height;
            const z = (Math.random() - 0.5) * 0.15;

            positions[i * 3] = x;
            positions[i * 3 + 1] = y;
            positions[i * 3 + 2] = z;

            randoms[i] = Math.random();
            sizes[i] = Math.random() * 0.6 + 0.4;
        }

        return {
            position: new THREE.BufferAttribute(positions, 3),
            aRandom: new THREE.BufferAttribute(randoms, 1),
            aSize: new THREE.BufferAttribute(sizes, 1),
        };
    }, [particleCount]);

    useFrame((state) => {
        if (!meshRef.current) return;
        
        const { clock, pointer, viewport } = state;
        
        // Update Time
        meshRef.current.material.uniforms.uTime.value = clock.getElapsedTime();
        
        // Calculate Target Position
        if (isHovering.current) {
            const x = (pointer.x * viewport.width) / 2;
            const y = (pointer.y * viewport.height) / 2;
            targetMousePosition.current.set(x, y, 0);
        } else {
            // Reset to far away if not hovering
            targetMousePosition.current.set(100, 100, 0);
        }

        // Smooth Lerp (Linear Interpolation) for realistic delay/weight
        // 0.08 = slightly heavier feel than before
        mousePosition.current.lerp(targetMousePosition.current, 0.08);

        meshRef.current.material.uniforms.uMouse.value.copy(mousePosition.current);
    });

    return (
        <points ref={meshRef}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    args={[particleAttributes.position.array, particleAttributes.position.itemSize]}
                />
                <bufferAttribute
                    attach="attributes-aRandom"
                    args={[particleAttributes.aRandom.array, particleAttributes.aRandom.itemSize]}
                />
                <bufferAttribute
                    attach="attributes-aSize"
                    args={[particleAttributes.aSize.array, particleAttributes.aSize.itemSize]}
                />
            </bufferGeometry>
            {/* 
                @ts-ignore 
                Changed to NormalBlending for better visibility on light background
            */}
            <shaderMaterial
                vertexShader={vertexShader}
                fragmentShader={fragmentShader}
                uniforms={uniforms}
                transparent={true}
                depthWrite={false}
                blending={THREE.NormalBlending} 
            />
        </points>
    );
};