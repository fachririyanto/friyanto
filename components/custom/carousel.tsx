"use client";

import { createContext, useContext, useState } from "react";
import { MotionConfig, motion } from "motion/react";

import { cn } from "@/lib/shadcn/utils";

interface CarouselContextStore {
    currentIndex: number;
    onClickNext?: () => void;
    onClickPrev?: () => void;
}

interface CarouselProps {
    children: React.ReactNode;
    className?: string;
}

const CarouselContext = createContext<CarouselContextStore>({
    currentIndex: 0,
});

export const useCarousel = () => {
    const context = useContext(CarouselContext);

    if (!context) {
        throw new Error("useCarousel must be used within an CarouselProvider");
    }

    return context;
};

export function CarouselProvider({ children }: CarouselProps) {
    const [index, setIndex] = useState<number>(0);

    const value: CarouselContextStore = {
        currentIndex: index,
        onClickPrev: () => {
            setIndex(prev => prev - 1);
        },
        onClickNext: () => {
            setIndex(prev => prev + 1);
        },
    };

    return (
        <CarouselContext.Provider value={value}>
            {children}
        </CarouselContext.Provider>
    );
}

export function Carousel({ children, className }: CarouselProps) {
    const { currentIndex } = useCarousel();

    return (
        <MotionConfig transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}>
            <div className={cn("relative overflow-hidden", className)}>
                <motion.div animate={{ x: `-${currentIndex * 100}%` }} className="flex">
                    {children}
                </motion.div>
            </div>
        </MotionConfig>
    );
}

export function CarouselItem({ children, className }: CarouselProps) {
    return (
        <div className={cn("flex-none p-2 w-full", className)}>
            {children}
        </div>
    );
}

export function CarouselNavButton({
    children,
    disabled,
    onClick,
}: {
    children: React.ReactNode;
    disabled?: boolean;
    onClick?: () => void;
}) {
    return (
        <motion.div whileHover={{ scale: disabled ? 1 : 1.1 }} whileTap={{ scale: disabled ? 1 : 0.9 }}>
            <button
                type="button"
                onClick={onClick}
                className={cn(
                    "inline-flex w-12 h-12 md:w-16 md:h-16 items-center justify-center bg-background border-2 border-black rounded-full shadow-base",
                    disabled && "opacity-50 pointer-events-none",
                )}
                >
                {children}
            </button>
        </motion.div>
    );
}