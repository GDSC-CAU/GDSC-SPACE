type NextPageParams<Params extends Record<string, unknown>> = { params: Params }

export type MEMBER_PAGE_PARAMS = NextPageParams<{ year: string }>

export type EVENT_PAGE_PARAMS = NextPageParams<{ id: string }>

export type BLOG_TYPE_PARAMS = NextPageParams<{ type: string }>
export type BLOG_POST_PARAMS = NextPageParams<{ type: string; id: string }>
