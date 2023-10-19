import React from 'react'

interface PropsImage extends React.ImgHTMLAttributes<HTMLImageElement> {
    ratioWidth: number,
    ratioHeight: number,
    bgColor?: string,
    rounded?: string,
}

const defaultProps: PropsImage = {
    ratioWidth: 1,
    ratioHeight: 1,
    bgColor: 'bg-white',
    rounded: '',
}

export function ImageCover(props: PropsImage) {
    const config = { ...defaultProps, ...props }
    const ratio = config.ratioHeight / config.ratioWidth * 100

    return (
        <figure className={ `relative overflow-hidden ${config.rounded}` } style={{
            paddingTop: `${ratio}%`,
            backgroundColor: config.bgColor,
        }}>
            <picture className="flex absolute inset-0">
                { props.src ? <img { ...props } className="block w-full h-full object-cover" /> : null }
            </picture>
        </figure>
    )
}