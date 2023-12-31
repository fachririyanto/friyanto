import type { TypeProject } from "../../types/Project"
import { ImageCover } from '../../components/Image'

export function Project(post: TypeProject) {
    return (
        <div className="flex flex-wrap gap-4 md:gap-0 md:flex-nowrap">
            <div className="w-full md:w-2/3 md:pr-10 xl:pr-16">
                <div className="block p-2 overflow-hidden bg-white rounded-lg shadow-f-shadow">
                    <ImageCover
                        ratiowidth={ 2245 }
                        ratioheight={ 1400 }
                        src={ post.featured }
                        alt={ post.title }
                        rounded="rounded"
                        objectposition="object-left-top" />
                </div>
            </div>
            <div className="w-full md:w-1/3 self-center">
                <div className="md:max-w-[540px]">
                    <h4 className="mb-1 font-medium text-f-font-meta text-sm md:text-base">
                        { post.meta }
                    </h4>
                    <h2 className="font-semibold text-xl md:3xl xl:text-4xl">
                        { post.title }
                    </h2>
                    <div className="text-editor mt-4 md:mt-6 font-medium text-sm md:text-base xl:text-lg">
                        <p className="hidden xl:block md-3 md:mb-5" dangerouslySetInnerHTML={{ __html: post.description }}></p>
                        <p className="mb-3 md:mb-5">
                            <strong>Tech Stack:</strong><br/>
                            { post.tech.join(', ') }
                        </p>
                        { post.url === '' ? null : (
                            <>
                                <p>
                                    <strong>{ post.text_demo }</strong><br/>
                                    <a target="blank" href={ post.url }>
                                        { post.url }
                                    </a>
                                </p>
                            </>
                        ) }
                    </div>
                </div>
            </div>
        </div>
    )
}