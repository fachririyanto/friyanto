import { motion } from 'framer-motion'
import { NavLink } from './NavLink'

export default function Topbar() {
    return (
        <header className="h-20">
            <motion.nav initial={{ opacity: 0, y: -80 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: [0.32, 0.72, 0, 1] }} className="fixed z-50 top-0 left-0 right-0 h-20 bg-[rgba(255,255,255,.5)]">
                <div className="flex px-4 lg:px-6 h-full items-center">
                    <h1 className="flex-grow font-semibold text-4xl uppercase">
                        <a href="">FR</a>
                    </h1>
                    <div className="pl-8">
                        <ul className="flex gap-5 md:gap-8">
                            <NavLink href="https://www.linkedin.com/in/friyanto/" target="_blank">
                                Linkedin
                            </NavLink>
                            <NavLink href="https://github.com/fachririyanto" target="_blank">
                                Github
                            </NavLink>
                        </ul>
                    </div>
                </div>
            </motion.nav>
        </header>
    )
}