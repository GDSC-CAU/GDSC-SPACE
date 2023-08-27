import * as process from 'process'
import { Client } from '@notionhq/client'
import { API_MEMBER_LIST, MEMBER_DATA, MemberDBRow } from '~/src/interfaces'

const NOTION_API_KEY = process.env.NEXT_PUBLIC_NOTION_API_KEY
const NOTION_MEMBER_DB_ID = '922775f782b44af08eb93be1693edb64'

const notionClient = new Client({ auth: NOTION_API_KEY })

export const getMemberDB = async () => {
    const pageDBQuery = await notionClient.databases.query({
        database_id: NOTION_MEMBER_DB_ID,
    })

    const MemberList: API_MEMBER_LIST = {
        MEMBER_CNT: 0,
        MEMBER_LIST: [],
    }

    const dbPageIdList = pageDBQuery.results.map((result) => result.id)
    MemberList.MEMBER_LIST = await Promise.all(
        dbPageIdList.map(async (id) => {
            MemberList.MEMBER_CNT++
            const memberDBRow = (await notionClient.pages.retrieve({
                page_id: id,
            })) as unknown as MemberDBRow

            const MemberItem: MEMBER_DATA = {
                MEMBER_COMMENT: '안녕하세요, GDSC 3기 리드 유용민입니다. 잘 부탁드립니다:)',
                MEMBER_EMAIL: 'yymin1022@gmail.com',
                MEMBER_GENDER: 'Male',
                MEMBER_INSTAGRAM: 'instagram',
                MEMBER_IMAGE: '',
                MEMBER_LINK_BEHANCE: '',
                MEMBER_LINK_GITHUB: 'github.com/yymin1022',
                MEMBER_NAME: memberDBRow.properties.Name.title[0].text.content,
                MEMBER_NICKNAME: 'DEV.LR',
                MEMBER_POSITION: 'Cloud Server / flutter',
                MEMBER_ROLE: 'Lead',
                MEMBER_YEAR: `${memberDBRow.properties.Year.rich_text[0].text.content}기` as MEMBER_DATA['MEMBER_YEAR'],
            }

            return MemberItem
        })
    )

    return MemberList
}
