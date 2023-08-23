'use client'

import { TailwindComponent } from '../tailwind'
import { useVisibility, UseVisibilityProps } from './useVisibility'

const tailwindDuration = {
    '300': 'duration-300',
    '500': 'duration-500',
    '700': 'duration-700',
    '1000': 'duration-1000',
} as const

interface FadeInProps extends UseVisibilityProps, TailwindComponent {
    from: string
    to: string
    duration?: keyof typeof tailwindDuration
}

export const FadeIn = ({
    from,
    to,
    duration = '500',
    observerOption,
    children,
    twClass,
}: React.PropsWithChildren<FadeInProps>) => {
    const { isVisible, setVisibilityRef } = useVisibility<HTMLDivElement>({ observerOption })

    const fromStyle = `${from} opacity-0`
    const toStyle = `${to} opacity-100`

    return (
        <div
            ref={setVisibilityRef}
            className={`${isVisible ? toStyle : fromStyle} ${tailwindDuration[duration]} ${twClass} transition-all`}
        >
            {children}
        </div>
    )
}
