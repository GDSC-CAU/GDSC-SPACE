import Image from 'next/image'
import Link from 'next/link'
import { EVENT_META } from '../../../interfaces/common'

const EventCard = ({ event }: { event: EVENT_META }) => {
    return (
        <Link href={`/events/${event.EVENT_ID}`}>
            <div className="group relative h-80 w-60 animate-rise">
                <div className="relative flex h-1/2 w-full items-center justify-end overflow-hidden rounded-t-xl">
                    <Image
                        fill
                        src={event.EVENT_THUMBNAIL}
                        alt="picture"
                        objectFit={'cover'}
                        className="h-full w-full rounded-t-lg duration-500 ease-in-out group-hover:scale-110"
                    ></Image>
                </div>
                <div className="absolute h-1/2 w-full rounded-b-xl bg-black ">
                    <div className="px-4 pb-2 pt-4 font-kor text-xs">
                        {' '}
                        {event.EVENT_TYPE} ﹒ {event.EVENT_DATE}
                    </div>
                    <div className="px-4 font-eng text-xl"> {event.EVENT_TITLE} </div>
                    <div className="p-4 font-kor text-sm"> {event.EVENT_DESCRIPTION} </div>
                </div>
            </div>
        </Link>
    )
}

export { EventCard }
