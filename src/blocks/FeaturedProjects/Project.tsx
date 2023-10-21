import type { TypeProject } from "../../types/Project"
import { ImageCover } from '../../components/Image'

export function Project(post: TypeProject) {
    return (
        <div className="flex flex-wrap md:flex-nowrap">
            <div className="w-full md:w-2/3 md:pr-10 xl:pr-16">
                <div className="block p-2 overflow-hidden bg-white rounded-lg shadow-f-shadow">
                    <ImageCover
                        ratiowidth={ 2245 }
                        ratioheight={ 1400 }
                        src={ post.featured }
                        alt={ post.title }
                        rounded="rounded"
                        objectPosition="object-left-top" />
                </div>
            </div>
            <div className="w-full md:w-1/3 self-center">
                <div className="md:max-w-[540px]">
                    <h4 className="mb-1 font-medium text-f-font-meta">{ post.meta }</h4>
                    <h2 className="font-semibold text-2xl md:3xl xl:text-4xl">
                        { post.title }
                    </h2>
                    <div className="text-editor mt-6 font-medium xl:text-lg">
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
    )
}