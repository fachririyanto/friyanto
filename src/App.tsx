import Topbar from './components/Topbar'
import Hero from './components/Hero'
import FeaturedProjects from './components/FeaturedProjects'
import FreelanceProjects from './components/FreelanceProjects'
import BINUSProjects from './components/BINUSProjects'

export default function App() {
    return (
        <>
            <Topbar />
            <Hero />
            <FeaturedProjects />
            <FreelanceProjects />
            <BINUSProjects />
        </>
    )
}