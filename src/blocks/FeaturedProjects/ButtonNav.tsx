import { motion } from 'framer-motion'

interface ButtonNavProps extends React.HTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode,
    disabled?: boolean,
}

export function ButtonNav({ children, ...props }: ButtonNavProps) {
    let classes = 'inline-flex w-12 h-12 md:w-16 md:h-16 items-center justify-center bg-white border-2 border-f-black rounded-full shadow-f-shadow :hover'

    if (props.disabled) {
        classes += ' opacity-50 pointer-events-none'
    }

    return (
        <motion.button whileHover={{ scale: props.disabled ? 1 : 1.1 }} whileTap={{ scale: props.disabled ? 1 : 0.9 }}>
            <button className={ classes } { ...props }>
                { children }
            </button>
        </motion.button>
    )
}