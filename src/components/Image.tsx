import React from 'react'

interface PropsImage extends React.ImgHTMLAttributes<HTMLImageElement> {
    ratiowidth: number,
    ratioheight: number,
    bgcolor?: string,
    rounded?: string,
    objectPosition?: string,
}

const defaultProps: PropsImage = {
    ratiowidth: 1,
    ratioheight: 1,
    bgcolor: 'bg-white',
    rounded: '',
    objectPosition: 'object-center',
}

export function ImageCover(props: PropsImage) {
    const config = { ...defaultProps, ...props }
    const ratio = config.ratioheight / config.ratiowidth * 100

    return (
        <figure className={ `relative overflow-hidden ${config.rounded}` } style={{
            paddingTop: `${ratio}%`,
            backgroundColor: config.bgcolor,
        }}>
            <picture className="flex absolute inset-0">
                { props.src ? <img { ...props } className={ `block w-full h-full object-cover ${config.objectPosition}` } /> : null }
            </picture>
        </figure>
    )
}