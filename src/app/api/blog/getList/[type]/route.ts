import { NextRequest, NextResponse } from 'next/server'
import { API_BLOG_LIST, API_RESPONSE } from '~/src/interfaces/common'

export async function GET(request: NextRequest, { params }: { params: { type: string } }) {
    if (params.type !== 'Design' && params.type !== 'Development' && params.type !== 'Project') {
        const apiResultError: API_RESPONSE = {
            RESULT_CODE: 100,
            RESULT_MSG: 'Blog Type Error',
            RESULT_DATA: undefined,
        }

        return NextResponse.json(apiResultError, { status: 200 })
    }

    const dummyBlogList: API_BLOG_LIST = {
        BLOG_CNT: 10,
        BLOG_LIST: [],
    }

    for (let i = 0; i < 10; i++) {
        dummyBlogList.BLOG_LIST.push({
            BLOG_AUTHOR: 'Dev. LR',
            BLOG_DATE: '2023. 08. 23.',
            BLOG_DESCRIPTION: `This is Test Posting of ${params.type}`,
            BLOG_ID: `${i}`,
            BLOG_TAG: ['Application', 'Flutter'],
            BLOG_THUMBNAIL: 'https://cdn.pixabay.com/photo/2023/08/11/18/35/flowers-8184126_1280.jpg',
            BLOG_TITLE: `${params.type} ${i}`,
        })
    }

    const apiResultSuccess: API_RESPONSE = {
        RESULT_CODE: 200,
        RESULT_MSG: 'Success',
        RESULT_DATA: dummyBlogList,
    }

    return NextResponse.json(apiResultSuccess, { status: 200 })
}
