import Posts from '../data/featured.json'
import { TypeProject } from '../types/Project'

export default function Featured() {
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
                            <button className="inline-flex w-16 h-16 items-center justify-center bg-white border-2 border-f-black rounded-full">
                                <span className="material-symbols-outlined text-4xl">arrow_back</span>
                            </button>
                            <button className="inline-flex w-16 h-16 items-center justify-center bg-white border-2 border-f-black rounded-full">
                                <span className="material-symbols-outlined text-4xl">arrow_forward</span>
                            </button>
                        </div>
                    </header>
                </div>

                { Posts.map((post: TypeProject, i) => (
                    <div className="flex flex-wrap md:flex-nowrap" key={ i }>
                        <figure className="w-full md:w-2/3 md:pr-10 xl:pr-16">
                            <picture className="block p-2 overflow-hidden bg-white rounded-lg shadow-f-shadow">
                                <img loading="lazy" src={ post.featured } alt={ post.title } className="block w-full rounded-md" />
                            </picture>
                        </figure>
                        <div className="w-full pt-6 md:w-1/3">
                            <div className="md:max-w-[540px]">
                                <h4 className="mb-1 font-medium text-f-font-meta">{ post.meta }</h4>
                                <h2 className="font-semibold text-2xl md:3xl xl:text-4xl">
                                    { post.title }
                                </h2>
                                <div className="text-editor mt-6 font-medium leading-relaxed xl:text-lg">
                                    <p className="hidden xl:block mb-5" dangerouslySetInnerHTML={{ __html: post.description }}></p>
                                    <p className="mb-5">
                                        <strong>Tech Stack:</strong><br/>
                                        { post.tech.join(', ') }
                                    </p>
                                    <p>
                                        <strong>Demo:</strong><br/>
                                        <a target="blank" href={ post.url } className="underline">
                                            { post.url }
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}