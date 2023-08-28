import { Divider } from '~/components/common'
import { EVENT_META } from '~/interfaces/Common'
import { EventCard } from './_components'

const generateRandomEvent = (count: number): Array<EVENT_META> =>
    Array.from(
        {
            length: count,
        },
        (_, i) => ({
            EVENT_ID: String(i),
            EVENT_TITLE: 'GDSC Job Fair 2023 GDSC Job Fair 2023 GDSC Job Fair 2023',
            EVENT_DESCRIPTION:
                'by 대한민국 인공지능위크 2023 by 대한민국 인공지능위크 2023 by 대한민국 인공지능위크 2023 by 대한민국 인공지능위크 2023 by 대한민국 인공지능위크 2023 2023 by 대한민국 인공지능위크 2023 by 대한민국 인공지능위크 2023 by 대한민국 인공지능위크 2023 by 대한민국 인공지능위크 2023',
            EVENT_DATE: 'Jul 15, 2023',
            EVENT_TYPE: 'Association',
            EVENT_THUMBNAIL: '/events/cardtest.png',
        })
    )

const bulkData = generateRandomEvent(50)

export default function Events() {
    return (
        <>
            <div className="flex h-full w-full flex-col items-center gap-1.5">
                <h1 className="mt-20 font-eng text-5xl font-bold">Event</h1>
                <span className="text-xs">GDSC CAU가 진행한 행사들과 다가올 이벤트들을 확인하세요!</span>
            </div>

            <div className="flex w-fit flex-col items-center justify-center pt-4">
                <Divider twClass="w-full" />

                <div className="grid w-fit grid-cols-3 items-center justify-evenly gap-x-2 gap-y-8">
                    {bulkData.map((event) => (
                        <EventCard event={event} key={event.EVENT_ID} />
                    ))}
                </div>
            </div>
        </>
    )
}
