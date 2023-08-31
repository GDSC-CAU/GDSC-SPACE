/* eslint-disable @typescript-eslint/no-explicit-any */
import type * as notion from '@notionhq/client'
import { NotionBlockError } from './NotionError'

interface NotionBLOCKManagerConstructor {
    notionClient: notion.Client
}
export class NotionBlockManager {
    private $notion: notion.Client

    public constructor({ notionClient }: NotionBLOCKManagerConstructor) {
        this.$notion = notionClient
    }

    public async retrieveBlock(blockId: string): Promise<ReturnType<notion.Client['blocks']['children']['list']>> {
        const PAGE_SIZE = 100

        try {
            const blockData = await this.$notion.blocks.children.list({ block_id: blockId, page_size: PAGE_SIZE })
            return blockData
        } catch (error) {
            throw new NotionBlockError('Can not retrieve block', {
                queryId: blockId,
                error,
            })
        }
    }
}
