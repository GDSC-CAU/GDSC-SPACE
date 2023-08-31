'use client'

import { ThumbnailCard, useVisibility } from '~/components/common'
import { EVENT_META } from '~/interfaces/Common'

export const EventCardDesktop = ({ event }: { event: EVENT_META }) => {
    const { isVisible, setVisibilityRef } = useVisibility<HTMLDivElement>()

    return (
        <div className="group hidden w-full flex-row items-center lg:flex" ref={setVisibilityRef}>
            <div className="grid w-fit grid-cols-3 items-center justify-evenly gap-x-2 gap-y-8">
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
        </div>
    )
}
