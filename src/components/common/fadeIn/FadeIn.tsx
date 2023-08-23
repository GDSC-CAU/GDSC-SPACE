'use client'

import { TailwindComponent } from '../tailwind'
import { useVisibility, UseVisibilityProps } from './useVisibility'

interface FadeInProps extends UseVisibilityProps, TailwindComponent {
    from: string
    to: string
}

export const FadeIn = ({ from, to, observerOption, children, twClass }: React.PropsWithChildren<FadeInProps>) => {
    const { isVisible, setVisibilityRef } = useVisibility<HTMLDivElement>({ observerOption })

    const fromStyle = `${from} opacity-0`
    const toStyle = `${to} opacity-100`

    return (
        <div ref={setVisibilityRef} className={`${isVisible ? toStyle : fromStyle} ${twClass} transition-all`}>
            {children}
        </div>
    )
}
