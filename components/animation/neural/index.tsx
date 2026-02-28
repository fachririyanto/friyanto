"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";

import { useMobile } from "@/lib/hooks/useMobile";

import { NeuralParticles } from "./neural";

function SceneCanvas() {
    const isMobile = useMobile();

    if (isMobile) return null;

    return (
        <div className="fixed inset-0 -z-[1] w-full h-full pointer-events-none">
            <Canvas
                camera={{ position: [0, 0, 6], fov: 45 }}
                dpr={1}
                frameloop="always"
                gl={{ antialias: false, powerPreference: "low-power" }}
                >
                <Suspense fallback={null}>
                    <ambientLight intensity={0.8} />
                    <pointLight position={[10, 10, 10]} intensity={1.5} color="#fbf724" />

                    <NeuralParticles 
                        particleCount={15000}
                        baseColor="#d4d1d4"
                        highlightColor="#a7a5a6"
                    />
                </Suspense>
            </Canvas>
        </div>
    );
}

const Scene = dynamic(() => Promise.resolve(SceneCanvas), { ssr: false });

export { Scene };