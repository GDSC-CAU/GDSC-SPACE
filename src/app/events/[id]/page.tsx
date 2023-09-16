import Link from 'next/link'
import { FillImage } from '~/components/common'
import { Instagram } from '~/components/icons'
import { Email } from '~/components/icons'
import { Link as LinkIcon } from '~/components/icons'
import { API_EVENT_DETAIL, API_RESPONSE } from '~/src/interfaces'
import { Fetcher } from '~/src/utils'
import { Notion } from '~/utils/notion/NotionRenderer'

const fetcher = new Fetcher({ baseUrl: 'http://localhost:3000' })

export default async function EventView({ params }: { params: { id: string } }) {
    const postData = await fetcher.get<API_RESPONSE<API_EVENT_DETAIL>>(`event/getDetail/${params.id}`)
    const isValidRequest = postData.RESULT_CODE === 200 && postData.RESULT_DATA

    if (isValidRequest === false) {
        return (
            <main className="flex h-full w-full flex-col items-center justify-between md:gap-5 md:pb-5">
                <div className="h-full w-full">
                    <h1 className="font-eng text-5xl font-semibold">404</h1>
                </div>
            </main>
        )
    }

    return (
        <main className="h-full w-full">
            <FillImage
                containerClass="ml-[-13rem] h-[35rem] w-[calc(100%+26rem)]"
                alt="pixabay picture1"
                src={postData.RESULT_DATA.EVENT_THUMBNAIL}
                priority
            />

            <div className="my-12 flex flex-row items-center justify-center">
                <Link href={postData.RESULT_DATA.EVENT_LINK}>
                    <button className="h-8 w-28 cursor-pointer rounded-full border-4 border-blue-600 bg-blue-600 duration-500 hover:border-blue-700 hover:bg-blue-700 ">
                        Join
                    </button>
                </Link>
            </div>

            <Notion recordMap={postData.RESULT_DATA.EVENT_CONTENT!} />
        </main>
    )
}
