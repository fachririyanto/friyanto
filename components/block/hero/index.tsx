import Link from "next/link";
import { Mail } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { ButtonMyWork } from "./button-my-work";
import { ButtonVibeCode } from "./button-vibe-code";

export function Hero() {
    return (
        <section className="relative py-8 md:py-10 lg:py-12 overflow-hidden">
            <div className="container relative z-10">
                <div className="mx-auto pt-10 max-w-[720px] text-center">
                    <h1 className="text-[72px] md:text-[104px] lg:text-[124px] font-serif leading-[0.8]">
                        Fachri Riyanto
                    </h1>
                    <p className="mt-6 md:mt-8 px-4 md:text-lg leading-relaxed">
                        Full-Stack Developer who build products using HTML5, CSS3, Tailwind, Shadcn, PHP, WordPress, Laravel, Python, FastAPI, JavaScript, jQuery, ReactJS, NextJS, TypeScript, MySQL, PostgreSQL, Supabase, Docker, and <ButtonVibeCode />
                    </p>
                    <p className="flex flex-wrap gap-6 mt-8 items-center justify-center">
                        <Link
                            href="mailto:fachririyanto@gmail.com"
                            className={buttonVariants({ variant: 'default', className: 'relative z-10 md:gap-3 !h-10 !px-4 md:!h-12 md:!px-6 md:!text-lg !rounded-full' })}
                            >
                            <Mail className="size-5.5" />
                            <span>Contact Me</span>
                        </Link>
                        <ButtonMyWork />
                    </p>
                </div>
            </div>
        </section>
    );
}