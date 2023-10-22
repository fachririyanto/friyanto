import { motion } from 'framer-motion'
import { useCarousel, Carousel } from '../../components/Carousel'
import Posts from './data.json'
import { TypeProject } from '../../types/Project'
import { Project } from './Project'
import { ButtonNav } from './ButtonNav'

export default function Featured() {
    const { dispatch, currentIndex } = useCarousel()

    const onPrevious = () => {
        if (currentIndex <= 0) {
            return
        }
        dispatch({ type: 'PREVIOUS' })
    }

    const onNext = () => {
        if (currentIndex >= Posts.length - 1) {
            return
        }
        dispatch({ type: 'NEXT' })
    }

    let carouselItems: React.ReactNode[] = []

    Posts.forEach((post: TypeProject, i) => {
        carouselItems.push(<Project { ...post } key={ i } />)
    })

    return (
        <motion.section initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 2, ease: [0.32, 0.72, 0, 1] }} className="py-8 md:py-12 lg:py-16 xl:py-20">
            <div className="container">
                <header className="flex flex-wrap gap-4 mb-6 items-center md:gap-0 md:mb-10 lg:mb-16">
                    <h2 className="w-full font-extrabold text-[48px] leading-[0.76] uppercase md:border-r-4 md:border-double md:border-f-border md:text-[64px] md:w-auto md:pr-10">
                        Featured<br/>
                        Projects
                    </h2>
                    <div className="hidden md:flex flex-grow gap-2 md:pl-10 md:w-auto">
                        <ButtonNav onClick={ onPrevious } disabled={ currentIndex <= 0 ? true : false }>
                            <span className="material-symbols-outlined text-3xl md:text-4xl">arrow_back</span>
                        </ButtonNav>
                        <ButtonNav onClick={ onNext } disabled={ currentIndex >= (Posts.length - 1) ? true : false }>
                            <span className="material-symbols-outlined text-3xl md:text-4xl">arrow_forward</span>
                        </ButtonNav>
                    </div>
                </header>
            </div>

            <div className="container full">
                <div className="-mx-2">
                    <Carousel items={ carouselItems } />
                </div>
                <div className="flex gap-1.5 mt-4 justify-end md:hidden">
                    <ButtonNav onClick={ onPrevious } disabled={ currentIndex <= 0 ? true : false }>
                        <span className="material-symbols-outlined text-3xl md:text-4xl">arrow_back</span>
                    </ButtonNav>
                    <ButtonNav onClick={ onNext } disabled={ currentIndex >= (Posts.length - 1) ? true : false }>
                        <span className="material-symbols-outlined text-3xl md:text-4xl">arrow_forward</span>
                    </ButtonNav>
                </div>
            </div>
        </motion.section>
    )
}