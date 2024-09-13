import { Link } from "@remix-run/react";

export default function Footer() {
    return (
        <footer className="py-6 md:py-10">
            <div className="px-8 mx-auto max-w-[640px] text-center">
                <h2 className="mb-6 font-medium text-xl md:text-2xl">
                    Are you interested to working together with me?
                </h2>
                <p className="md:text-lg">
                    Contact or hire me at <Link className="font-semibold border-b border-black" to="mailto:fachririyanto@gmail.com">fachririyanto@gmail.com</Link>
                </p>
                <p className="mt-16 font-medium text-[15px]">
                    &copy; 2023 - Present. Fachri Riyanto.
                </p>
            </div>
        </footer>
    );
}