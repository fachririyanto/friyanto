"use client";

import { useCallback } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

import type { FeaturedPost } from "./types";
import { featured } from "./data";

import { ImageCover } from "@/components/custom/image";
import {
    CarouselProvider,
    Carousel,
    CarouselItem,
    CarouselNavButton,
    useCarousel,
} from "@/components/custom/carousel";

export function Featured() {
    return (
        <CarouselProvider>
            <div className="relative">
                <Carousel className="-mx-2">
                    {
                        featured.map((item, key) => (
                            <CarouselItem key={key}>
                                <FeaturedItem item={item} />
                            </CarouselItem>
                        ))
                    }
                </Carousel>
                <FeaturedNav />
            </div>
        </CarouselProvider>
    );
}

function FeaturedNav() {
    const { onClickPrev, onClickNext, currentIndex } = useCarousel();

    const handleClickPrev = useCallback(() => {
        if (currentIndex === 0) {
            return;
        }
        onClickPrev?.();
    }, [currentIndex, onClickPrev]);

    const handleClickNext = useCallback(() => {
        if (currentIndex === featured.length - 1) {
            return;
        }
        onClickNext?.();
    }, [currentIndex, onClickNext]);

    return (
        <nav className="flex gap-2 mt-2 md:mt-0 md:gap-0 md:absolute md:top-1/2 left-0 right-0 z-10 xl:-mx-7 md:h-0 justify-end md:justify-between">
            <CarouselNavButton onClick={handleClickPrev} disabled={currentIndex === 0}>
                <ArrowLeft className="w-6 h-6 md:w-8 md:h-8" />
            </CarouselNavButton>
            <CarouselNavButton onClick={handleClickNext} disabled={currentIndex === featured.length - 1}>
                <ArrowRight className="w-6 h-6 md:w-8 md:h-8" />
            </CarouselNavButton>
        </nav>
    );
}

function FeaturedItem({ item }: { item: FeaturedPost; }) {
    return (
        <div className="flex flex-wrap gap-4 md:gap-0 md:flex-nowrap">
            <div className="w-full md:w-2/3 md:pr-10 xl:pr-16">
                <div className="block p-2 overflow-hidden bg-background rounded-lg shadow">
                    <ImageCover
                        ratiowidth={2245}
                        ratioheight={1400}
                        src={item.featured}
                        alt={item.title}
                        rounded="rounded"
                        objectposition="object-left-top"
                        loading="lazy"
                    />
                </div>
            </div>
            <div className="w-full md:w-1/3 self-center">
                <div className="md:pr-12 md:max-w-[540px]">
                    <h4 className="mb-0.5 font-normal text-muted-foreground text-sm md:text-base">
                        {item.meta}
                    </h4>
                    <h2 className="font-medium text-xl md:3xl xl:text-4xl">
                        {item.title}
                    </h2>
                    <div className="text-editor mt-4 md:mt-6 font-normal text-sm md:text-base">
                        <p className="hidden xl:block md-3 md:mb-5" dangerouslySetInnerHTML={{ __html: item.description }}></p>
                        <p className="mb-3 md:mb-5">
                            <strong>Tech Stack:</strong><br/>
                            {item.tech.join(", ")}
                        </p>
                        {
                            item.url === "" ? null : (
                                <p>
                                    <strong>{item.text_demo}</strong><br/>
                                    <Link target="blank" href={item.url} className="border-b border-black">
                                        {item.url}
                                    </Link>
                                </p>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}