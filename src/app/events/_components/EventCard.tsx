import { ThumbnailCard } from '~/components/common'
import { EVENT_META } from '~/src/interfaces/Common'

export const EventCard = ({ event }: { event: EVENT_META }) => {
    return (
        <ThumbnailCard
            twClass="animate-rise duration-500 "
            meta={event}
            href={`/events/${event.EVENT_NOTION_ID}`}
            transformer={(event) => ({
                date: event.EVENT_DATE,
                description: event.EVENT_DESCRIPTION,
                imageSrc: event.EVENT_THUMBNAIL,
                title: event.EVENT_TITLE,
                cardType: event.EVENT_TYPE,
            })}
        />
    )
}
