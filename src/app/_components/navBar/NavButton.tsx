import Link from 'next/link'
import { Link$, type LinkPath } from '~/src/components/common'

interface NavButtonProps<Props extends { type: 'link' | 'scroll' }> {
    type: 'link' | 'scroll'
    href: Props['type'] extends 'link' ? (Props['type'] extends 'scroll' ? never : LinkPath) : `${LinkPath}#${string}`
    children: React.ReactNode
    disableUnderline?: boolean
    onClick?: () => void
}
export const NavButton = <Props extends NavButtonProps<Props>>({
    type,
    href,
    children,
    disableUnderline = false,
    onClick,
}: Props) => {
    const isLink = type === 'link'

    const TargetLink = isLink ? Link$ : Link
    const shouldScrollToTop: boolean = isLink ? true : false

    return (
        <div className="w-fit" onClick={onClick}>
            <TargetLink
                className="group w-full select-none text-2xl md:text-sm"
                href={href as LinkPath}
                scroll={shouldScrollToTop}
            >
                <p className="font-eng font-light transition-opacity group-hover:opacity-90 md:font-normal">
                    {children}
                </p>
                {!disableUnderline && (
                    <div className="h-[0.75px] w-full rounded bg-theme-font transition-all duration-200 scale-x-0 group-hover:opacity-90 group-hover:scale-x-100 md:w-full" />
                )}
            </TargetLink>
        </div>
    )
}
