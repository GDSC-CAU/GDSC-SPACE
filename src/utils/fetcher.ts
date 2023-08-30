/* eslint-disable no-console */

export interface FetcherConstructorOption {
    baseUrl: string
}
export class Fetcher {
    private baseUrl: string
    public static fetchPrefix = 'api' as const

    public constructor({ baseUrl }: FetcherConstructorOption) {
        this.baseUrl = baseUrl
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
