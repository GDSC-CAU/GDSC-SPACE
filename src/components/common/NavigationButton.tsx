import { Arrow } from '~/components/icons'
import { IconButton } from './IconButton'
import { Link$, type LinkPath } from './Link'
import { TailwindComponent } from './tailwind'

interface NavigationButtonProps extends TailwindComponent {
    left?: boolean
    href: LinkPath
}
export const NavigationButton = ({
    left = false,
    href,
    twClass,
    children,
}: React.PropsWithChildren<NavigationButtonProps>) => {
    return (
        <Link$
            href={href}
            type="button"
            className={`${twClass} group flex w-fit flex-row items-center justify-between gap-2 rounded-full border border-transparent bg-transparent p-2 transition-all duration-300 hover:border-primary-blue active:opacity-75 ${
                left ? 'flex-row' : 'flex-row-reverse'
            }`}
        >
            <IconButton disableScaleOnActive>
                {left ? <Arrow className="mr-0.5 rotate-180 scale-125" /> : <Arrow className="ml-0.5 scale-125" />}
            </IconButton>

            <p className="px-4">{children}</p>
        </Link$>
    )
}
