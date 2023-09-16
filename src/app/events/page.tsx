import { Divider } from '~/components/common'
import { API_EVENT_LIST, API_RESPONSE } from '~/interfaces/Common'
import { Fetcher } from '~/src/utils'
import { EventCard } from './_components'

export const dynamic = 'force-dynamic'

const fetcher = new Fetcher({ baseUrl: 'http://localhost:3000' })

export default async function EventsPage() {
    const post = await fetcher.get<API_RESPONSE<API_EVENT_LIST>>(`/event/getList`)

    const isValidRequest = post.RESULT_CODE === 200 && post.RESULT_DATA

    if (!isValidRequest) return <>404</>

    return (
        <>
            <div className="flex h-full w-full flex-col items-center gap-1.5">
                <h1 className="mt-20 font-eng text-5xl font-bold">Event</h1>
                <span className="text-xs">GDSC CAU가 진행한 행사들과 다가올 이벤트들을 확인하세요!</span>
            </div>
            <div className="relative flex h-full w-full max-w-[800px] flex-col items-center justify-center pt-4 md:min-w-[770px]">
                <Divider twClass="w-[800px] md:w-full" />

                <div className="relative flex h-full w-full flex-col items-start justify-evenly gap-4 md:grid md:grid-cols-3 ">
                    {post.RESULT_DATA.EVENT_LIST.map((event) => (
                        <EventCard event={event} key={event.EVENT_ID} />
                    ))}
                </div>
            </div>
        </>
    )
}
