import Image from 'next/image'
import Link from 'next/link'
import { Event } from '../page'

const EventCard = ({ event }: { event: Event }) => {
    return (
        <Link href={`/events/${event.id}`}>
            <div className="group relative h-80 w-60">
                <div className="relative flex h-1/2 w-full items-center justify-end overflow-hidden rounded-t-xl">
                    <Image
                        fill
                        src={event.image}
                        alt="picture"
                        objectFit={'cover'}
                        className="h-full w-full rounded-t-lg duration-500 ease-in-out group-hover:scale-110"
                    ></Image>
                </div>
                <div className="absolute h-1/2 w-full rounded-b-xl bg-black ">
                    <div className="px-4 pb-2 pt-4 font-kor text-xs">
                        {' '}
                        {event.category} ﹒ {event.date}
                    </div>
                    <div className="px-4 font-eng text-xl"> {event.title} </div>
                    <div className="p-4 font-kor text-sm"> {event.content} </div>
                </div>
            </div>
        </Link>
    )
}

export { EventCard }
