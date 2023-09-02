import { Divider, PageHeader } from '~/src/components/common'
import type { API_BLOG_DETAIL, API_RESPONSE, BLOG_POST_PARAMS } from '~/src/interfaces'
import { Fetcher } from '~/src/utils'
import { BlogNavigationButtons, DevDesignPostDetailView, ProjectPostDetailView } from './_components'

const fetcher = new Fetcher({ baseUrl: 'http://localhost:3000' })

export default async function BlogDetailView({ params: { id, type } }: BLOG_POST_PARAMS) {
    const post = await fetcher.get<API_RESPONSE<API_BLOG_DETAIL>>(`blog/getDetail/${type}/${id}`)
    const isValidRequest = post.RESULT_CODE === 200 && post.RESULT_DATA

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
        <main className="flex h-full w-full flex-col items-center justify-between md:gap-5 md:pb-5">
            <PageHeader heading={`${type}`} twClass="w-full text-5xl bg-theme-background pt-8 md:top-10" />

            <Divider disableMargin />

            {type === 'Project' && <ProjectPostDetailView {...post.RESULT_DATA} />}
            {type !== 'Project' && <DevDesignPostDetailView {...post.RESULT_DATA} />}

            <BlogNavigationButtons {...post.RESULT_DATA} />
        </main>
    )
}
