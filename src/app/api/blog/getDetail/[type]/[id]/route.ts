import { NextRequest, NextResponse } from 'next/server'
import { API_BLOG_DETAIL, API_RESPONSE, BLOG_POST_PARAMS } from '~/src/interfaces'

export async function GET(_: NextRequest, { params }: BLOG_POST_PARAMS) {
    if (params.type !== 'Design' && params.type !== 'Development' && params.type !== 'Project') {
        const apiResultError: API_RESPONSE<undefined> = {
            RESULT_CODE: 100,
            RESULT_MSG: 'Blog Type Error',
            RESULT_DATA: undefined,
        }

        return NextResponse.json(apiResultError, { status: 200 })
    }

    const dummyBlogDetail: API_BLOG_DETAIL = {
        BLOG_AUTHOR: 'Dev. LR',
        BLOG_CONTENT: [{ CONTENT_TYPE: 'text', CONTENT_DATA: 'Test Content' }],
        BLOG_DATE: '2023. 08. 23.',
        BLOG_ID: params.id,
        BLOG_TAG: ['Application', 'Flutter'],
        BLOG_TITLE: `${params.type} ${params.id}`,
    }

    const apiResultSuccess: API_RESPONSE<API_BLOG_DETAIL> = {
        RESULT_CODE: 200,
        RESULT_MSG: 'Success',
        RESULT_DATA: dummyBlogDetail,
    }

    return NextResponse.json(apiResultSuccess, { status: 200 })
}
