import { NextRequest, NextResponse } from 'next/server'
import { API_EVENT_LIST, API_RESPONSE } from '~/src/interfaces/Common'

export async function GET(_: NextRequest) {
    const apiResult: API_RESPONSE<API_EVENT_LIST> = {
        RESULT_CODE: 200,
        RESULT_MSG: 'Success',
        RESULT_DATA: await getEventListDB(),
    }

    return NextResponse.json(apiResult, { status: 200 })
}
