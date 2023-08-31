import { ThumbnailCard } from '~/components/common'
import { EVENT_META } from '~/interfaces/Common'

export const EventCardMobile = ({ event }: { event: EVENT_META }) => {
    return (
        <div className="flex w-full flex-col items-center justify-center gap-y-8 lg:hidden">
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
