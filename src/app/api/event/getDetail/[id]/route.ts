import { NextRequest, NextResponse } from 'next/server'
import { API_EVENT_DETAIL, API_RESPONSE, EVENT_PAGE_PARAMS } from '~/src/interfaces'
import { getEventDetailDB } from '~/utils/FirebaseUtil'
import { blogApi } from '~/utils/notion'

export async function GET(_: NextRequest, { params: { id } }: EVENT_PAGE_PARAMS) {
    const eventDetail: API_EVENT_DETAIL = await getEventDetailDB(id)

    const recordMap = await blogApi.getPostRecordMap(eventDetail.EVENT_NOTION_ID)

    if (recordMap.success === false) {
        const apiResultError: API_RESPONSE<undefined> = {
            RESULT_CODE: 100,
            RESULT_MSG: 'Blog Not Found',
            RESULT_DATA: undefined,
        }

        return NextResponse.json(apiResultError, { status: 200 })
    }

    eventDetail.EVENT_CONTENT = recordMap.response

    const apiResult: API_RESPONSE<API_EVENT_DETAIL> = {
        RESULT_CODE: 200,
        RESULT_MSG: 'Success',
        RESULT_DATA: eventDetail,
    }

    return NextResponse.json(apiResult, { status: 200 })
}
