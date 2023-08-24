import { NextRequest, NextResponse } from 'next/server'
import { API_MAIN_PROJECTS, API_RESPONSE, MAIN_PROJECT_DATA } from '~/src/interfaces/common'

export async function GET(request: NextRequest) {
    const dummyProjectData: MAIN_PROJECT_DATA = {
        PROJECT_DESCRIPTION:
            "This is a Solution for the people who don't know what actions could be taken toreduce green house effect.This is an education game. By playing this game, the players are informedwhat could be done in real world to decrease the green house effect andwhat contributes to the global warming and green house effect.",
        PROJECT_ID: 'PROJECT_ID',
        PROJECT_IMAGE: 'https://cdn.pixabay.com/photo/2023/08/11/18/35/flowers-8184126_1280.jpg',
        PROJECT_IMAGE_SUB: 'https://cdn.pixabay.com/photo/2023/08/05/15/15/waves-8171279_1280.jpg',
        PROJECT_SUBTITLE: ': No more Lonely Death',
        PROJECT_TITLE: 'Wiro',
    }

    const dummyProjectList: API_MAIN_PROJECTS = {
        MAIN_PROJECT_CNT: 4,
        MAIN_PROJECT_LIST: [],
    }

    for (let i = 0; i < 4; i++) {
        dummyProjectList.MAIN_PROJECT_LIST.push(dummyProjectData)
    }

    const apiResult: API_RESPONSE = {
        RESULT_CODE: 200,
        RESULT_MSG: 'Success',
        RESULT_DATA: dummyProjectList,
    }

    return NextResponse.json(apiResult, { status: 200 })
}
