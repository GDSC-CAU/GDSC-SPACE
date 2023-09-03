import { NextRequest, NextResponse } from 'next/server'
import { API_EVENT_DETAIL, API_RESPONSE, EVENT_PAGE_PARAMS } from '~/src/interfaces'
import { blogApi } from '~/utils/notion'

export async function GET(_: NextRequest, { params: { id } }: EVENT_PAGE_PARAMS) {
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

    const eventDetail: API_EVENT_DETAIL = {
        EVENT_CONTENT: recordMap.response,
        ...postMeta.response,
    }

    const apiResult: API_RESPONSE<API_EVENT_DETAIL> = {
        RESULT_CODE: 200,
        RESULT_MSG: 'Success',
        RESULT_DATA: eventDetail,
    }

    return NextResponse.json(apiResult, { status: 200 })
}
