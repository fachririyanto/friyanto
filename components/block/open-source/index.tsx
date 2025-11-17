import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { ImageCover } from "@/components/custom/image";

import type { OpenSourcePost } from "./types";
import { data } from "./data";

export function OpenSource() {
    return (
        <section className="py-10 md:py-12 lg:py-16">
            <div className="container">
                <header className="flex flex-wrap gap-4 mb-6 md:flex-nowrap md:gap-0 md:mb-10 lg:mb-12">
                    <h2 className="w-full font-georgia text-[40px] leading-[0.76] uppercase -tracking-[1px] md:border-r-4 md:border-double md:border-line-gray md:w-auto md:pr-10 md:text-[54px] lg:text-[64px]">
                        Open<br/>Source
                    </h2>
                    <div className="w-full md:pl-10 md:self-end">
                        <div className="font-medium md:max-w-[540px] md:text-lg">
                            Building and documenting small open-source projects as I explore new technologies. Browse them on my <a target="_blank" href="https://github.com/fachririyanto" className="border-b border-black">GitHub</a>.
                        </div>
                    </div>
                </header>
            </div>
            <div className="container wide">
                <div className="flex flex-wrap md:-mx-4 gap-4 md:gap-0 md:flex-nowrap">
                    <div className="md:px-4 w-full md:w-1/2">
                        <BigPostItem item={data[0]} />
                    </div>
                    <div className="md:px-4 w-full md:w-1/2">
                        <div className="flex flex-wrap gap-4">
                            {
                                data.slice(1).map((item, key) => (
                                    <PostItem key={key} item={item} />
                                ))
                            }
                        </div>
                        <div className="mt-6 md:mt-8 text-center">
                            <Link href="https://github.com/fachririyanto" className="inline-flex gap-2 font-medium items-center border-b border-black">
                                View More Source
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function BigPostItem({ item }: { item: OpenSourcePost; }) {
    return (
        <div className="block p-2 overflow-hidden bg-white rounded-lg shadow">
            <ImageCover
                ratiowidth={2245}
                ratioheight={1400}
                src={item.featured}
                alt={item.title}
                rounded="rounded"
                objectposition="object-left-top"
            />
            <div className="flex-grow py-4 px-2 md:p-4">
                <h3 className="font-semibold text-base md:text-lg !leading-snug">
                    {item.title}
                </h3>
                <p className="leading-normal">
                    {item.description}
                </p>
                <p className="mt-8 text-right">
                    <Link
                        href={item.url}
                        target="_blank"
                        className={buttonVariants({ variant: "default", className: "gap-2 !h-11 !pl-5 pr-3 !rounded-[40px]" })}
                        >
                        <span>View Source</span>
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </p>
            </div>
        </div>
    );
}

function PostItem({ item }: { item: OpenSourcePost; }) {
    return (
        <div className="block w-full overflow-hidden bg-white rounded-lg shadow">
            <div className="flex-grow p-4 md:p-5">
                <h3 className="font-semibold text-base md:text-lg !leading-snug">
                    {item.title}
                </h3>
                <p className="leading-normal">
                    {item.description}
                </p>
                <p className="mt-5 text-right">
                    <Link
                        href={item.url}
                        target="_blank"
                        className={buttonVariants({ variant: "default", className: "gap-2 !h-11 !pl-5 pr-3 !rounded-[40px]" })}
                        >
                        <span>View Source</span>
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </p>
            </div>
        </div>
    );
}