import Link from "next/link";
import { Mail } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { ButtonMyWork } from "./button-my-work";

export function Hero() {
    return (
        <section className="py-8 md:py-10 lg:py-12">
            <div className="container">
                <div className="mb-10 text-center">
                    <div className="hidden gap-5 md:gap-3 mx-auto py-3 px-4 bg-yellow-50 border border-yellow-100 rounded-full items-center">
                        <span className="block flex-grow font-medium text-left md:text-center text-sm md:text-base">
                            Currently working as Front End Developer at <Link href="https://www.icscompute.com" target="_blank" className="border-b border-black">ICS Compute</Link>.
                        </span>
                    </div>
                </div>
                <div className="mx-auto max-w-[720px] text-center">
                    <h1 className="text-[48px] md:text-[64px] lg:text-[72px] xl:text-[80px] font-georgia leading-[0.8] -tracking-[1px]">
                        Fachri Riyanto
                    </h1>
                    <p className="mt-6 md:mt-8 md:text-xl leading-[1.6]">
                        Fullstack Developer who build applications using HTML5, CSS3, Tailwind, PHP, WordPress, Laravel, Python, FastAPI, JavaScript, jQuery, ReactJS, NextJS, TypeScript, MySQL, PostgreSQL, Supabase and Docker.
                    </p>
                    <p className="flex flex-wrap gap-6 mt-8 items-center justify-center">
                        <Link
                            href="mailto:fachririyanto@gmail.com"
                            className={buttonVariants({ variant: 'default', className: 'md:gap-3 !h-10 !px-4 md:!h-12 md:!px-6 md:!text-lg !rounded-full' })}
                            >
                            <Mail className="size-5" />
                            <span>Contact Me</span>
                        </Link>
                        <ButtonMyWork />
                    </p>
                </div>
            </div>
        </section>
    );
}