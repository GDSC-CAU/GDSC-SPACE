import type { API_MAIN_TIMELINES } from '~/src/interfaces'
import { TimelineGradientDivider } from './GradientDivider'
import { TimelineHereWeGo } from './HereWeGo'
import { TimelineCardView } from './TimelineCardView'

export const TimeLinesSection = (timeLinesSectionProps: API_MAIN_TIMELINES) => {
    return (
        <section className="relative mb-40 flex h-full w-full flex-col items-center justify-center md:mb-0 md:h-[52.5rem] md:flex-row md:gap-20">
            <TimelineHereWeGo />
            <TimelineGradientDivider />
            <TimelineCardView {...timeLinesSectionProps} />
        </section>
    )
}
