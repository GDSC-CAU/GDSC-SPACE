import { NextRequest, NextResponse } from 'next/server'
import { API_MAIN_MEMBERS, API_MEMBER_LIST, API_RESPONSE, MEMBER_DATA } from '~/src/interfaces/common'

export async function GET(request: NextRequest, { params }: { params: { year: string } }) {
    const dummyMemberData: MEMBER_DATA = {
        MEMBER_COMMENT: '안녕하세요, GDSC 3기 리드 유용민입니다. 잘 부탁드립니다:)',
        MEMBER_EMAIL: 'yymin1022@gmail.com',
        MEMBER_GENDER: 'Male',
        MEMBER_INSTAGRAM: 'instagram',
        MEMBER_IMAGE: '',
        MEMBER_LINK_BEHANCE: '',
        MEMBER_LINK_GITHUB: 'github.com/yymin1022',
        MEMBER_NAME: `유용민`,
        MEMBER_NICKNAME: 'DEV.LR',
        MEMBER_POSITION: 'Cloud Server / flutter',
        MEMBER_ROLE: 'Lead',
        MEMBER_YEAR: `${params.year}기` as MEMBER_DATA['MEMBER_YEAR'],
    }

    const dummyMemberList: API_MEMBER_LIST = {
        MEMBER_CNT: 25,
        MEMBER_LIST: [],
    }

    for (let i = 0; i < 4; i++) {
        dummyMemberList.MEMBER_LIST.push(dummyMemberData)
    }

    const apiResult: API_RESPONSE = {
        RESULT_CODE: 200,
        RESULT_MSG: 'Success',
        RESULT_DATA: dummyMemberList,
    }

    return NextResponse.json(apiResult, { status: 200 })
}
