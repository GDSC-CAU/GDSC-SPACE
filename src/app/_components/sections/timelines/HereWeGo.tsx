import { FadeInGradientHeader } from '~/src/components/common'

export const TimelineHereWeGo = () => (
    <FadeInGradientHeader twClass="py-20 md:py-0 w-full text-center md:w-1/2 md:min-w-[50%] md:max-w-[50%]">
        Here we go. <br />{' '}
        <p className="hidden md:block">
            What you will <br />
            experience.
        </p>
        <p className="block md:hidden">Time line.</p>
    </FadeInGradientHeader>
)
