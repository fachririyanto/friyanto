"use client";

import Link from "next/link";
import { MotionConfig, motion } from "motion/react";

import { ImageCover } from "@/components/custom/image";

import type { FeaturedPost } from "./types";
import { useStore } from "./store";
import { data } from "./data";

export function Carousel() {
    const { store } = useStore();

    return (
        <MotionConfig transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}>
            <div className="relative overflow-hidden">
                <motion.div animate={{ x: `-${store.currentIndex * 100}%` }} className="flex">
                    {
                        data.map((item, key) => (
                            <div className="flex-none p-2 w-full" key={key}>
                                <CarouselItem item={item} />
                            </div>
                        ))
                    }
                </motion.div>
            </div>
        </MotionConfig>
    );
}

function CarouselItem({ item }: { item: FeaturedPost; }) {
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
                    />
                </div>
            </div>
            <div className="w-full md:w-1/3 self-center">
                <div className="md:max-w-[540px]">
                    <h4 className="mb-0.5 font-normal text-muted-foreground text-sm md:text-base">
                        {item.meta}
                    </h4>
                    <h2 className="font-normal text-xl md:3xl xl:text-4xl">
                        {item.title}
                    </h2>
                    <div className="text-editor mt-4 md:mt-6 font-normal text-sm md:text-base xl:text-lg">
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