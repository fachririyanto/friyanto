import Posts from '../data/freelance-projects.json'
import { TypeProject } from '../types/Project'
import { ImageCover } from './Atomic/Image'

export default function FreelanceProjects() {
    return (
        <section className="py-16 md:py-20">
            <div className="container">
                <header className="mb-10 md:mb-16">
                    <h2 className="font-extrabold text-5xl leading-[0.76] uppercase md:text-[64px]">
                        Freelance<br/>Projects
                    </h2>
                </header>
            </div>
            <div className="container wide">
                <div className="flex flex-wrap gap-4 md:gap-0 md:-mx-4">
                    { Posts.map((post: TypeProject, i) => (
                        <div key={ i } className="w-full md:px-4 md:pb-8 md:w-1/2 lg:w-1/3">
                            <div className="relative p-2 h-full rounded-lg bg-white overflow-hidden shadow-f-shadow">
                                <ImageCover
                                    src={ post.featured }
                                    ratioWidth={ 3 }
                                    ratioHeight={ 2 }
                                    loading="lazy"
                                    alt={ post.title }
                                    rounded="rounded"
                                />
                                <div className="pt-5 pb-2.5 px-4">
                                    <h3 className="font-semibold text-lg">
                                        { post.title }
                                    </h3>
                                    <p className="mt-0.5 text-f-font-meta">
                                        { post.meta }
                                    </p>
                                    <p className="flex gap-2 mt-10 font-semibold uppercase text-sm items-center justify-end">
                                        Visit Website <span className="material-symbols-outlined text-lg">arrow_forward</span>
                                    </p>
                                </div>
                                <a target="_blank" href={ post.url } className="absolute inset-0 z-10">
                                    <span className="sr-only">{ post.title }</span>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}