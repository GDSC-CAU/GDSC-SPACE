import { FadeIn } from '~/src/components/common'

export const TimelineGradientDivider = () => (
    <FadeIn
        from="scale-y-0"
        to="scale-y-100"
        twClass="hidden md:block origin-top absolute w-fit h-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -z-10"
        duration="1000"
        animationTiming="ease-in-out"
    >
        <div className="ml-3.5 mt-0.5 hidden h-full w-[0.08rem] border-0 bg-gradient-to-b from-15% md:block md:from-primary-blue/40 md:to-white" />
    </FadeIn>
)
