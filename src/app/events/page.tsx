import Link from 'next/link'

export default function EventList() {
    return (
        <main className="flex h-full w-full flex-col items-center p-24">
            <p>This is Event List</p>
            <Link href="/events/1">Event 1</Link>
            <Link href="/events/2">Event 2</Link>
        </main>
    )
}
