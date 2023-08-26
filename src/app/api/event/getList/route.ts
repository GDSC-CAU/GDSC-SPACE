import { NextRequest, NextResponse } from 'next/server'
import { API_EVENT_LIST, API_RESPONSE } from '~/src/interfaces/common'

export async function GET(_: NextRequest) {
    const dummyEventList: API_EVENT_LIST = {
        EVENT_CNT: 10,
        EVENT_LIST: [],
    }

    for (let i = 0; i < 10; i++) {
        dummyEventList.EVENT_LIST.push({
            EVENT_DATE: '2023. 08. 23.',
            EVENT_DESCRIPTION: `This is Test Event ${i}`,
            EVENT_ID: `${i}`,
            EVENT_THUMBNAIL: 'https://cdn.pixabay.com/photo/2023/08/11/18/35/flowers-8184126_1280.jpg',
            EVENT_TITLE: `Event ${i}`,
            EVENT_TYPE: 'Association',
        })
    }

    const apiResult: API_RESPONSE<API_EVENT_LIST> = {
        RESULT_CODE: 200,
        RESULT_MSG: 'Success',
        RESULT_DATA: dummyEventList,
    }

    return NextResponse.json(apiResult, { status: 200 })
}
