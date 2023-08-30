'use client'

import { FadeIn, FadeInProps } from './fadeIn/FadeIn'
import { GradientHeader, GradientHeaderProps } from './GradientHeader'
import { TailwindComponent } from './tailwind'

interface FadeInGradientHeaderProps extends GradientHeaderProps, TailwindComponent, FadeInProps {}

export const FadeInGradientHeader = ({
    id,
    desktopSize = 'md:text-6xl',
    mobileSize = 'text-5xl',
    children,
    ...fadeInProps
}: React.PropsWithChildren<FadeInGradientHeaderProps>) => (
    <FadeIn {...fadeInProps}>
        <GradientHeader id={id} mobileSize={mobileSize} desktopSize={desktopSize}>
            {children}
        </GradientHeader>
    </FadeIn>
)
