import { AnimatePresence, motion } from 'framer-motion'
import { Carousel, CarouselProvider, useCarousel } from './index'

export function CarouselExample() {
    return (
        <CarouselProvider>
            <CarouselExampleChild />
        </CarouselProvider>
    )
}

export function CarouselExampleChild() {
    const { dispatch } = useCarousel()

    const onPrevious = () => {
        dispatch({ type: 'PREVIOUS' })
    }

    const onNext = () => {
        dispatch({ type: 'NEXT' })
    }

    return (
        <div>
            <Carousel
                items={[
                    <img src="/images/portfolio/3d-annotation.png" alt="" className="w-full" />,
                    <img src="/images/portfolio/3d-annotation.png" alt="" className="w-full" />,
                ]}
            />
            <AnimatePresence initial={false}>
                <motion.button onClick={ onPrevious }>
                    Previous
                </motion.button>
            </AnimatePresence>
            <AnimatePresence initial={false}>
                <motion.button onClick={ onNext }>
                    Next
                </motion.button>
            </AnimatePresence>
        </div>
    )
}