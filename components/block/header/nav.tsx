"use client";

import { HTMLAttributeAnchorTarget } from "react";
import Link from "next/link";
import { motion } from "motion/react";

export function Nav() {
    return (
        <motion.nav
            initial={{ opacity: 0, y: -80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.32, 0.72, 0, 1] }}
            className="fixed z-50 top-0 left-0 right-0 h-20 bg-[rgba(255,255,255,.9)]"
            >
            <div className="flex px-4 lg:px-6 h-full items-center">
                <div className="flex-grow font-medium text-4xl uppercase">
                    <Link href="/">FR</Link>
                </div>
                <div className="pl-8">
                    <ul className="flex gap-5 md:gap-8">
                        <NavLink href="https://www.linkedin.com/in/friyanto/" target="_blank">
                            Linkedin
                        </NavLink>
                        <NavLink href="https://github.com/fachririyanto" target="_blank">
                            Github
                        </NavLink>
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
                <span className="group-hover:border-b group-hover:border-black">
                    {children}
                </span>
            </Link>
        </li>
    );
}