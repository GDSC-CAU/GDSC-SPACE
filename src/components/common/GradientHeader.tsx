import { TailwindComponent } from './tailwind'

interface GradientHeaderProps extends TailwindComponent {
    size?: 'text-6xl' | 'text-7xl' | 'text-8xl'
}
export const GradientHeader = ({
    size = 'text-6xl',
    twClass,
    children,
}: React.PropsWithChildren<GradientHeaderProps>) => (
    <h1
        className={`${size} ${twClass} z-10 bg-gradient-to-b from-primary-blue to-white bg-clip-text font-eng font-bold text-transparent`}
    >
        {children}
    </h1>
)
