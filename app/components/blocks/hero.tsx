import Metadata from "~/@data/meta.json";

import { buttonVariants } from "~/components/shadcn/ui/button";
import { Link } from "@remix-run/react";
import { Mail } from "lucide-react";

export default function Hero() {
    return (
        <section className="py-16 lg:pt-20 lg:pb-[120px]">
            <div className="container">
                <div className="mb-16 text-center">
                    <div className="inline-flex gap-5 md:gap-3 mx-auto py-3 px-4 bg-[#f2f2f2] rounded-[40px] items-center">
                        <span className="block min-w-[16px] w-4 h-4 rounded-full bg-green-500 shadow"></span>
                        <span className="block flex-grow font-medium text-left md:text-center text-sm md:text-base">
                            Currently working as Front End Developer at ICS Compute.
                            <Link to="/working-at-icscompute" className="ml-2 font-semibold border-b border-black">
                                Read Story
                            </Link>
                        </span>
                    </div>
                </div>
                <div className="mt-6 mx-auto max-w-[640px] text-center">
                    <h1 className="text-[80px] font-georgia font-medium leading-[0.8]">
                        {Metadata.title}
                    </h1>
                    <p className="mt-8 text-xl leading-normal">
                        {Metadata.description}
                    </p>
                    <p className="flex flex-wrap gap-6 mt-8 items-center justify-center">
                        <Link
                            to="mailto:fachririyanto@gmail.com"
                            className={buttonVariants({ variant: 'default', className: 'gap-3 !h-12 !px-6 !text-lg !rounded-[40px]' })}
                            >
                            <Mail />
                            <span>Hire Me</span>
                        </Link>
                        <Link to="#block-featured-projects" className="text-lg border-b border-black">
                            Or see my work below
                        </Link>
                    </p>
                </div>
            </div>
        </section>
    );
}