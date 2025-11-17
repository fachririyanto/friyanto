import Link from "next/link";

export function Footer() {
    return (
        <footer className="py-6 md:py-10">
            <div className="px-8 mx-auto max-w-[640px] text-center">
                <h2 className="mb-16 text-xl md:text-2xl leading-relaxed">
                    Are you interested to working together with me? Contact me at <Link className="font-medium border-b border-black" href="mailto:fachririyanto@gmail.com">fachririyanto@gmail.com</Link>
                </h2>
                <p className="pb-10 font-medium text-[15px]">
                    &copy; Present. Fachri Riyanto.
                </p>
            </div>
        </footer>
    );
}