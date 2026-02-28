"use client";

import React, { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface NeuralProps {
    particleCount?: number;
    baseColor?: string;
    highlightColor?: string;
}

const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));

export const NeuralParticles: React.FC<NeuralProps> = ({
    particleCount = 15000,
    baseColor = "#E6DBC4",
    highlightColor = "#C8B28E",
}) => {
    const nodeCount = clamp(Math.floor(Math.sqrt(particleCount) * 1.35), 90, 240);
    const maxConnectionsPerNode = 6;
    const maxSegments = nodeCount * maxConnectionsPerNode;
    const connectionDistance = 1.6;
    const connectionDistanceSq = connectionDistance * connectionDistance;

    const pointsRef = useRef<THREE.Points<THREE.BufferGeometry, THREE.PointsMaterial>>(null);
    const linesRef = useRef<THREE.LineSegments<THREE.BufferGeometry, THREE.LineBasicMaterial>>(null);

    const data = useMemo(() => {
        const positions = new Float32Array(nodeCount * 3);
        const velocities = new Float32Array(nodeCount * 3);
        const pointColors = new Float32Array(nodeCount * 3);
        const phases = new Float32Array(nodeCount);
        const speeds = new Float32Array(nodeCount);

        const linePositions = new Float32Array(maxSegments * 2 * 3);
        const lineColors = new Float32Array(maxSegments * 2 * 3);

        for (let i = 0; i < nodeCount; i++) {
            const idx = i * 3;
            positions[idx] = (Math.random() - 0.5) * 15;
            positions[idx + 1] = (Math.random() - 0.5) * 9;
            positions[idx + 2] = (Math.random() - 0.5) * 2.5;

            velocities[idx] = (Math.random() - 0.5) * 0.05;
            velocities[idx + 1] = (Math.random() - 0.5) * 0.05;
            velocities[idx + 2] = (Math.random() - 0.5) * 0.02;

            phases[i] = Math.random() * Math.PI * 2;
            speeds[i] = 0.6 + Math.random() * 0.9;
        }

        return {
            positions,
            velocities,
            pointColors,
            phases,
            speeds,
            linePositions,
            lineColors,
            connectionCounts: new Uint16Array(nodeCount),
        };
    }, [maxSegments, nodeCount]);

    const baseRgb = useMemo(() => new THREE.Color(baseColor), [baseColor]);
    const highlightRgb = useMemo(() => new THREE.Color(highlightColor), [highlightColor]);

    useFrame(({ clock }, delta) => {
        const points = pointsRef.current;
        const lines = linesRef.current;
        if (!points || !lines) return;

        const time = clock.getElapsedTime();
        const boundedDelta = Math.min(delta, 0.05);

        const px = data.positions;
        const vx = data.velocities;
        const pointColors = data.pointColors;
        const linePositions = data.linePositions;
        const lineColors = data.lineColors;
        const counts = data.connectionCounts;

        counts.fill(0);

        for (let i = 0; i < nodeCount; i++) {
            const idx = i * 3;

            px[idx] += vx[idx] * boundedDelta;
            px[idx + 1] += vx[idx + 1] * boundedDelta;
            px[idx + 2] += vx[idx + 2] * boundedDelta;

            px[idx] += Math.sin(time * data.speeds[i] + data.phases[i]) * 0.0018;
            px[idx + 1] += Math.cos(time * (data.speeds[i] * 0.9) + data.phases[i]) * 0.0018;

            if (Math.abs(px[idx]) > 7.5) vx[idx] *= -1;
            if (Math.abs(px[idx + 1]) > 4.5) vx[idx + 1] *= -1;
            if (Math.abs(px[idx + 2]) > 2.5) vx[idx + 2] *= -1;

            const pulse = (Math.sin(time * 1.7 + data.phases[i]) + 1) * 0.5;
            const t = 0.2 + pulse * 0.8;
            pointColors[idx] = baseRgb.r + (highlightRgb.r - baseRgb.r) * t;
            pointColors[idx + 1] = baseRgb.g + (highlightRgb.g - baseRgb.g) * t;
            pointColors[idx + 2] = baseRgb.b + (highlightRgb.b - baseRgb.b) * t;
        }

        let segmentIndex = 0;
        for (let i = 0; i < nodeCount; i++) {
            const i3 = i * 3;
            for (let j = i + 1; j < nodeCount; j++) {
                if (counts[i] >= maxConnectionsPerNode || counts[j] >= maxConnectionsPerNode) continue;
                if (segmentIndex >= maxSegments) break;

                const j3 = j * 3;
                const dx = px[i3] - px[j3];
                const dy = px[i3 + 1] - px[j3 + 1];
                const dz = px[i3 + 2] - px[j3 + 2];
                const distanceSq = dx * dx + dy * dy + dz * dz;
                if (distanceSq > connectionDistanceSq) continue;

                const distance = Math.sqrt(distanceSq);
                const strength = 1 - distance / connectionDistance;
                const intensity = 0.15 + strength * 0.85;

                const baseLine = segmentIndex * 6;
                linePositions[baseLine] = px[i3];
                linePositions[baseLine + 1] = px[i3 + 1];
                linePositions[baseLine + 2] = px[i3 + 2];
                linePositions[baseLine + 3] = px[j3];
                linePositions[baseLine + 4] = px[j3 + 1];
                linePositions[baseLine + 5] = px[j3 + 2];

                const r = baseRgb.r + (highlightRgb.r - baseRgb.r) * intensity;
                const g = baseRgb.g + (highlightRgb.g - baseRgb.g) * intensity;
                const b = baseRgb.b + (highlightRgb.b - baseRgb.b) * intensity;

                lineColors[baseLine] = r;
                lineColors[baseLine + 1] = g;
                lineColors[baseLine + 2] = b;
                lineColors[baseLine + 3] = r;
                lineColors[baseLine + 4] = g;
                lineColors[baseLine + 5] = b;

                counts[i] += 1;
                counts[j] += 1;
                segmentIndex += 1;
            }
            if (segmentIndex >= maxSegments) break;
        }

        points.geometry.attributes.position.needsUpdate = true;
        points.geometry.attributes.color.needsUpdate = true;
        lines.geometry.attributes.position.needsUpdate = true;
        lines.geometry.attributes.color.needsUpdate = true;
        lines.geometry.setDrawRange(0, segmentIndex * 2);
    });

    return (
        <group>
            <lineSegments ref={linesRef}>
                <bufferGeometry>
                    <bufferAttribute attach="attributes-position" args={[data.linePositions, 3]} />
                    <bufferAttribute attach="attributes-color" args={[data.lineColors, 3]} />
                </bufferGeometry>
                <lineBasicMaterial
                    vertexColors
                    transparent
                    opacity={0.42}
                    blending={THREE.AdditiveBlending}
                    depthWrite={false}
                />
            </lineSegments>

            <points ref={pointsRef}>
                <bufferGeometry>
                    <bufferAttribute attach="attributes-position" args={[data.positions, 3]} />
                    <bufferAttribute attach="attributes-color" args={[data.pointColors, 3]} />
                </bufferGeometry>
                <pointsMaterial
                    size={0.045}
                    vertexColors
                    transparent
                    opacity={0.98}
                    sizeAttenuation
                    blending={THREE.AdditiveBlending}
                    depthWrite={false}
                />
            </points>
        </group>
    );
};
