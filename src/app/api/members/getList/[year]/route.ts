import { NextRequest, NextResponse } from 'next/server'
import { API_MEMBER_LIST, API_RESPONSE, MEMBER_PAGE_PARAMS } from '~/src/interfaces'
import { getMemberDB } from '~/utils/FirebaseUtil'

export async function GET(_: NextRequest, { params }: MEMBER_PAGE_PARAMS) {
    const apiResult: API_RESPONSE<API_MEMBER_LIST> = {
        RESULT_CODE: 200,
        RESULT_MSG: 'Success',
        RESULT_DATA: await getMemberDB(params.year),
    }

    return NextResponse.json(apiResult, { status: 200 })
}
