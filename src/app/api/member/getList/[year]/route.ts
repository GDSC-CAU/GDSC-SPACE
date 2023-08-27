import { NextRequest, NextResponse } from 'next/server'
import { API_MEMBER_LIST, API_RESPONSE, MEMBER_DATA, MEMBER_PAGE_PARAMS } from '~/src/interfaces'
import { getMemberDB } from '~/utils/NotionUtil'

export async function GET(_: NextRequest, { params }: MEMBER_PAGE_PARAMS) {
    const apiResult: API_RESPONSE<API_MEMBER_LIST> = {
        RESULT_CODE: 200,
        RESULT_MSG: 'Success',
        RESULT_DATA: await getMemberDB(),
    }

    return NextResponse.json(apiResult, { status: 200 })
}
