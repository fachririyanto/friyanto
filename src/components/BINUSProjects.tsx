import Posts from '../data/binus-projects.json'
import { TypeProject } from '../types/Project'

export default function BINUSProjects() {
    return (
        <section className="py-16 md:py-20">
            <div className="container">
                <header className="flex mb-10 md:mb-16">
                    <h2 className="pr-10 font-extrabold text-5xl leading-[0.76] uppercase border-r border-f-border md:text-[64px]">
                        BINUS<br/>Projects
                    </h2>
                    <div className="pl-10 self-end">
                        <div className="max-w-[540px] text-lg">
                            Maintenance over 500+ websites for BINUS University and its subsidiaries. I already build hundreds of them.
                        </div>
                    </div>
                </header>
            </div>
            <div className="container wide">
                <div className="flex flex-wrap gap-4 md:gap-0 md:-mx-4">
                    { Posts.map((post: TypeProject, i) => (
                        <div key={ i } className="w-full md:px-4 md:pb-8 md:w-1/2 lg:w-1/3 xl:w-1/4">
                            <div className="flex relative p-6 h-full rounded-lg bg-white overflow-hidden shadow-f-shadow">
                                <div className="flex-grow pr-5">
                                    <h3 className="font-semibold text-lg leading-snug">
                                        { post.title }
                                    </h3>
                                    <p className="mt-1.5 text-f-font-meta">
                                        { post.meta }
                                    </p>
                                </div>
                                <div>
                                    <span className="material-symbols-outlined text-2xl">arrow_forward</span>
                                </div>
                                <a target="_blank" href={ post.url } className="absolute inset-0 z-10">
                                    <span className="sr-only">{ post.title }</span>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mt-6 text-center text-sm">
                    And many more... that i can't list here
                </div>
            </div>
        </section>
    )
}