import { TailwindComponent } from '~/components/common/tailwind'

interface CircleGradientHeaderProps extends TailwindComponent {
    radius: number
    yOffset: number
    fontSize: number
    fontWeight?: number
    letterSpacing?: number
}
export const CircleGradientHeader = ({
    children,
    twClass,
    radius,
    yOffset,
    ...font
}: React.PropsWithChildren<CircleGradientHeaderProps>) => {
    const centerX = 100

    return (
        <svg className={twClass} width="100%" height="100%" fill="transparent" viewBox="0 0 200 200">
            <defs>
                <linearGradient id="gradient" x1="100%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#1753F1" />
                    <stop offset="100%" stopColor="#fff" />
                </linearGradient>
            </defs>

            <path
                id="curve"
                d={`M${centerX - radius},${yOffset + 200} A${radius},${radius} 0 0,1 ${centerX + radius},${
                    yOffset + 200
                }`}
            />

            <text
                width="100%"
                height="100%"
                {...font}
                className="font-eng"
                fontSize={`${font.fontSize}rem`}
                fill="url(#gradient)"
            >
                <textPath href="#curve" startOffset="50%" textAnchor="middle">
                    {children}
                </textPath>
            </text>
        </svg>
    )
}
