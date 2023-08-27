import { NextRequest, NextResponse } from 'next/server'
import { API_EVENT_DETAIL, API_RESPONSE, EVENT_PAGE_PARAMS } from '~/src/interfaces'

export async function GET(request: NextRequest, { params }: EVENT_PAGE_PARAMS) {
    const dummyEventDetail: API_EVENT_DETAIL = {
        EVENT_BANNER: 'https://cdn.pixabay.com/photo/2023/08/11/18/35/flowers-8184126_1280.jpg',
        EVENT_CONTENT: [{ CONTENT_TYPE: 'text', CONTENT_DATA: 'Test Content' }],
        EVENT_DATE: '2023. 08. 23.',
        EVENT_ID: params.id,
        EVENT_LINK: 'https://gdsc-cau.github.io',
        EVENT_TITLE: `Event ${params.id}`,
    }

    const apiResult: API_RESPONSE<API_EVENT_DETAIL> = {
        RESULT_CODE: 200,
        RESULT_MSG: 'Success',
        RESULT_DATA: dummyEventDetail,
    }

    return NextResponse.json(apiResult, { status: 200 })
}
