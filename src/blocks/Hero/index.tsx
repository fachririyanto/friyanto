export default function Hero() {
    return (
        <section className="py-16 md:py-20">
            <div className="container">
                <div className="flex flex-wrap gap-8 md:flex-nowrap md:gap-0">
                    <div className="w-full md:w-[340px] md:min-w-[340px] text-center">
                        <figure className="mx-auto max-w-[140px] md:max-w-[200px] rounded-full border-2 border-black">
                            <img src="/favicon-270x270.png" alt="Fachri Riyanto" className="block w-full" />
                        </figure>
                        <h2 className="mt-5 font-bold text-xl md:text-2xl">Fachri Riyanto</h2>
                        <p className="mt-1 text-base">Fullstack Developer</p>
                        <p className="mt-1">
                            <a href="mailto:fachririyanto@gmail.com" className="underline">fachririyanto@gmail.com</a>
                        </p>
                    </div>
                    <div className="font-medium md:flex-grow md:pt-8 md:pl-8 xl:text-lg xl:pl-14">
                        <div className="max-w-[640px] leading-relaxed">
                            <p className="mb-5">Hi, my name is Fachri Riyanto. I'm freelance Fullstack Developer based on Jakarta, Indonesia. I have more than 9 years experiences working as (Senior) Frontend Developer at <a href="https://www.instagram.com/binus.digital/" className="underline">BINUS Digital</a> &mdash; part of <a href="https://binus.ac.id" className="underline">BINUS Higher Education</a>.</p>
                            <p className="mb-5">Build BINUS website using WordPress/PHP all the years. Creating custom themes and plugins from scratch. Also build API using WordPress REST API and create custom backend. I am also capable to create a website or apps using Laravel, ReactJS or NextJS.</p>
                            <p>My tech stack is WordPress, PHP/Laravel, MySQL/SQLite, JavaScript (Vanilla, jQuery, ReactJS, NextJS), HTML5 & CSS3 (Native, SASS, Bootstrap, Tailwind), <a className="underline" target="_blank" href="https://github.com/fachririyanto/booklink-python-flask">Phyton (Flask)</a>, and Docker.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}