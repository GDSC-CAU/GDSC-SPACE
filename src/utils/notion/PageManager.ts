/* eslint-disable @typescript-eslint/no-explicit-any */
import type * as notion from '@notionhq/client'
import { NotionPageError } from './NotionError'

interface NotionPageManagerConstructor {
    notionClient: notion.Client
}
export class NotionPageManager {
    private $notion: notion.Client

    public constructor({ notionClient }: NotionPageManagerConstructor) {
        this.$notion = notionClient
    }

    public async retrievePage(pageId: string): Promise<ReturnType<notion.Client['pages']['retrieve']>> {
        try {
            const pageData = await this.$notion.pages.retrieve({ page_id: pageId })
            return pageData
        } catch (error) {
            throw new NotionPageError('Can not retrieve page', {
                queryId: pageId,
                error,
            })
        }
    }
}
