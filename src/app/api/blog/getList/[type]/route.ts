import { NextRequest, NextResponse } from 'next/server'
import { API_BLOG_LIST, API_RESPONSE, BLOG_TYPE_PARAMS } from '~/src/interfaces'
import { blogApi } from '~/src/utils/notion'

const NOTION_KEY = {
    Development: '3de8e23c786e4385a6fcd0cf4cfba0db',
    Design: '3de8e23c786e4385a6fcd0cf4cfba0db',
    Project: '3de8e23c786e4385a6fcd0cf4cfba0db',
} as const

export async function GET(request: NextRequest, { params: { type } }: BLOG_TYPE_PARAMS) {
    if (type !== 'Design' && type !== 'Development' && type !== 'Project') {
        const apiResultError: API_RESPONSE<undefined> = {
            RESULT_CODE: 100,
            RESULT_MSG: 'Blog Type Error',
            RESULT_DATA: undefined,
        }

        return NextResponse.json(apiResultError, { status: 200 })
    }

    const { response: blogList, success } = await blogApi.getAllPostMeta(NOTION_KEY[type])

    if (success === false) {
        const apiResultError: API_RESPONSE<undefined> = {
            RESULT_CODE: 100,
            RESULT_MSG: 'Blog Type Error',
            RESULT_DATA: undefined,
        }

        return NextResponse.json(apiResultError, { status: 200 })
    }

    const apiResultSuccess: API_RESPONSE<API_BLOG_LIST> = {
        RESULT_CODE: 200,
        RESULT_MSG: 'Success',
        RESULT_DATA: {
            BLOG_CNT: blogList.length,
            BLOG_LIST: blogList,
        },
    }

    return NextResponse.json(apiResultSuccess, { status: 200 })
}
