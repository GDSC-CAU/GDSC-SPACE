/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { API_BLOG_LIST, API_RESPONSE, BLOG_TYPE_PARAMS } from '~/src/interfaces'
import { Fetcher } from '~/src/utils/fetcher'
import { BlogView } from '../_components/BlogArticleView'
import { BlogRoutingType } from '../_data/blogRouteData'

const fetcher = new Fetcher({ baseUrl: 'http://localhost:3000' })

export default async function Blog({ params: { type } }: BLOG_TYPE_PARAMS) {
    const post = await fetcher.get<API_RESPONSE<API_BLOG_LIST>>(`/blog/getList/${type}`)

    const isValidRequest = post.RESULT_CODE === 200 && post.RESULT_DATA

    return (
        <>
            {isValidRequest ? <BlogView type={type as BlogRoutingType} {...post.RESULT_DATA!} /> : "Something's wrong!"}
        </>
    )
}
