import { NextRequest, NextResponse } from 'next/server'
import { API_MAIN_TIMELINES, API_RESPONSE, MAIN_TIMELINE_DATA } from '~/interfaces/Common'
import { getMainTimelineDB } from '~/utils/NotionUtil'

export async function GET(_: NextRequest) {
    const apiResult: API_RESPONSE<API_MAIN_TIMELINES> = {
        RESULT_CODE: 200,
        RESULT_MSG: 'Success',
        RESULT_DATA: await getMainTimelineDB(),
    }

    return NextResponse.json(apiResult, { status: 200 })
}
