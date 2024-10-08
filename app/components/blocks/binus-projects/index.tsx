import type { Project } from "~/@types/project";
import Posts from "~/@data/binus-projects.json";

import { Link } from "@remix-run/react";
import { ArrowRight } from "lucide-react";

export default function BinusProjects() {
    return (
        <section className="py-12 lg:py-16 xl:py-20">
            <div className="container">
                <header className="flex flex-wrap gap-4 mb-6 md:flex-nowrap md:gap-0 md:mb-10 lg:mb-16">
                    <h2 className="w-full font-semibold text-[48px] leading-[0.76] uppercase md:border-r-4 md:border-double md:border-line-gray md:w-auto md:pr-10 md:text-[64px]">
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
                    {Posts.map((post: Project, i) => (
                        <div key={i} className="w-full md:px-3 md:pb-6 md:w-1/2 lg:w-1/3 xl:w-1/4">
                            <div className="flex relative p-4 h-full rounded-lg bg-white overflow-hidden shadow-base transition-all hover:drop-shadow-md">
                                <div className="flex-grow pr-5">
                                    <h3 className="font-semibold text-sm md:text-base !leading-snug">
                                        {post.title}
                                    </h3>
                                    <p className="mt-1.5 text-sm text-font-meta md:text-base">
                                        {post.meta}
                                    </p>
                                </div>
                                <div>
                                    <ArrowRight className="w-5 h-5" />
                                </div>
                                <Link target="_blank" to={post.url} className="absolute inset-0 z-10">
                                    <span className="sr-only">{post.title}</span>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mt-6 text-center">
                    And many more... that i can't list all here
                </div>
            </div>
        </section>
    );
}