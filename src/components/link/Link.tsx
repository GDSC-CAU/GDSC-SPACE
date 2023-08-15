import Link, { type LinkProps } from 'next/link'

/**
 * Project link path
 */
export type LinkPath = '/' | `/members/${string}` | '/blog' | '/events'

interface Link$Props extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps>, LinkProps {
    href: LinkPath
}
export const Link$ = ({ href, children, ...linkProps }: React.PropsWithChildren<Link$Props>) => (
    <Link {...linkProps} href={href}>
        {children}
    </Link>
)
