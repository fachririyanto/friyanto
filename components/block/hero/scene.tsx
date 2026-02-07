"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";

import { useMobile } from "@/lib/hooks/useMobile";

import { SandParticles } from "./sand";

function Scene() {
    const isMobile = useMobile();

    if (isMobile) return null;

    return (
        <div className="absolute inset-0 z-[2] w-full h-full">
            <Canvas camera={{ position: [0, 0, 6], fov: 45 }} dpr={[1, 2]}>
                <Suspense fallback={null}>
                    {/* Lighting: increased intensity for the light theme */}
                    <ambientLight intensity={0.8} />
                    <pointLight position={[10, 10, 10]} intensity={1.5} color="#fbbf24" />

                    {/* Particle System 
                        Colors adjusted for Light Mode:
                        baseColor: Soft Sand / Beige
                        highlightColor: Darker Tan/Gold for contrast against white
                    */}
                    <SandParticles 
                        particleCount={30000}
                        baseColor="#d2b170"
                        highlightColor="#ad7816"
                    />
                    <Environment preset="city" />
                </Suspense>
            </Canvas>
        </div>
    );
}

export default Scene;