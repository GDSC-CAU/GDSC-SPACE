import { Divider } from '~/components/common'
import { EVENT_META } from '~/interfaces/Common'
import { EventCard } from './_components'
import { EventCardDesktop } from './_components/EventCardDesktop'

import { EventCardMobile } from './_components/EventCardMobile'

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
            EVENT_NOTION_ID: '',

        })
    )

const bulkData = generateRandomEvent(50)

export default function EventsPage() {
    return (
        <>
            <div className="flex h-full w-full flex-col items-center gap-1.5">
                <h1 className="mt-20 font-eng text-5xl font-bold">Event</h1>
                <span className="text-xs">GDSC CAU가 진행한 행사들과 다가올 이벤트들을 확인하세요!</span>
            </div>

            <div className="flex w-fit flex-col items-center justify-center pt-4">
                <Divider twClass="w-full" />

                <div className="grid w-full items-center gap-y-8 md: lg:grid-cols-3 md:mx-0.5">
                    {bulkData.map((event) => (
                        <EventCardDesktop event={event} key={event.EVENT_ID} />
                    ))}

                    {bulkData.map((event, i) => (
                        <EventCardMobile event={event} key={event.EVENT_ID} />
                    ))}
                </div>
            </div>
        </>
    )
}
