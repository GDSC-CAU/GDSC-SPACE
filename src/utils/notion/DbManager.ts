/* eslint-disable @typescript-eslint/no-explicit-any */
import type * as notion from '@notionhq/client'
import { Arguments } from '../types'
import { NotionDbError } from './NotionError'

interface NotionDBManagerConstructor {
    notionClient: notion.Client
}
export class NotionDbManager {
    private $notion: notion.Client

    public constructor({ notionClient }: NotionDBManagerConstructor) {
        this.$notion = notionClient
    }

    public async queryDatabase(
        dbId: string,
        options?: Omit<Arguments<notion.Client['databases']['query']>[0], 'database_id'>
    ): Promise<Awaited<ReturnType<notion.Client['databases']['query']>>['results']> {
        try {
            const queriedResponse = await this.$notion.databases.query({
                ...options,
                database_id: dbId,
            })

            return queriedResponse.results
        } catch (error) {
            throw new NotionDbError("Can't query database.", {
                error,
                queryId: dbId,
            })
        }
    }

    public async retrieveDatabase(dbId: string): Promise<ReturnType<notion.Client['databases']['retrieve']>> {
        try {
            const retrievedResponse = await this.$notion.databases.retrieve({
                database_id: dbId,
            })

            return retrievedResponse
        } catch (error) {
            throw new NotionDbError("Can't retrieve database.", {
                error,
                queryId: dbId,
            })
        }
    }
}
