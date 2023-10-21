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
        <section className="py-16 md:py-20">
            <div className="container full">
                <div className="container">
                    <header className="flex mb-16 items-center">
                        <h2 className="pr-10 font-extrabold text-5xl leading-[0.76] uppercase border-r border-f-border md:text-[64px]">
                            Featured<br/>
                            Projects
                        </h2>
                        <div className="flex flex-grow gap-2 pl-10">
                            <ButtonNav onClick={ onPrevious } disabled={ currentIndex <= 0 ? true : false }>
                                <span className="material-symbols-outlined text-4xl">arrow_back</span>
                            </ButtonNav>
                            <ButtonNav onClick={ onNext } disabled={ currentIndex >= (Posts.length - 1) ? true : false }>
                                <span className="material-symbols-outlined text-4xl">arrow_forward</span>
                            </ButtonNav>
                        </div>
                    </header>
                </div>

                <Carousel items={ carouselItems } />
            </div>
        </section>
    )
}