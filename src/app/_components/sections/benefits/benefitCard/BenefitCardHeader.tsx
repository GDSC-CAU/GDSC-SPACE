import { GradientHeader, GradientHeaderProps } from '~/components/common'

interface BenefitCardHeaderProps extends GradientHeaderProps {
    center?: boolean
    white?: boolean
}
export const BenefitCardHeader = ({
    children,
    twClass,
    size = 'text-4xl',
    center = false,
    white = false,
}: React.PropsWithChildren<BenefitCardHeaderProps>) => {
    const textCenter = center ? 'text-center' : ''

    if (white)
        return (
            <h1
                className={`${twClass} ${textCenter} ${size} z-10 select-none font-eng font-medium leading-normal text-white`}
            >
                {children}
            </h1>
        )

    return (
        <GradientHeader
            twClass={`${twClass} ${textCenter} select-none font-eng font-medium mb-3 leading-normal`}
            size={size}
        >
            {children}
        </GradientHeader>
    )
}
