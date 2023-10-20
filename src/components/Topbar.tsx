export default function Topbar() {
    return (
        <header className="h-20">
            <nav className="fixed z-50 top-0 left-0 right-0 h-20 bg-[rgba(255,255,255,.98)]">
                <div className="flex px-6 h-full items-center">
                    <h1 className="flex-grow font-extrabold text-4xl uppercase">
                        <a href="">FR</a>
                    </h1>
                    <div className="pl-8">
                        <ul className="flex gap-8">
                            <li>
                                <a href="https://www.linkedin.com/in/friyanto/" className="block font-semibold py-3 hover:underline">Linkedin</a>
                            </li>
                            <li>
                                <a href="https://github.com/fachririyanto" className="block font-semibold py-3 hover:underline">Github</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}