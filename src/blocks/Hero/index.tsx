import { motion } from 'framer-motion'

export default function Hero() {
    return (
        <section className="py-10 md:py-16 lg:py-20">
            <div className="container">
                <div className="flex flex-wrap gap-8 md:flex-nowrap md:gap-0">
                    <div className="w-full md:w-[340px] md:min-w-[340px] text-center">
                        <motion.div
                            initial={{ opacity: 0, scale: .4 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                                duration: 1,
                                ease: [0, 0.71, 0.2, 1.01]
                            }}
                            >
                            <figure className="mx-auto max-w-[140px] md:max-w-[200px] rounded-full bg-white border-2 border-black">
                                <img src="/favicon-270x270.png" alt="Fachri Riyanto" className="block w-full" />
                            </figure>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 2, ease: [0.32, 0.72, 0, 1] }}>
                            <h2 className="mt-5 font-bold text-xl md:text-2xl">Fachri Riyanto</h2>
                            <p className="mt-1 text-base">Fullstack Developer</p>
                            <p className="mt-1">
                                <a href="mailto:fachririyanto@gmail.com" className="underline">fachririyanto@gmail.com</a>
                            </p>
                        </motion.div>
                    </div>
                    <div className="font-medium md:flex-grow md:pt-8 md:pl-8 xl:text-lg xl:pl-14">
                        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.5, delay: .2, ease: [0.32, 0.72, 0, 1] }} className="max-w-[640px] leading-relaxed">
                            <p className="mb-5">Hi, my name is Fachri Riyanto. I'm Fullstack Developer based on Jakarta, Indonesia. I have more than 9 years experiences working as (Senior - Supervisor) Frontend Developer at <a href="https://www.instagram.com/binus.digital/" className="underline">BINUS Digital</a> &mdash; part of <a href="https://binus.ac.id" className="underline">BINUS Higher Education</a>.</p>
                            <p className="mb-5">Build BINUS website using WordPress/PHP all the years. Creating custom themes and plugins from scratch. Also build API using WordPress REST API and create custom backend. I am also capable to create a website or apps using Laravel, ReactJS or NextJS.</p>
                            <p>My tech stack is WordPress, PHP/Laravel, MySQL/SQLite, JavaScript (Vanilla, jQuery, ReactJS, NextJS), HTML5 & CSS3 (Native, SASS, Bootstrap, Tailwind), <a className="underline" target="_blank" href="https://github.com/fachririyanto/booklink-python-flask">Phyton (Flask)</a>, Automation Task (Grunt, Gulp) and Docker.</p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}