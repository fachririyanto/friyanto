"use client";

import React, { useCallback, useEffect, useMemo, useRef } from "react";
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
        pos.xy += dir * force * 2.5 * (1.0 - inertia * 0.5);

        // 3. Piling effect (Z Displacement)
        float ridge = sin(force * 3.14159);
        pos.z += ridge * 0.6 * inertia; 

        // 4. Base terrain noise
        float terrain = noise(pos.xy * 0.8);
        pos.z += terrain * 0.2;

        vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
        
        // Size attenuation
        gl_PointSize = (6.0 * aSize + ridge * 4.0) * (1.0 / -mvPosition.z);
        
        gl_Position = projectionMatrix * mvPosition;
        
        vHeight = pos.z;
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
        
        // Lighting approximation
        float light = smoothstep(-0.2, 0.6, vHeight);
        color = mix(color * 0.85, color * 1.15, light);
        
        gl_FragColor = vec4(color, alpha);
    }
`;

export const SandParticles: React.FC<SandProps> = ({
    particleCount = 15000,
    baseColor = "#E6DBC4",
    highlightColor = "#C8B28E",
}) => {
    const meshRef = useRef<THREE.Points<THREE.BufferGeometry, THREE.ShaderMaterial>>(null);
    const { gl, invalidate } = useThree();

    // State for smooth animation
    const mousePosition = useRef(new THREE.Vector3(100, 100, 0));
    const targetMousePosition = useRef(new THREE.Vector3(100, 100, 0));
    const isHovering = useRef(false);
    // Track whether the animation has settled so we can stop rendering
    const isAnimating = useRef(false);
    // Throttle pointer events
    const lastPointerTime = useRef(0);
    // Normalized pointer (-1 to 1) computed from window events
    const normalizedPointer = useRef({ x: 0, y: 0 });

    // Initialize Uniforms
    const uniforms = useMemo(() => ({
        uTime: { value: 0 },
        uMouse: { value: new THREE.Vector3(100, 100, 0) },
        uColorBase: { value: new THREE.Color(baseColor) },
        uColorHighlight: { value: new THREE.Color(highlightColor) },
    }), [baseColor, highlightColor]);

    // Throttled pointer handler - only process every 32ms (~30hz input)
    // Computes normalized pointer from screen coords so it works through pointer-events-none
    const onPointerMove = useCallback((e: PointerEvent) => {
        const now = performance.now();
        if (now - lastPointerTime.current < 32) return;
        lastPointerTime.current = now;

        // Convert screen coords to normalized (-1 to 1) relative to the canvas
        const canvas = gl.domElement;
        const rect = canvas.getBoundingClientRect();
        normalizedPointer.current.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
        normalizedPointer.current.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

        isHovering.current = true;
        isAnimating.current = true;
        invalidate(); // Request a new frame
    }, [gl, invalidate]);

    const onPointerLeaveWindow = useCallback((e: MouseEvent) => {
        if (!e.relatedTarget) {
            isHovering.current = false;
            isAnimating.current = true;
            invalidate();
        }
    }, [invalidate]);

    useEffect(() => {
        window.addEventListener("pointermove", onPointerMove, { passive: true });
        window.addEventListener("mouseout", onPointerLeaveWindow);

        return () => {
            window.removeEventListener("pointermove", onPointerMove);
            window.removeEventListener("mouseout", onPointerLeaveWindow);
        };
    }, [gl, onPointerMove, onPointerLeaveWindow]);

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

        // Only update when animating
        if (!isAnimating.current) return;

        const { clock, viewport } = state;

        // Update Time
        meshRef.current.material.uniforms.uTime.value = clock.getElapsedTime();

        // Calculate Target Position using normalized pointer from window events
        if (isHovering.current) {
            const x = (normalizedPointer.current.x * viewport.width) / 2;
            const y = (normalizedPointer.current.y * viewport.height) / 2;
            targetMousePosition.current.set(x, y, 0);
        } else {
            targetMousePosition.current.set(100, 100, 0);
        }

        // Smooth Lerp
        mousePosition.current.lerp(targetMousePosition.current, 0.08);
        meshRef.current.material.uniforms.uMouse.value.copy(mousePosition.current);

        // Check if animation has settled (mouse far away and lerp converged)
        const distToTarget = mousePosition.current.distanceTo(targetMousePosition.current);
        if (!isHovering.current && distToTarget < 0.01) {
            // Snap to target and stop animating
            mousePosition.current.copy(targetMousePosition.current);
            meshRef.current.material.uniforms.uMouse.value.copy(mousePosition.current);
            isAnimating.current = false;
        } else {
            // Keep requesting frames while animating
            state.invalidate();
        }
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
