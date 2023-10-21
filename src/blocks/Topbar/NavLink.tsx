export type NavLinkProps = {
    href: string;
    target?: string;
    children: React.ReactNode;
}

export function NavLink({ href, target, children }: NavLinkProps) {
    return (
        <li>
            <a target={ target } href={ href } className="block font-semibold text-sm py-3 md:text-base hover:underline">
                { children }
            </a>
        </li>
    )
}