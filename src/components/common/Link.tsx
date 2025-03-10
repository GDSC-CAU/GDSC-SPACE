import { UrlObject } from 'url'
import Link, { type LinkProps } from 'next/link'
import { type BlogRoutingType } from '~/src/app/blog/_data/blogRouteData'

type BlogRoute = `/blog/${BlogRoutingType}`
type UNIQUE_ID = string

/**
 * Project link path
 */
export type LinkPath =
    | '/'
    | '/members'
    | `/members/${string}`
    | BlogRoute
    | `${BlogRoute}/${UNIQUE_ID}`
    | '/events'
    | `/events/${UNIQUE_ID}`

type ExtendedUrl = UrlObject & {
    pathname: LinkPath
}

interface Link$Props extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps>, LinkProps {
    href: LinkPath | ExtendedUrl
}
export const Link$ = ({ href, children, ...linkProps }: React.PropsWithChildren<Link$Props>) => (
    <Link {...linkProps} href={href}>
        {children}
    </Link>
)
