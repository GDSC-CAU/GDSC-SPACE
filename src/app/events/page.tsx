import { EventCard } from './_components/eventCard'

export type Event = {
    id: string
    category: string
    date: string
    title: string
    content: string
    image: string
}

export default function EventList() {
    const Event: Event = {
        id: '3',
        title: 'GDSC Job Fair 2023',
        content: 'by 대한민국 인공지능위크 2023',
        date: 'Jul 15, 2023',
        category: 'Association',
        image: '/events/cardtest.png',
    }
    return (
        <main className="flex min-w-[50%] flex-col items-center justify-center">
            <div className="flex h-full w-full flex-col items-center">
                <h1 className="mt-40 text-5xl font-bold">Event</h1>
                <span className="text-xs">GDSC Chung-ang이 진행한 행사들과 다가올 이벤트들을 확인하세요!</span>
            </div>
            <hr className="mx-auto mb-8 mt-12 w-full bg-gray-100" />
            <div className="space-envely grid grid-cols-3 items-center justify-center gap-5 ">
                <EventCard event={Event} />
                <EventCard event={Event} />
                <EventCard event={Event} />
                <EventCard event={Event} />
                <EventCard event={Event} />
            </div>
        </main>
    )
}
