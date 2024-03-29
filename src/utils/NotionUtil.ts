import * as process from 'process'
import { Client } from '@notionhq/client'
import {
    API_MAIN_PROJECTS,
    API_MAIN_TIMELINES,
    API_MEMBER_LIST,
    MAIN_PROJECT_DATA,
    MAIN_TIMELINE_DATA,
    MEMBER_DATA,
    NotionDBRow,
    NotionImageData,
    NotionTableRowData,
} from '~/src/interfaces'

const NOTION_API_KEY = process.env.NEXT_PUBLIC_NOTION_API_KEY
const NOTION_MAIN_TIMELINE_DB_ID = '38dc092380834d388f24aba5e7a14774'
const NOTION_MAIN_PROJECT_DB_ID = '71f02139507444369e3d7a9ba3186de9'
const NOTION_MEMBER_DB_ID = '922775f782b44af08eb93be1693edb64'

const notionClient = new Client({ auth: NOTION_API_KEY })

const getDBPageIdList = async (NOTION_DB_ID: string) => {
    const pageDBQuery = await notionClient.databases.query({
        database_id: NOTION_DB_ID,
    })

    return pageDBQuery.results.map((result) => result.id)
}

export const getMemberDB = async () => {
    const MemberList: API_MEMBER_LIST = {
        MEMBER_CNT: 0,
        MEMBER_LIST: [],
    }

    const dbPageIdList = await getDBPageIdList(NOTION_MEMBER_DB_ID)
    MemberList.MEMBER_LIST = await Promise.all(
        dbPageIdList.map(async (id) => {
            MemberList.MEMBER_CNT++
            const memberDBRow = (await notionClient.pages.retrieve({
                page_id: id,
            })) as unknown as NotionDBRow
            const memberTableData = await notionClient.blocks.children.list({
                block_id: id,
            })
            const memberImageData = (await notionClient.blocks.retrieve({
                block_id: memberTableData.results[1].id,
            })) as unknown as NotionImageData

            const MemberItem: MEMBER_DATA = {
                MEMBER_COMMENT: '',
                MEMBER_EMAIL: '',
                MEMBER_GENDER: 'Male',
                MEMBER_INSTAGRAM: '',
                MEMBER_IMAGE: 'https://cdn.pixabay.com/photo/2023/08/13/00/43/blue-8186653_1280.jpg',
                MEMBER_LINK_BEHANCE: '',
                MEMBER_LINK_GITHUB: '',
                MEMBER_NAME: memberDBRow.properties.Name.title[0].text.content,
                MEMBER_NICKNAME: '',
                MEMBER_POSITION: '',
                MEMBER_ROLE: 'Member',
                MEMBER_YEAR: `${memberDBRow.properties.Year.rich_text[0].text.content}기` as MEMBER_DATA['MEMBER_YEAR'],
            }

            const memberTableRowData = (await notionClient.blocks.children.list({
                block_id: memberTableData.results[0].id,
            })) as unknown as NotionTableRowData

            memberTableRowData.results.forEach((rowData) => {
                switch (rowData.table_row.cells[0][0].plain_text) {
                    case 'Comment':
                        MemberItem.MEMBER_COMMENT = rowData.table_row.cells[1][0].plain_text
                        break
                    case 'Email':
                        MemberItem.MEMBER_EMAIL = rowData.table_row.cells[1][0].plain_text
                        break
                    case 'Gender':
                        MemberItem.MEMBER_GENDER = rowData.table_row.cells[1][0]
                            .plain_text as MEMBER_DATA['MEMBER_GENDER']
                        break
                    case 'Instagram':
                        MemberItem.MEMBER_INSTAGRAM = rowData.table_row.cells[1][0].plain_text
                        break
                    case 'Behance':
                        MemberItem.MEMBER_LINK_BEHANCE = rowData.table_row.cells[1][0].plain_text
                        break
                    case 'GitHub':
                        MemberItem.MEMBER_LINK_GITHUB = rowData.table_row.cells[1][0].plain_text
                        break
                    case 'Nickname':
                        MemberItem.MEMBER_NICKNAME = rowData.table_row.cells[1][0].plain_text
                        break
                    case 'Position':
                        MemberItem.MEMBER_POSITION = rowData.table_row.cells[1][0].plain_text
                        break
                    case 'Role':
                        MemberItem.MEMBER_ROLE = rowData.table_row.cells[1][0].plain_text as MEMBER_DATA['MEMBER_ROLE']
                        break
                }
            })

            return MemberItem
        })
    )

    return MemberList
}

export const getMainProjectDB = async () => {
    const ProjectList: API_MAIN_PROJECTS = {
        MAIN_PROJECT_CNT: 0,
        MAIN_PROJECT_LIST: [],
    }

    const dbPageIdList = await getDBPageIdList(NOTION_MAIN_PROJECT_DB_ID)
    ProjectList.MAIN_PROJECT_LIST = await Promise.all(
        dbPageIdList.map(async (id) => {
            ProjectList.MAIN_PROJECT_CNT++
            const projectDBRow = (await notionClient.pages.retrieve({
                page_id: id,
            })) as unknown as NotionDBRow
            const projectTableData = await notionClient.blocks.children.list({
                block_id: id,
            })

            const ProjectItem: MAIN_PROJECT_DATA = {
                PROJECT_DESCRIPTION: '',
                PROJECT_ID: projectDBRow.properties.ID.rich_text[0].text.content,
                PROJECT_IMAGE: 'https://cdn.pixabay.com/photo/2023/08/13/00/43/blue-8186653_1280.jpg',
                PROJECT_IMAGE_SUB: 'https://cdn.pixabay.com/photo/2023/08/13/00/43/blue-8186653_1280.jpg',
                PROJECT_SUBTITLE: '',
                PROJECT_TITLE: projectDBRow.properties.Title.title[0].text.content,
            }

            const projectTableRowData = (await notionClient.blocks.children.list({
                block_id: projectTableData.results[0].id,
            })) as unknown as NotionTableRowData

            projectTableRowData.results.forEach((rowData) => {
                switch (rowData.table_row.cells[0][0].plain_text) {
                    case 'Subtitle':
                        ProjectItem.PROJECT_SUBTITLE = rowData.table_row.cells[1][0].plain_text
                        break
                    case 'Description':
                        ProjectItem.PROJECT_DESCRIPTION = rowData.table_row.cells[1][0].plain_text
                        break
                }
            })

            return ProjectItem
        })
    )

    return ProjectList
}

export const getMainTimelineDB = async () => {
    const TimelineList: API_MAIN_TIMELINES = {
        MAIN_TIMELINE_CNT: 0,
        MAIN_TIMELINE_LIST: [],
    }

    const dbPageIdList = await getDBPageIdList(NOTION_MAIN_TIMELINE_DB_ID)
    TimelineList.MAIN_TIMELINE_LIST = await Promise.all(
        dbPageIdList.map(async (id) => {
            TimelineList.MAIN_TIMELINE_CNT++
            const timelineDBRow = (await notionClient.pages.retrieve({
                page_id: id,
            })) as unknown as NotionDBRow
            const timelineTableData = await notionClient.blocks.children.list({
                block_id: id,
            })

            const TimelineItem: MAIN_TIMELINE_DATA = {
                TIMELINE_CARD_TITLE: timelineDBRow.properties.Title?.title[0].text.content,
                TIMELINE_DATE: '',
                TIMELINE_DESCRIPTION: '',
                TIMELINE_TITLE: '',
            }

            const timelineTableRowData = (await notionClient.blocks.children.list({
                block_id: timelineTableData.results[0].id,
            })) as unknown as NotionTableRowData

            timelineTableRowData.results.forEach((rowData) => {
                switch (rowData.table_row.cells[0][0].plain_text) {
                    case 'Title':
                        TimelineItem.TIMELINE_TITLE = rowData.table_row.cells[1][0].plain_text
                        break
                    case 'Date':
                        TimelineItem.TIMELINE_DATE = rowData.table_row.cells[1][0].plain_text
                        break
                    case 'Description':
                        TimelineItem.TIMELINE_DESCRIPTION = rowData.table_row.cells[1][0].plain_text
                        break
                }
            })

            return TimelineItem
        })
    )

    return TimelineList
}
