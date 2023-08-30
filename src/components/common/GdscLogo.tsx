import Image from 'next/image'
import { TailwindComponent } from './tailwind'

interface GdsLogoProps extends TailwindComponent {
    scale?: number
}
export const GdscLogo = ({ twClass, scale = 0.75 }: GdsLogoProps) => {
    return (
        <Image
            className={`${twClass} select-none`}
            src="/gdsc-logo.png"
            width={402 * scale}
            height={25.06 * scale}
            alt="gdsc-logo image"
            priority={false}
            quality={100}
        />
    )
}
