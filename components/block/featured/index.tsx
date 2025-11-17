import { ButtonNav, ButtonNavMobile } from "./button-nav";
import { Carousel } from "./carousel";

export function Featured() {
    return (
        <section className="py-10 md:py-12 lg:py-16" id="block-featured-work">
            <div className="container">
                <header className="flex flex-wrap gap-4 mb-6 items-center md:gap-0 md:mb-10 lg:mb-12">
                    <h2 className="w-full font-georgia uppercase text-[40px] leading-[0.8] -tracking-[1px] md:border-r-4 md:border-double md:border-line-gray md:text-[54px] md:w-auto md:pr-10 lg:text-[64px]">
                        Featured<br/>
                        Work
                    </h2>
                    <ButtonNav />
                </header>
            </div>
            <div className="container full">
                <div className="-mx-2">
                    <Carousel />
                </div>
                <ButtonNavMobile />
            </div>
        </section>
    );
}