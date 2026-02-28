"use client";

import { useCallback } from "react";

import { useAppStore } from "@/app/store";
import { cn } from "@/lib/shadcn/utils";
import { useMobile } from "@/lib/hooks/useMobile";

import { Switcher } from "@/components/custom/switcher";

export function ButtonVibeCode() {
    const [store, setStore] = useAppStore();
    const isMobile = useMobile();

    const handleClick = useCallback(() => {
        // rotate to 0 if vibeCodeStep is 2
        setStore((prev) => ({
            ...prev,
            vibeCodeStep: prev.vibeCodeStep === 2 ? 0 : prev.vibeCodeStep + 1,
        }));
    }, [setStore]);

    if (isMobile) {
        return "Vibe Code";
    }

    return (
        <span className="inline-flex gap-1.5 items-center">
            Vibe Code
            <Switcher
                isOn={store.vibeCodeStep > 0}
                activeColor={store.vibeCodeStep === 1 ? "bg-rose-500" : "bg-blue-500"}
                onToggle={handleClick}
            />
        </span>
    );
}