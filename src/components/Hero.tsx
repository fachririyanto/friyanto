export default function Hero() {
    return (
        <section className="py-20">
            <div className="container">
                <div className="flex">
                    <div className="w-[340px] min-w-[340px] text-center">
                        <figure className="mx-auto max-w-[200px] rounded-full border-2 border-black">
                            <img src="/favicon-270x270.png" alt="Fachri Riyanto" className="block w-full" />
                        </figure>
                        <h2 className="mt-5 font-semibold text-2xl">Fachri Riyanto</h2>
                        <p className="mt-1 text-base">Senior Frontend Developer</p>
                        <p className="mt-1">
                            <a href="mailto:fachririyanto@gmail.com" className="underline">fachririyanto@gmail.com</a>
                        </p>
                    </div>
                    <div className="flex-grow pt-8 pl-14 text-lg font-medium leading-relaxed">
                        <div className="max-w-[640px]">
                            <p className="mb-5">Hi, my name is Fachri Riyanto. I'm freelance Frontend Developer based on Jakarta, Indonesia. I have more than 9 years experiences working as (Senior) Frontend Developer at <a href="https://www.instagram.com/binus.digital/" className="underline">BINUS Digital</a> &mdash; part of <a href="https://binus.ac.id" className="underline">BINUS Higher Education</a>.</p>
                            <p className="mb-5">Build BINUS website using WordPress/PHP all the years. Creating custom themes and plugins from scratch. Also build API using WordPress REST API and create custom backend. I am also capable to create a website or apps using Laravel, ReactJS or NextJS.</p>
                            <p>My tech stack is WordPress, PHP/Laravel, MySQL, JavaScript (Vanilla, jQuery, ReactJS, NextJS), HTML5 & CSS3 (Native, SASS, Bootstrap, Tailwind), Phyton (Flask), and Docker.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}