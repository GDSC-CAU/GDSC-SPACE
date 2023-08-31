import { Client } from '@notionhq/client'
import { NotionBlockManager } from './BlockManager'
import { NotionBlogPost } from './BlogPost'
import { NotionDbManager } from './DbManager'

const notionClient = new Client({
    auth: process.env.NOTION_API_KEY,
})

export const blogApi = new NotionBlogPost({
    notionDbManager: new NotionDbManager({
        notionClient,
    }),
    notionPageManager: new NotionBlockManager({
        notionClient,
    }),
})
