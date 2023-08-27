import { NextRequest, NextResponse } from 'next/server'
import { API_MAIN_TIMELINES, API_RESPONSE, MAIN_TIMELINE_DATA } from '~/src/interfaces/common'

export async function GET(request: NextRequest) {
    const dummyTimelineData: MAIN_TIMELINE_DATA = {
        TIMELINE_CARD_TITLE: 'TIMELINE CARD TITLE',
        TIMELINE_DATE: '2023. 8.',
        TIMELINE_DESCRIPTION: 'This is Test Timeline Item!',
        TIMELINE_TITLE: 'TEST TIMELINE TITLE',
    }

    const dummyTimelineList: API_MAIN_TIMELINES = {
        MAIN_TIMELINE_CNT: 6,
        MAIN_TIMELINE_LIST: [],
    }

    for (let i = 0; i < 6; i++) {
        dummyTimelineList.MAIN_TIMELINE_LIST.push(dummyTimelineData)
    }

    const apiResult: API_RESPONSE<API_MAIN_TIMELINES> = {
        RESULT_CODE: 200,
        RESULT_MSG: 'Success',
        RESULT_DATA: dummyTimelineList,
    }

    return NextResponse.json(apiResult, { status: 200 })
}
