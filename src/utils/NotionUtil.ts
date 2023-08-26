import * as process from 'process'
import { Client } from '@notionhq/client'

const NOTION_API_KEY = process.env.NEXT_PUBLIC_NOTION_API_KEY
const MEMBER_DB_ID = process.env.NEXT_PUBLIC_NOTION_MEMBER_DB

const notionClient = new Client({ auth: NOTION_API_KEY })

export const getDatabase = async () => {
    const notionData = await notionClient.databases.query({
        database_id: MEMBER_DB_ID!,
    })
    return notionData.results
}
