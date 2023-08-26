import * as process from 'process'
import { Client } from '@notionhq/client'

const NOTION_API_KEY = process.env.NEXT_PUBLIC_NOTION_API_KEY
const BUDGET_DB_ID = process.env.NEXT_PUBLIC_NOTION_MEMBER_DB

let notionClient: Client | undefined = undefined

export const initNotion = () => {
    if (notionClient !== undefined) {
        notionClient = new Client({ auth: NOTION_API_KEY })
    }
}
