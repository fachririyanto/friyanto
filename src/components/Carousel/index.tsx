import { motion, MotionConfig } from 'framer-motion'
import { CarouselProvider, useCarousel } from './provider'

export type CarouselProps = {
    items: React.ReactNode[],
}

export {
    CarouselProvider,
    useCarousel,
}

export function Carousel({ items }: CarouselProps) {
    const { currentIndex } = useCarousel()

    return (
        <MotionConfig transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}>
            <div className="relative overflow-hidden">
                <motion.div animate={{ x: `-${currentIndex * 100}%` }} className="flex">
                    { items.map((item: React.ReactNode, i) => (<div className="flex-none p-2 w-full" key={ i }>{ item }</div>)) }
                </motion.div>
            </div>
        </MotionConfig>
    )
}