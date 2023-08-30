import { GradientHeader, GradientHeaderProps } from '~/components/common'

interface BenefitCardHeaderProps extends GradientHeaderProps {
    center?: boolean
    white?: boolean
}
export const BenefitCardHeader = ({
    children,
    center = false,
    white = false,
    twClass,
    desktopSize = 'md:text-4xl',
    mobileSize = 'text-3xl',
    id,
}: React.PropsWithChildren<BenefitCardHeaderProps>) => {
    const textCenter = center ? 'text-center' : ''

    if (white)
        return (
            <h1
                className={`${twClass} ${textCenter} ${mobileSize} ${desktopSize} z-10 select-none font-eng font-medium leading-normal text-white`}
            >
                {children}
            </h1>
        )

    return (
        <GradientHeader
            twClass={`${twClass} ${textCenter} select-none font-eng font-medium mb-3`}
            desktopSize={desktopSize}
            mobileSize={mobileSize}
            id={id}
        >
            {children}
        </GradientHeader>
    )
}
