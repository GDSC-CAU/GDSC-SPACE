import { TailwindComponent } from './tailwind'

export interface GradientHeaderProps extends TailwindComponent {
    desktopSize?: 'md:text-3xl' | 'md:text-4xl' | 'md:text-5xl' | 'md:text-6xl' | 'md:text-7xl' | 'md:text-8xl'
    mobileSize?: 'text-xl' | 'text-2xl' | 'text-3xl' | 'text-4xl' | 'text-5xl'
    id?: string
}
export const GradientHeader = ({
    desktopSize = 'md:text-6xl',
    mobileSize = 'text-5xl',
    twClass,
    children,
    id,
}: React.PropsWithChildren<GradientHeaderProps>) => (
    <h1
        id={id}
        className={` ${desktopSize} ${mobileSize} ${twClass} z-10 scroll-m-40 bg-gradient-to-b from-primary-blue to-white bg-clip-text font-eng font-bold text-transparent`}
    >
        {children}
    </h1>
)
