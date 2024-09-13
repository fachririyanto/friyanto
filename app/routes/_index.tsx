import type { MetaFunction } from "@remix-run/node";
import { CarouselProvider } from "~/components/ui/carousel";
import Metadata from "~/@data/meta.json";

import Header from "~/components/blocks/header";
import Hero from "~/components/blocks/hero";
import FeaturedProjects from "~/components/blocks/featured-projects";
import FreelanceProjects from "~/components/blocks/freelance-projects";
import OpenSourceProjects from "~/components/blocks/open-source-projects";
import BinusProjects from "~/components/blocks/binus-projects";
import Footer from "~/components/blocks/footer";

export const meta: MetaFunction = () => {
    return [
        { title: `${Metadata.title} - ${Metadata.tagline}` },
        { name: "description", content: `${Metadata.description}` },
    ];
};

export default function Index() {
    return (
        <main>
            <Header />

            <Hero />

            <CarouselProvider>
                <FeaturedProjects />
            </CarouselProvider>

            <FreelanceProjects />
            <OpenSourceProjects />
            <BinusProjects />

            <Footer />
        </main>
    );
}