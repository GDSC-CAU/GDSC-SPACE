'use client'

import { TailwindComponent } from '../tailwind'
import { useVisibility, UseVisibilityProps } from './useVisibility'

const tailwindDuration = {
    '300': 'duration-300',
    '500': 'duration-500',
    '700': 'duration-700',
    '1000': 'duration-1000',
    '1250': 'duration-[1.25s]',
} as const

const tailwindAnimationTiming = {
    'ease-in': 'ease-in',
    'ease-out': 'ease-out',
    'ease-in-out': 'ease-in-out',
    'ease-linear': 'ease-linear',
    ease: 'ease',
} as const

export interface FadeInProps extends UseVisibilityProps, TailwindComponent {
    from?: string
    to?: string
    duration?: keyof typeof tailwindDuration
    animationTiming?: keyof typeof tailwindAnimationTiming
}

export const FadeIn = ({
    from,
    to,
    duration = '700',
    observerOption,
    children,
    twClass,
    animationTiming = 'ease',
}: React.PropsWithChildren<FadeInProps>) => {
    const { isVisible, setVisibilityRef } = useVisibility<HTMLDivElement>({ observerOption })

    const fromStyle = `${from} opacity-0`
    const toStyle = `${to} opacity-100`

    const customizedAnimation = `${tailwindDuration[duration]} ${tailwindAnimationTiming[animationTiming]}`
    return (
        <div
            ref={setVisibilityRef}
            className={`${
                isVisible ? toStyle : fromStyle
            } ${customizedAnimation} ${twClass} transition-all transform-gpu`}
        >
            {children}
        </div>
    )
}
