"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";

import { useMobile } from "@/lib/hooks/useMobile";

import { SandParticles } from "./sand";

function SceneCanvas() {
    const isMobile = useMobile();

    if (isMobile) return null;

    return (
        <div className="fixed inset-0 -z-[1] w-full h-full pointer-events-none">
            <Canvas
                camera={{ position: [0, 0, 6], fov: 45 }}
                dpr={1}
                frameloop="demand"
                gl={{ antialias: false, powerPreference: "low-power" }}
                >
                <Suspense fallback={null}>
                    <ambientLight intensity={0.8} />
                    <pointLight position={[10, 10, 10]} intensity={1.5} color="#fb24c9" />

                    <SandParticles 
                        particleCount={35000}
                        baseColor="#dda8d2"
                        highlightColor="#ebbcd5"
                    />
                </Suspense>
            </Canvas>
        </div>
    );
}

const Scene = dynamic(() => Promise.resolve(SceneCanvas), { ssr: false });

export { Scene };