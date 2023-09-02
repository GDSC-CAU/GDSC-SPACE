'use client'

import { ThumbnailCard, useVisibility } from '~/components/common'
import { EVENT_META } from '~/interfaces/Common'

export const EventCardDesktop = ({ event }: { event: EVENT_META }) => {
    const { isVisible, setVisibilityRef } = useVisibility<HTMLDivElement>()

    return (
        <div className=" group hidden w-full items-center justify-center lg:flex" ref={setVisibilityRef}>
            <ThumbnailCard
                twClass="animate-rise duration-500"
                meta={event}
                href={`/events/${event.EVENT_ID}`}
                transformer={(event) => ({
                    date: event.EVENT_DATE,
                    description: event.EVENT_DESCRIPTION,
                    imageSrc: event.EVENT_THUMBNAIL,
                    title: event.EVENT_TITLE,
                    cardType: event.EVENT_TYPE,
                })}
            />
        </div>
    )
}
