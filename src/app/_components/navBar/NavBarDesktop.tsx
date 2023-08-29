import { Gdsc } from '~/components/icons'
import { NavButton } from './NavButton'

interface NavBarProps {
    iconSize?: number
}
export const NavBarDesktop = ({ iconSize = 55 }: NavBarProps) => {
    return (
        <nav className="sticky top-0 z-50 hidden h-20 flex-row items-center justify-center gap-2 bg-theme-background/5 py-4 backdrop-blur-lg md:flex md:gap-16">
            <NavButton type="link" href="/" disableUnderline>
                <Gdsc width={iconSize} height={iconSize} className="scale-75 md:scale-100" />
            </NavButton>

            <NavButton type="scroll" href="/#about">
                About us
            </NavButton>
            <NavButton type="scroll" href="/#projects">
                Projects
            </NavButton>

            <NavButton type="link" href="/blog/develop">
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
