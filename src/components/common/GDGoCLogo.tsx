import Image from 'next/image'
import { TailwindComponent } from './tailwind'

interface GdsLogoProps extends TailwindComponent {
    scale?: number
}
export const GDGoCLogo = ({ twClass, scale = 0.75 }: GdsLogoProps) => {
    return (
        <Image
            className={`${twClass} select-none`}
            src="/gdg-logo.png"
            width={402 * scale}
            height={25.06 * scale}
            alt="gdg-logo image"
            priority={false}
            quality={100}
        />
    )
}
