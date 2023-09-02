interface NotionErrorOption {
    label?: string
    queryId: string
    error: unknown
    type: 'DB' | 'BLOCK' | 'PAGE'
}
class NotionError extends Error {
    public label?: string

    public constructor(message: string, { label, queryId, error, type }: NotionErrorOption) {
        super(message, {
            cause: [
                {
                    code: 'NOTION_QUERY_ID',
                    value: `${type} ${queryId}`,
                },
                {
                    code: 'NOTION_API_ERROR',
                    value: typeof error === 'string' ? error : error instanceof Error ? error : JSON.stringify(error),
                },
            ],
        })
        this.label = label
    }
}

type NotionDbErrorOption = Omit<NotionErrorOption, 'type' | 'label'>
export class NotionDbError extends NotionError {
    public constructor(message: string, option: NotionDbErrorOption) {
        super(message, {
            ...option,
            type: 'DB',
            label: 'Notion DB Error Occurred',
        })
    }
}

type NotionBlockErrorOption = Omit<NotionErrorOption, 'type' | 'label'>
export class NotionBlockError extends NotionError {
    public constructor(message: string, option: NotionBlockErrorOption) {
        super(message, {
            ...option,
            type: 'BLOCK',
            label: 'Notion Block parsing Error Occurred',
        })
    }
}

type NotionPageErrorOption = Omit<NotionErrorOption, 'type' | 'label'>

export class NotionPageError extends NotionError {
    public constructor(message: string, option: NotionPageErrorOption) {
        super(message, {
            ...option,
            type: 'PAGE',
            label: 'Notion Page Error Occurred',
        })
    }
}
