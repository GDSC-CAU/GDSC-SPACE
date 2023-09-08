/* eslint-disable @typescript-eslint/no-non-null-assertion */
'use client'

import { FadeIn } from '~/src/components/common'
import { MAIN_TIMELINE_DATA } from '~/src/interfaces/Common'

export const TimeLineCard = ({
    timeLine,
    bgColor,
    textColor,
    borderGroupColor,
}: {
    timeLine: MAIN_TIMELINE_DATA
    bgColor: string
    textColor: string
    borderGroupColor: string
}) => {
    return (
        <FadeIn
            observerOption={{
                rootMargin: '100px 100% 100% 100px',
            }}
            from="translate-x-1/2 skew-x-12 scale-75"
            to="translate-x-0 skew-x-0 scale-100"
            duration="1250"
            twClass="group relative inset-0 z-10 h-[13.5rem] w-full md:w-[24rem]"
        >
            <h1
                className={`${bgColor} flex h-[13.5rem] w-full select-none items-start justify-start rounded-3xl px-5 py-4 font-eng text-base text-black md:text-lg`}
            >
                {timeLine.TIMELINE_CARD_TITLE}
            </h1>

            <ul
                className={`${borderGroupColor} absolute inset-x-0 bottom-0 flex h-[10rem] w-full flex-col items-start justify-start rounded-t-3xl rounded-bl-lg rounded-br-3xl border border-transparent bg-black p-5 transition-all duration-300 group-hover:shadow-2xl group-hover:brightness-125 group-hover:skew-x-2 group-hover:scale-105`}
            >
                <h2 className={`${textColor} mb-10 select-none font-eng text-base md:text-lg`}>
                    {timeLine.TIMELINE_TITLE}
                </h2>
                <p className="select-none text-sm font-light text-white md:text-base">{timeLine.TIMELINE_DATE}</p>
                <p className="select-none text-sm font-light text-white md:text-base">
                    {timeLine.TIMELINE_DESCRIPTION}
                </p>
            </ul>
        </FadeIn>
    )
}
