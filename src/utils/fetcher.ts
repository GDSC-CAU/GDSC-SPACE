/* eslint-disable no-console */

export interface FetcherConstructorOption {
    baseUrl: string
}
export class Fetcher {
    private readonly baseUrl: string
    public static fetchPrefix = 'api' as const

    public constructor({ baseUrl }: FetcherConstructorOption) {
        if (process.env.NODE_ENV && process.env.NODE_ENV === 'production' && process.env.PUB_URL) {
            this.baseUrl = process.env.PUB_URL
        } else {
            this.baseUrl = baseUrl
        }
    }

    public async get<APISchema>(
        requestPath: RequestInfo | URL,
        option?: Omit<RequestInit, 'method'>
    ): Promise<APISchema> {
        try {
            const response = await fetch(`${this.baseUrl}/${Fetcher.fetchPrefix}/${requestPath}`, {
                ...option,
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            const json = (await response.json()) as APISchema
            return json
        } catch (e: unknown) {
            console.error(e)
            throw new Error(typeof e === 'string' ? e : e instanceof Error ? e.message : JSON.stringify(e))
        }
    }
}
