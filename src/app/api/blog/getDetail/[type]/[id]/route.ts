import { NextRequest, NextResponse } from 'next/server'
import { API_BLOG_DETAIL, API_RESPONSE, BLOG_POST_PARAMS } from '~/src/interfaces'
import { blogApi } from '~/src/utils/notion'

export async function GET(_: NextRequest, { params: { id, type } }: BLOG_POST_PARAMS) {
    if (type !== 'Design' && type !== 'Development' && type !== 'Project') {
        const apiResultError: API_RESPONSE<undefined> = {
            RESULT_CODE: 100,
            RESULT_MSG: 'Blog Type Error',
            RESULT_DATA: undefined,
        }

        return NextResponse.json(apiResultError, { status: 200 })
    }

    const postMeta = await blogApi.getSinglePostMeta(id)
    const recordMap = await blogApi.getPostRecordMap(id)

    if (recordMap.success === false || postMeta.success === false) {
        const apiResultError: API_RESPONSE<undefined> = {
            RESULT_CODE: 100,
            RESULT_MSG: 'Blog Not Found',
            RESULT_DATA: undefined,
        }

        return NextResponse.json(apiResultError, { status: 200 })
    }

    const blogDetail: API_BLOG_DETAIL = {
        BLOG_CONTENT: recordMap.response,
        ...postMeta.response,
    }

    const apiResultSuccess: API_RESPONSE<API_BLOG_DETAIL> = {
        RESULT_CODE: 200,
        RESULT_MSG: 'Success',
        RESULT_DATA: blogDetail,
    }

    return NextResponse.json(apiResultSuccess, { status: 200 })
}
