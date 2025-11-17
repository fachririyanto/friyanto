import Link from "next/link";
import { ArrowRight } from "lucide-react";

import type { BINUSPost } from "./types";
import { data } from "./data";

export function BINUS() {
    return (
        <section className="py-10 md:py-12 lg:py-16">
            <div className="container">
                <header className="flex flex-wrap gap-4 mb-6 md:flex-nowrap md:gap-0 md:mb-10 lg:mb-12">
                    <h2 className="w-full font-georgia text-[40px] leading-[0.76] uppercase -tracking-[1px] md:border-r-4 md:border-double md:border-line-gray md:w-auto md:pr-10 md:text-[54px] lg:text-[64px]">
                        BINUS<br/>Websites
                    </h2>
                    <div className="w-full md:pl-10 md:self-end">
                        <div className="font-medium md:max-w-[540px] md:text-lg">
                            Maintenance and supports over 500+ websites for BINUS University using PHP and WordPress. I have already build hundreds of them.
                        </div>
                    </div>
                </header>
            </div>
            <div className="container wide">
                <div className="flex flex-wrap gap-3 md:gap-0 md:-mx-3">
                    {
                        data.map((item, key) => (
                            <PostItem key={key} item={item} />
                        ))
                    }
                </div>
                <div className="mt-6 text-center">
                    And many more... that I can&apos;t list all here
                </div>
            </div>
        </section>
    );
}

function PostItem({ item }: { item: BINUSPost; }) {
    return (
        <div className="w-full md:px-3 md:pb-6 md:w-1/2 lg:w-1/3 xl:w-1/4">
            <div className="flex relative p-4 h-full rounded-lg bg-background overflow-hidden shadow transition-all hover:drop-shadow-md">
                <div className="flex-grow pr-5">
                    <h3 className="font-semibold text-sm md:text-base !leading-snug">
                        {item.title}
                    </h3>
                    <p className="mt-1.5 text-sm text-font-meta md:text-base">
                        {item.meta}
                    </p>
                </div>
                <div>
                    <ArrowRight className="w-5 h-5 -rotate-45" />
                </div>
                <Link target="_blank" href={item.url} className="absolute inset-0 z-10">
                    <span className="sr-only">{item.title}</span>
                </Link>
            </div>
        </div>
    );
}