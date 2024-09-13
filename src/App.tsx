import { useState, useEffect } from 'react'
import { CarouselProvider } from './components/Carousel'

import Topbar from './blocks/Topbar'
import Hero from './blocks/Hero'
import ContactMe from './blocks/ContactMe'
import FeaturedProjects from './blocks/FeaturedProjects'
import OpenSourceProjects from './blocks/OpenSourceProjects'
import FreelanceProjects from './blocks/FreelanceProjects'
import BINUSProjects from './blocks/BINUSProjects'

export default function App() {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setIsLoading(false)
    }, [])

    return isLoading ? null : (
        <>
            <Topbar />
            <Hero />

            <CarouselProvider>
                <FeaturedProjects />
            </CarouselProvider>

            <FreelanceProjects />
            <OpenSourceProjects />
            <BINUSProjects />
            <ContactMe />
        </>
    )
}

