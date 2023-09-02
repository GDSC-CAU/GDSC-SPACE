import { Client } from '@notionhq/client'
import { NotionAPI } from 'notion-client'
import { NotionBlockManager } from './BlockManager'
import { NotionBlogPost } from './BlogPost'
import { NotionDbManager } from './DbManager'
import { NotionPageManager } from './PageManager'

const notionClient = new Client({
    auth: process.env.NOTION_API_KEY,
})

export const blogApi = new NotionBlogPost({
    notionDbManager: new NotionDbManager({
        notionClient,
    }),
    notionBlockManager: new NotionBlockManager({
        notionClient,
    }),
    notionPageManager: new NotionPageManager({
        notionClient,
    }),
    notionXClient: new NotionAPI(),
})
