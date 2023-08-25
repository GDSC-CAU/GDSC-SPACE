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
            })
            const json = (await response.json()) as APISchema

            return json
        } catch (e: unknown) {
            throw new Error(typeof e === 'string' ? e : JSON.stringify(e))
        }
    }
}
