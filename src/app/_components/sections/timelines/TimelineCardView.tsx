import { TimeLineCard } from '~/src/app/events/_components/TimeLineCard'
import { API_MAIN_TIMELINES } from '~/src/interfaces'

const bg_colors = [
    'bg-primary-hotpink',
    'bg-primary-yellow',
    'bg-primary-teal',
    'bg-primary-blue',
    'bg-primary-purple',
] as const

const text_colors = [
    'text-primary-hotpink',
    'text-primary-yellow',
    'text-primary-teal',
    'text-primary-blue',
    'text-primary-purple',
] as const

const border_group_colors = [
    'group-hover:border-primary-hotpink/50',
    'group-hover:border-primary-yellow/50',
    'group-hover:border-primary-teal/50',
    'group-hover:border-primary-blue/50',
    'group-hover:border-primary-purple/50',
] as const

export const TimelineCardView = ({ MAIN_TIMELINE_LIST }: API_MAIN_TIMELINES) => (
    <div className="flex h-[42.5rem] w-full flex-col items-center justify-start gap-4 overflow-y-auto px-3 py-0 scrollbar-hide md:w-1/2 md:min-w-[50%] md:max-w-[50%] md:gap-7 md:px-5 md:py-32">
        {MAIN_TIMELINE_LIST.map((timeline, i) => (
            <TimeLineCard
                key={`${timeline.TIMELINE_TITLE}-${timeline.TIMELINE_DESCRIPTION}`}
                timeLine={timeline}
                bgColor={bg_colors[i % 5]}
                textColor={text_colors[i % 5]}
                borderGroupColor={border_group_colors[i % 5]}
            />
        ))}
    </div>
)
