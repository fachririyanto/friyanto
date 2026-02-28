"use client";

import { HTMLAttributeAnchorTarget } from "react";
import Link from "next/link";
import { motion } from "motion/react";

import { cn } from "@/lib/shadcn/utils";
import { useScroll } from "@/lib/hooks/useScroll";

import { ButtonSwitchTheme } from "./button-switch-theme";

export function Nav() {
    const { position } = useScroll();
    const hasBackground = position > 80;

    return (
        <motion.nav
            initial={{ opacity: 0, y: -80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.32, 0.72, 0, 1] }}
            className={cn("fixed z-50 top-0 left-0 right-0 h-20 transition-colors duration-300", hasBackground && "bg-[rgba(248,248,248,.9)] dark:bg-[rgba(24,24,24,.9)]")}
            >
            <div className="flex px-4 lg:px-6 h-full items-center">
                <div className="flex-grow">
                    <Link href="/" className="font-serif font-medium text-[40px] leading-none uppercase outline-none">FR</Link>
                </div>
                <div className="pl-8">
                    <ul className="flex gap-5 md:gap-8 items-center">
                        <NavLink href="https://www.linkedin.com/in/friyanto/" target="_blank">
                            Linkedin
                        </NavLink>
                        <NavLink href="https://github.com/fachririyanto" target="_blank">
                            Github
                        </NavLink>
                        <li>
                            <ButtonSwitchTheme />
                        </li>
                    </ul>
                </div>
            </div>
        </motion.nav>
    );
}

function NavLink({ href, target, children }: {
    href: string,
    target: HTMLAttributeAnchorTarget;
    children: React.ReactNode;
}) {
    return (
        <li className="group">
            <Link target={target} href={href} className="block font-medium text-sm py-3 md:text-base">
                <span className="group-hover:border-b group-hover:border-foreground">
                    {children}
                </span>
            </Link>
        </li>
    );
}