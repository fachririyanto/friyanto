import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { ImageCover } from "@/components/custom/image";

import type { RedpumpkinPost } from "./types";
import { data } from "./data";

export function ICSCompute() {
    return (
        <section className="py-10 md:py-12 lg:py-16">
            <div className="container">
                <header className="flex flex-wrap gap-4 mb-6 md:flex-nowrap md:gap-0 md:mb-10 lg:mb-12">
                    <h2 className="w-full font-georgia text-[40px] leading-[0.76] uppercase -tracking-[1px] md:border-r-4 md:border-double md:border-line-gray md:w-auto md:pr-10 md:text-[54px] lg:text-[64px]">
                        Redpumpkin<br/>Work
                    </h2>
                    <div className="w-full md:pl-10 md:self-end">
                        <div className="font-medium md:max-w-[540px] md:text-lg">
                            After almost 10 years working at <Link href="https://binus.ac.id" target="_blank" className="border-b border-black font-medium">BINUS University</Link>. Now I am working as Front End Developer at <Link href="https://www.icscompute.com" target="_blank" className="border-b border-black font-medium">ICS Compute</Link>, focusing on developing their Generative AI product, <Link href="https://redpumpkin.ai" target="_blank" className="border-b border-black font-medium">Redpumpkin.AI</Link>.
                        </div>
                    </div>
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

function PostItem({ item }: { item: RedpumpkinPost; }) {
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
                    <h3 className="font-medium md:text-lg leading-tight">
                        {item.title}
                    </h3>
                    <p className="mt-1 text-muted-foreground text-sm md:text-base leading-tight">
                        {item.meta}
                    </p>
                    {
                        item.url === "" ? null : (
                            <p className="flex gap-2 mt-6 md:mt-10 font-medium items-center justify-end">
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