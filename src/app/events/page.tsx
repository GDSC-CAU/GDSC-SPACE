import Link from 'next/link'
import { EventCard } from './_components/eventCard'

export type eventData = {
    id: string
    category: string
    date: string
    title: string
    content: string
    image: string
}

export default function EventList() {
    const eventData: eventData = {
        id: '3',
        title: 'GDSC Job Fair 2023',
        content: 'by 대한민국 인공지능위크 2023',
        date: 'Jul 15, 2023',
        category: 'Association',
        image: '/events/cardtest.png',
    }
    return (
        <main className="flex h-full w-full flex-col items-center p-24">
            <p>This is Event List</p>
            <Link href="/events/1">Event 1</Link>
            <Link href="/events/2">Event 2</Link>
            <EventCard event={eventData} />
        </main>
    )
}
