import { NotionAPI } from 'notion-client'
import { Divider } from '~/src/components/common'
import { BLOG_POST_PARAMS } from '~/src/interfaces'
import { Notion } from './_components/NotionRenderer'

const notion = new NotionAPI()

export default async function BlogView({ params: { id } }: BLOG_POST_PARAMS) {
    let recordMap: Awaited<ReturnType<typeof notion.getPage>> | null = null
    try {
        const res = await notion.getPage(id)
        recordMap = res
    } catch (e) {
        // eslint-disable-next-line no-console
        console.log(e)
        recordMap = null
    }

    return (
        <main className="h-full w-full">
            <Divider />
            {recordMap ? <Notion recordMap={recordMap} /> : <>404</>}
        </main>
    )
}
