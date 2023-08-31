import { NextRequest, NextResponse } from 'next/server'
import { API_MAIN_PROJECTS, API_RESPONSE, MAIN_PROJECT_DATA } from '~/src/interfaces/Common'
import { getMainProjectDB } from '~/utils/NotionUtil'

export async function GET(_: NextRequest) {
    const apiResult: API_RESPONSE<API_MAIN_PROJECTS> = {
        RESULT_CODE: 200,
        RESULT_MSG: 'Success',
        RESULT_DATA: await getMainProjectDB(),
    }

    return NextResponse.json(apiResult, { status: 200 })
}
