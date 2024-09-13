export type NavLinkProps = {
    href: string;
    target?: string;
    children: React.ReactNode;
}

export function NavLink({ href, target, children }: NavLinkProps) {
    return (
        <li className="group">
            <a target={ target } href={ href } className="block font-semibold text-sm py-3 md:text-base">
                <span className="group-hover:border-b group-hover:border-f-black">
                    { children }
                </span>
            </a>
        </li>
    )
}