"use client";

import { useCallback } from "react";

import { useAppStore } from "@/app/store";
import { cn } from "@/lib/shadcn/utils";
import { useMobile } from "@/lib/hooks/useMobile";

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
        <button
            type="button"
            className="inline-flex gap-1.5 items-center border-b border-foreground"
            onClick={handleClick}
            >
            Vibe Code
            <span className={cn(
                "w-3 h-3 rounded-full bg-muted-foreground",
                store.vibeCodeStep === 1 && "bg-rose-800",
                store.vibeCodeStep === 2 && "bg-green-800",
            )}></span>
        </button>
    );
}