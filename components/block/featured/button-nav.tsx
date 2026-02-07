"use client";

import { useCallback } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { data } from "./data";

import { CarouselNavButton, useCarousel } from "@/components/custom/carousel";

export function ButtonNav() {
    const { onClickPrev, onClickNext, currentIndex } = useCarousel();
    
    const handleClickPrev = useCallback(() => {
        if (currentIndex === 0) {
            return;
        }
        onClickPrev?.();
    }, [currentIndex, onClickPrev]);

    const handleClickNext = useCallback(() => {
        if (currentIndex === data.length - 1) {
            return;
        }
        onClickNext?.();
    }, [currentIndex, onClickNext]);

    return (
        <div className="hidden md:flex flex-grow gap-2 md:pl-10 md:w-auto">
            <CarouselNavButton onClick={handleClickPrev} disabled={currentIndex === 0}>
                <ArrowLeft className="w-6 h-6 md:w-8 md:h-8" />
            </CarouselNavButton>
            <CarouselNavButton onClick={handleClickNext} disabled={currentIndex === data.length - 1}>
                <ArrowRight className="w-6 h-6 md:w-8 md:h-8" />
            </CarouselNavButton>
        </div>
    );
}

export function ButtonNavMobile() {
    const { onClickPrev, onClickNext, currentIndex } = useCarousel();
    
    const handleClickPrev = useCallback(() => {
        if (currentIndex === 0) {
            return;
        }
        onClickPrev?.();
    }, [currentIndex, onClickPrev]);

    const handleClickNext = useCallback(() => {
        if (currentIndex === data.length - 1) {
            return;
        }
        onClickNext?.();
    }, [currentIndex, onClickNext]);

    return (
        <div className="flex gap-1.5 mt-4 justify-end md:hidden">
            <CarouselNavButton onClick={handleClickPrev} disabled={currentIndex === 0}>
                <ArrowLeft className="w-6 h-6 md:w-8 md:h-8" />
            </CarouselNavButton>
            <CarouselNavButton onClick={handleClickNext} disabled={currentIndex === data.length - 1}>
                <ArrowRight className="w-6 h-6 md:w-8 md:h-8" />
            </CarouselNavButton>
        </div>
    );
}