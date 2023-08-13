import Link from 'next/link'
import { Gdsc } from '~/components/icons'
import { Link$, type LinkPath } from '~/components/index'

interface NavButtonProps<Props extends { type: 'link' | 'scroll' }> {
    type: 'link' | 'scroll'
    href: Props['type'] extends 'link' ? (Props['type'] extends 'scroll' ? never : LinkPath) : `${LinkPath}#${string}`
    children: React.ReactNode
    disableUnderline?: boolean
}
const NavButton = <Props extends NavButtonProps<Props>>({ type, href, children, disableUnderline = false }: Props) => {
    const isLink = type === 'link'

    const TargetLink = isLink ? Link$ : Link
    const shouldScrollToTop: boolean = isLink ? true : false

    return (
        <TargetLink
            className="group select-none text-base md:text-sm"
            href={href as LinkPath}
            scroll={shouldScrollToTop}
        >
            <p className="font-eng font-normal transition-opacity group-hover:opacity-90">{children}</p>
            {!disableUnderline && (
                <div className="h-[0.75px] w-full scale-x-0 rounded bg-theme-font transition-all duration-200 group-hover:scale-x-100 group-hover:opacity-90" />
            )}
        </TargetLink>
    )
}

interface NavBarProps {
    iconSize?: number
}
export const NavBar = ({ iconSize = 55 }: NavBarProps) => {
    return (
        <nav className="sticky top-[0rem] z-50 flex h-fit flex-row items-center justify-center bg-theme-background/5 py-4 backdrop-blur-2xl md:gap-16">
            <NavButton type="link" href="/" disableUnderline>
                <Gdsc width={iconSize} height={iconSize} className="scale-75 md:scale-100" />
            </NavButton>

            <NavButton type="scroll" href="/#about">
                About us
            </NavButton>
            <NavButton type="scroll" href="/#projects">
                Projects
            </NavButton>

            <NavButton type="link" href="/blog">
                Blog
            </NavButton>
            <NavButton type="link" href="/events">
                Events
            </NavButton>
            <NavButton type="link" href="/members">
                Members
            </NavButton>
        </nav>
    )
}
