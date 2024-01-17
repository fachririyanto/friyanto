import { motion } from 'framer-motion'
import { Button } from '../../components/Button'

export default function Hero() {
    return (
        <motion.section
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.32, 0.72, 0, 1] }}
            className="py-16 lg:pt-20 lg:pb-[120px]">
            <div className="container">
                <div className="mt-6 mx-auto max-w-[640px] text-center">
                    <h1 className="text-[80px] font-semibold leading-[0.8]">Fachri Riyanto</h1>
                    <p className="mt-8 text-xl leading-normal">
                        Fullstack Developer who build applications using HTML5, CSS3, PHP, MySQL, WordPress, Laravel (Blade, Inertia), Python (Flask), JavaScript (jQuery, React, Vue), TailwindCSS, TypeScript and Docker.
                    </p>
                    <p className="flex flex-wrap gap-6 mt-8 items-center justify-center">
                        <Button as="a" href="mailto:fachririyanto@gmail.com" className="inline-flex gap-2 items-center">
                            <span className="material-symbols-outlined">mail</span>
                            <span>Hire Me</span>
                        </Button>
                        <a href="#block-featured-projects" className="text-lg border-b border-f-black">
                            Or see my work below
                        </a>
                    </p>
                </div>
            </div>
        </motion.section>
    )
}
