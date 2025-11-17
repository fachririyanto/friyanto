"use client";

import { motion } from "motion/react";
import { twMerge } from "tailwind-merge";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { useStore } from "./store";
import { data } from "./data";

export function ButtonNav() {
    const { store, setStore } = useStore();

    return (
        <div className="hidden md:flex flex-grow gap-2 md:pl-10 md:w-auto">
            <ButtonNavItem
                onClick={() => setStore(prev => ({ currentIndex: prev.currentIndex - 1 }))}
                disabled={store.currentIndex <= 0 ? true : false}
                >
                <ArrowLeft className="w-6 h-6 md:w-8 md:h-8" />
            </ButtonNavItem>
            <ButtonNavItem
                onClick={() => setStore(prev => ({ currentIndex: prev.currentIndex + 1 }))}
                disabled={store.currentIndex >= (data.length - 1) ? true : false}
                >
                <ArrowRight className="w-6 h-6 md:w-8 md:h-8" />
            </ButtonNavItem>
        </div>
    );
}

export function ButtonNavMobile() {
    const { store, setStore } = useStore();

    return (
        <div className="flex gap-1.5 mt-4 justify-end md:hidden">
            <ButtonNavItem
                onClick={() => setStore(prev => ({ currentIndex: prev.currentIndex - 1 }))}
                disabled={store.currentIndex <= 0 ? true : false}
                >
                <ArrowLeft className="w-6 h-6 md:w-8 md:h-8" />
            </ButtonNavItem>
            <ButtonNavItem
                onClick={() => setStore(prev => ({ currentIndex: prev.currentIndex + 1 }))}
                disabled={store.currentIndex >= (data.length - 1) ? true : false}
                >
                <ArrowRight className="w-6 h-6 md:w-8 md:h-8" />
            </ButtonNavItem>
        </div>
    );
}

function ButtonNavItem({
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
                className={twMerge(
                    "inline-flex w-12 h-12 md:w-16 md:h-16 items-center justify-center bg-white border-2 border-black rounded-full shadow-base",
                    disabled && "opacity-50 pointer-events-none",
                )}
                >
                {children}
            </button>
        </motion.div>
    );
}