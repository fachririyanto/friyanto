type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    as: 'button',
} | React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    as: 'a',
}

export function Button({ children, className, ...props }: ButtonProps) {
    let styles = 'px-8 h-12 rounded-3xl bg-f-black text-white font-semibold transition-colors hover:bg-black'

    switch (props.as) {
        case 'a':
            return (
                <a
                    className={ `${styles} ${className}` }
                    { ...props }>
                    { children }
                </a>
            )
        case 'button':
            return (
                <button
                    className={ `${styles} ${className}` }
                    { ...props }>
                    { children }
                </button>
            )
    }
}