interface ButtonNavProps extends React.HTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode,
    disabled?: boolean,
}

export function ButtonNav({ children, ...props }: ButtonNavProps) {
    let classes = 'inline-flex w-16 h-16 items-center justify-center bg-white border-2 border-f-black rounded-full shadow-f-shadow'

    if (props.disabled) {
        classes += ' opacity-50 pointer-events-none'
    }

    return (
        <button className={ classes } { ...props }>
            { children }
        </button>
    )
}