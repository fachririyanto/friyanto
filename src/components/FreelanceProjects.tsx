import Posts from '../data/freelance.json'
import { TypeProject } from '../types/Project'
import { ImageCover } from './Atomic/Image'

export default function FreelanceProjects() {
    return (
        <section className="py-20">
            <div className="container">
                <header className="mb-16">
                    <h2 className="font-semibold text-[64px] leading-[0.74]">
                        Freelance<br/>Project
                    </h2>
                </header>
            </div>
            <div className="container wide">
                <div className="flex flex-wrap -mx-4">
                    { Posts.map((post: TypeProject, i) => (
                        <div key={ i } className="px-4 pb-8 w-1/3">
                            <div className="relative p-2 h-full rounded-lg bg-white overflow-hidden shadow-f-shadow">
                                <ImageCover
                                    src={ post.featured }
                                    ratioWidth={ 3 }
                                    ratioHeight={ 2 }
                                    loading="lazy"
                                    alt={ post.title }
                                    rounded="rounded"
                                />
                                <div className="py-5 px-4">
                                    <h3 className="font-semibold text-lg">
                                        { post.title }
                                    </h3>
                                    <p className="mt-0.5 text-f-font-meta">
                                        { post.meta }
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