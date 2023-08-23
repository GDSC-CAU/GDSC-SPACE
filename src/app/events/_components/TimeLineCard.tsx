import { MAIN_TIMELINE_DATA } from 'src/interfaces/common'

export const TimeLineCard = ({
    timeLine,
    bg_color,
    text_color,
}: {
    timeLine: MAIN_TIMELINE_DATA
    bg_color: string
    text_color: string
}) => {
    return (
        <section className="relative inset-0 z-10 h-[15rem] w-[25rem]">
            <div
                className={`flex h-[15rem] w-full items-start justify-start rounded-3xl ${bg_color} px-5 py-4 text-2xl text-black`}
            >
                {timeLine.TIMELINE_CARD_TITLE}
            </div>
            <div className="absolute inset-x-0 bottom-0 flex h-[11rem] w-full flex-col items-start justify-start rounded-t-3xl rounded-bl-lg rounded-br-3xl bg-black p-6">
                <div className={`text-xl ${text_color} mb-10`}>{timeLine.TIMELINE_TITLE}</div>
                <div className="text-xl text-white">{timeLine.TIMELINE_DATE}</div>
                <div className="text-xl text-white">{timeLine.TIMELINE_DESCRIPTION}</div>
            </div>
        </section>
    )
}
