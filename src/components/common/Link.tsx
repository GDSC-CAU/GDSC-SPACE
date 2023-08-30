import Link, { type LinkProps } from 'next/link'
import { type BlogRoutingType } from '~/src/app/blog/_data/blogRouteData'

type BlogRoute = `/blog/${BlogRoutingType}`
type UNIQUE_ID = string
/**
 * Project link path
 */
export type LinkPath = '/' | `/members` | BlogRoute | `${BlogRoute}/${UNIQUE_ID}` | '/events' | `/events/${UNIQUE_ID}`

interface Link$Props extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps>, LinkProps {
    href: LinkPath
}
export const Link$ = ({ href, children, ...linkProps }: React.PropsWithChildren<Link$Props>) => (
    <Link {...linkProps} href={href}>
        {children}
    </Link>
)
