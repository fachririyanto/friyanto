import { Suspense } from "react";
import type { Metadata } from "next";

import { SITE_URL } from "@/lib/config";

import { Header } from "@/components/block/header";
import { Hero } from "@/components/block/hero";
import { Featured } from "@/components/block/featured";
import { ICSCompute } from "@/components/block/icscompute";
import { Freelance } from "@/components/block/freelance";
import { OpenSource } from "@/components/block/open-source";
import { BINUS } from "@/components/block/binus";
import { Footer } from "@/components/block/footer";

import { BgSceneAnimation } from "@/components/animation";

export const metadata: Metadata = {
    title: "Full-Stack Developer",
};

export default function Page() {
    return (
        <>
            <script
                id="organization-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Person",
                        "name": "Fachri Riyanto",
                        "url": SITE_URL,
                        "logo": `${SITE_URL}/favicon-270x270.png`,
                        "description": "Hi, i'm Fachri Riyanto, Full-Stack Developer who love to build products using modern technologies, and AI vibe code.",
                        "sameAs": [
                            "https://www.linkedin.com/in/friyanto/",
                            "https://github.com/fachririyanto"
                        ],
                        "address": {
                            "@type": "PostalAddress",
                            "addressLocality": "Jakarta",
                            "addressCountry": "Indonesia"
                        },
                        "contactPoint": {
                            "@type": "ContactPoint",
                            "email": "fachririyanto@gmail.com"
                        }
                    }),
                }}
            />
            <Header />
            <Hero />
            <Featured />
            <Suspense>
                <ICSCompute />
                <Freelance />
                <OpenSource />
                <BINUS />
                <Footer />
                <BgSceneAnimation />
            </Suspense>
        </>
    );
}