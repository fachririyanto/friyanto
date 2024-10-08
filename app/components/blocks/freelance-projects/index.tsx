import type { Project } from "~/@types/project";
import Posts from "~/@data/freelance-projects.json";

import { Link } from "@remix-run/react";
import { ImageCover } from "~/components/ui/image";
import { ArrowRight } from "lucide-react";

export default function FreelanceProjects() {
    return (
        <section className="py-12 lg:py-16 xl:py-20">
            <div className="container">
                <header className="mb-8 md:mb-10 lg:mb-16">
                    <h2 className="font-semibold text-[48px] leading-[0.8] uppercase md:text-[64px]">
                        Freelance<br/>Projects
                    </h2>
                </header>
            </div>
            <div className="container wide">
                <div className="flex flex-wrap gap-4 md:gap-0 md:-mx-4">
                    {Posts.map((post: Project, i) => (
                        <div key={i} className="w-full md:px-4 md:pb-8 md:w-1/2 lg:w-1/3">
                            <div className="relative p-2 h-full rounded-lg bg-white overflow-hidden shadow-base transition-all hover:drop-shadow-md">
                                <ImageCover
                                    src={post.featured}
                                    ratiowidth={3}
                                    ratioheight={2}
                                    loading="lazy"
                                    alt={post.title}
                                    rounded="rounded"
                                />
                                <div className="pt-5 pb-2.5 px-4">
                                    <h3 className="font-semibold md:text-lg">
                                        {post.title}
                                    </h3>
                                    <p className="mt-0.5 text-font-meta text-sm md:text-base">
                                        {post.meta}
                                    </p>

                                    {post.url === '' ? null : (
                                        <p className="flex gap-2 mt-6 md:mt-10 font-semibold uppercase text-xs md:text-sm items-center justify-end">
                                            Visit Website <ArrowRight className="relative z-20 w-5 h-5" />
                                        </p>
                                    )}
                                </div>

                                {post.url === '' ? null : (
                                    <Link target="_blank" to={post.url} className="absolute inset-0 z-10">
                                        <span className="sr-only">{post.title}</span>
                                    </Link>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}