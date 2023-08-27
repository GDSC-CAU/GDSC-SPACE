'use client'

import { FadeIn, FadeInProps } from './fadeIn/FadeIn'
import { GradientHeader, GradientHeaderProps } from './GradientHeader'
import { TailwindComponent } from './tailwind'

interface FadeInGradientHeaderProps extends GradientHeaderProps, TailwindComponent, FadeInProps {}

export const FadeInGradientHeader = ({
    id,
    size = 'text-6xl',
    children,
    ...fadeInProps
}: React.PropsWithChildren<FadeInGradientHeaderProps>) => (
    <FadeIn {...fadeInProps}>
        <GradientHeader id={id} size={size}>
            {children}
        </GradientHeader>
    </FadeIn>
)
