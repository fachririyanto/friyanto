import type { Metadata } from "next";

import { Header } from "@/components/block/header";
import { Hero } from "@/components/block/hero";
import { Featured } from "@/components/block/featured";
import { ICSCompute } from "@/components/block/icscompute";
import { Freelance } from "@/components/block/freelance";
import { OpenSource } from "@/components/block/open-source";
import { BINUS } from "@/components/block/binus";
import { Footer } from "@/components/block/footer";

export const metadata: Metadata = {
    title: "Fullstack Developer",
};

export default function Page() {
    return (
        <>
            <Header />
            <Hero />
            <Featured />
            <ICSCompute />
            <Freelance />
            <OpenSource />
            <BINUS />
            <Footer />
        </>
    );
}