export interface Event {
    id: string
    category: string
    date: string
    title: string
    content: string
    image: string
}

export interface Member {
    name: string
    gender: 'Male' | 'Female'
    nickname?: string
    role: 'Lead' | 'Core' | 'Member'
    imageSrc?: string
    year: '1기' | '2기' | '3기'
    position: string
    introduction: string
    github?: string
    email?: string
    instagram?: string
}

export interface API_RESPONSE {
    RESULT_CODE: number
    RESULT_MSG: string
    RESULT_DATA:
        | API_BLOG_DETAIL
        | API_BLOG_LIST
        | API_EVENT_DETAIL
        | API_EVENT_LIST
        | API_MAIN_PROJECTS
        | API_MAIN_TIMELINES
        | API_MEMBER_LIST
}

export interface API_BLOG_DETAIL {
    BLOG_AUTHOR: string
    BLOG_CONTENT: Array<BLOG_CONTENT_ITEM>
    BLOG_DATE: string
    BLOG_TAG: Array<string>
    BLOG_TITLE: string
}

export interface BLOG_CONTENT_ITEM {
    CONTENT_TYPE: 'codeblock' | 'h1' | 'h2' | 'h3' | 'image' | 'text'
    CONTENT_DATA: string
}
