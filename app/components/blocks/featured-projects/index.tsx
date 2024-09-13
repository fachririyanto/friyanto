import { motion } from "framer-motion";
import Posts from "~/@data/featured-projects.json";
import type { Project } from "~/@types/project";

import { useCarousel, Carousel } from "~/components/ui/carousel";
import { ButtonNav } from "./button-nav";
import { ProjectItem } from "./project";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function FeaturedProjects() {
    const { onNext, onPrevious, currentIndex } = useCarousel();

    const handleClickPrevious = () => {
        if (currentIndex <= 0) {
            return;
        }

        onPrevious();
    };

    const handleClickNext = () => {
        if (currentIndex >= Posts.length - 1) {
            return;
        }

        onNext();
    };

    let carouselItems: React.ReactNode[] = [];

    Posts.forEach((post: Project, i) => {
        carouselItems.push(<ProjectItem {...post} key={i} />);
    });

    return (
        <motion.section
            id="block-featured-projects"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, ease: [0.32, 0.72, 0, 1] }}
            className="py-12 lg:py-16 xl:py-20"
            >
            <div className="container">
                <header className="flex flex-wrap gap-4 mb-6 items-center md:gap-0 md:mb-10 lg:mb-16">
                    <h2 className="w-full font-semibold uppercase text-[48px] leading-[0.8] md:border-r-4 md:border-double md:border-line-gray md:text-[64px] md:w-auto md:pr-10">
                        Featured<br/>
                        Works
                    </h2>
                    <div className="hidden md:flex flex-grow gap-2 md:pl-10 md:w-auto">
                        <ButtonNav onClick={handleClickPrevious} disabled={currentIndex <= 0 ? true : false}>
                            <ArrowLeft className="w-6 h-6 md:w-8 md:h-8" />
                        </ButtonNav>
                        <ButtonNav onClick={handleClickNext} disabled={currentIndex >= (Posts.length - 1) ? true : false}>
                            <ArrowRight className="w-6 h-6 md:w-8 md:h-8" />
                        </ButtonNav>
                    </div>
                </header>
            </div>

            <div className="container full">
                <div className="-mx-2">
                    <Carousel items={carouselItems} />
                </div>
                <div className="flex gap-1.5 mt-4 justify-end md:hidden">
                    <ButtonNav onClick={handleClickPrevious} disabled={currentIndex <= 0 ? true : false}>
                        <ArrowLeft className="w-6 h-6 md:w-8 md:h-8" />
                    </ButtonNav>
                    <ButtonNav onClick={handleClickNext} disabled={currentIndex >= (Posts.length - 1) ? true : false}>
                        <ArrowRight className="w-6 h-6 md:w-8 md:h-8" />
                    </ButtonNav>
                </div>
            </div>
        </motion.section>
    );
}