import Posts from "~/@data/open-source-projects.json";

import { Link } from "@remix-run/react";
import { buttonVariants } from "~/components/shadcn/ui/button";
import { ImageCover } from "~/components/ui/image";
import { ArrowRight } from "lucide-react";

export default function OpenSourceProjects() {
    const post = Posts[0];

    return (
        <section className="py-12 lg:py-16 xl:py-20">
            <div className="container">
                <header className="flex flex-wrap gap-4 mb-6 md:flex-nowrap md:gap-0 md:mb-10 lg:mb-16">
                    <h2 className="w-full font-semibold text-[48px] leading-[0.76] uppercase md:border-r-4 md:border-double md:border-line-gray md:w-auto md:pr-10 md:text-[64px]">
                        Open<br/>Source
                    </h2>
                    <div className="w-full md:pl-10 md:self-end">
                        <div className="font-medium md:max-w-[540px] md:text-lg">
                            Open source projects that I have contributed to. Learning and exploring new technologies. View more on my <a target="_blank" href="https://github.com/fachririyanto" className="border-b border-black">GitHub</a>.
                        </div>
                    </div>
                </header>
            </div>
            <div className="container wide">
                <div className="flex flex-wrap md:-mx-4 gap-4 md:gap-0 md:flex-nowrap">
                    <div className="md:px-4 w-full md:w-1/2">
                        <div className="block p-2 overflow-hidden bg-white rounded-lg shadow-base">
                            <ImageCover
                                ratiowidth={2245}
                                ratioheight={1400}
                                src={post.featured}
                                alt={post.title}
                                rounded="rounded"
                                objectposition="object-left-top"
                            />
                            <div className="flex-grow py-4 px-2 md:p-4">
                                <h3 className="font-semibold text-base md:text-lg !leading-snug">
                                    {post.title}
                                </h3>
                                <p className="leading-normal">
                                    {post.description}
                                </p>
                                <p className="mt-8 text-right">
                                    <Link
                                        to={post.url}
                                        target="_blank"
                                        className={buttonVariants({ variant: 'default', className: 'gap-2 !h-11 pl-5 pr-3 !rounded-[40px]' })}
                                        >
                                        <span>View Project</span>
                                        <ArrowRight className="w-5 h-5" />
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="md:px-4 w-full md:w-1/2">
                        <div className="flex flex-wrap gap-4">
                            {Posts.slice(1).map((post, i) => (
                                <div key={i} className="block w-full overflow-hidden bg-white rounded-lg shadow-base">
                                    <div className="flex-grow p-4 md:p-5">
                                        <h3 className="font-semibold text-base md:text-lg !leading-snug">
                                            {post.title}
                                        </h3>
                                        <p className="leading-normal">
                                            {post.description}
                                        </p>
                                        <p className="mt-5 text-right">
                                            <Link
                                                to={post.url}
                                                target="_blank"
                                                className={buttonVariants({ variant: 'default', className: 'gap-2 !h-11 pl-5 pr-3 !rounded-[40px]' })}
                                                >
                                                <span>View Project</span>
                                                <ArrowRight className="w-5 h-5" />
                                            </Link>
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="mt-6 md:mt-8 text-center">
                            <Link to="https://github.com/fachririyanto" className="inline-flex gap-2 font-semibold items-center border-b border-black">
                                View More Projects
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}