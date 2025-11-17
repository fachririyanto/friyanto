import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { ImageCover } from "@/components/custom/image";

import { FreelancePost } from "./types";
import { data } from "./data";

export function Freelance() {
    return (
        <section className="py-10 md:py-12 lg:py-16">
            <div className="container">
                <header className="mb-8 md:mb-10 lg:mb-12">
                    <h2 className="font-georgia text-[40px] leading-[0.8] uppercase -tracking-[1px] md:text-[54px] lg:text-[64px]">
                        Freelance<br/>Work
                    </h2>
                </header>
            </div>
            <div className="container wide">
                <div className="flex flex-wrap gap-4 md:gap-0 md:-mx-4">
                    {
                        data.map((item, key) => (
                            <PostItem key={key} item={item} />
                        ))
                    }
                </div>
            </div>
        </section>
    );
}

function PostItem({ item }: { item: FreelancePost; }) {
    return (
        <div className="w-full md:px-4 md:pb-8 md:w-1/2 lg:w-1/3">
            <div className="relative p-2 h-full rounded-lg bg-background overflow-hidden shadow transition-all hover:drop-shadow-lg">
                <ImageCover
                    src={item.featured}
                    ratiowidth={3}
                    ratioheight={2}
                    loading="lazy"
                    alt={item.title}
                    rounded="rounded"
                />
                <div className="pt-5 pb-2.5 px-4">
                    <h3 className="font-semibold md:text-lg">
                        {item.title}
                    </h3>
                    <p className="mt-0.5 text-font-meta text-sm md:text-base">
                        {item.meta}
                    </p>
                    {
                        item.url === "" ? null : (
                            <p className="flex gap-2 mt-6 md:mt-10 font-semibold uppercase text-xs md:text-sm items-center justify-end">
                                Visit Website <ArrowRight className="relative z-20 w-5 h-5 -rotate-45" />
                            </p>
                        )
                    }
                </div>
                {
                    item.url === "" ? null : (
                        <Link target="_blank" href={item.url} className="absolute inset-0 z-10">
                            <span className="sr-only">{item.title}</span>
                        </Link>
                    )
                }
            </div>
        </div>
    );
}