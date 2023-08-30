import { NextRequest, NextResponse } from 'next/server'
import { API_BLOG_LIST, API_RESPONSE, BLOG_TYPE_PARAMS } from '~/src/interfaces'
import { getBlogListDB } from '~/utils/FirebaseUtil'

export async function GET(_: NextRequest, { params }: BLOG_TYPE_PARAMS) {
    if (params.type !== 'Design' && params.type !== 'Development' && params.type !== 'Project') {
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
        RESULT_DATA: await getBlogListDB(params.type),
    }

    return NextResponse.json(apiResultSuccess, { status: 200 })
}
