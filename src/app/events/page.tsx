import Link from 'next/link'
import { EventCard } from './_components/eventCard'

export default function EventList() {
    return (
        <main className="flex h-full w-full flex-col items-center p-24">
            <p>This is Event List</p>
            <Link href="/events/1">Event 1</Link>
            <Link href="/events/2">Event 2</Link>
            <EventCard
                id={'3'}
                title={'GDSC Job Fair 2023'}
                content={'by 대한민국 인공지능위크 2023'}
                date={'Jul 15, 2023'}
                category={'Association'}
                image={
                    'https://fastly.picsum.photos/id/13/2500/1667.jpg?hmac=SoX9UoHhN8HyklRA4A3vcCWJMVtiBXUg0W4ljWTor7s'
                }
            />
        </main>
    )
}
