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
        | undefined
}

export interface API_BLOG_DETAIL {
    BLOG_AUTHOR: string
    BLOG_CONTENT: Array<BLOG_CONTENT_ITEM>
    BLOG_DATE: string
    BLOG_ID: string
    BLOG_TAG: Array<string>
    BLOG_TITLE: string
}

export interface BLOG_CONTENT_ITEM {
    CONTENT_TYPE: 'codeblock' | 'h1' | 'h2' | 'h3' | 'image' | 'text'
    CONTENT_DATA: string
}

export interface API_BLOG_LIST {
    BLOG_CNT: number
    BLOG_LIST: Array<BLOG_META>
}

export interface BLOG_META {
    BLOG_AUTHOR: string
    BLOG_DATE: string
    BLOG_DESCRIPTION: string
    BLOG_ID: string
    BLOG_TAG: Array<string>
    BLOG_THUMBNAIL: string
    BLOG_TITLE: string
}

export interface API_EVENT_DETAIL {
    EVENT_BANNER: string
    EVENT_CONTENT: Array<EVENT_CONTENT_ITEM>
    EVENT_DATE: string
    EVENT_ID: string
    EVENT_LINK: string
    EVENT_TITLE: string
}

export interface EVENT_CONTENT_ITEM {
    CONTENT_TYPE: 'codeblock' | 'h1' | 'h2' | 'h3' | 'image' | 'text'
    CONTENT_DATA: string
}

export interface API_EVENT_LIST {
    EVENT_CNT: number
    EVENT_LIST: Array<EVENT_META>
}

export interface EVENT_META {
    EVENT_DATE: string
    EVENT_DESCRIPTION: string
    EVENT_ID: string
    EVENT_THUMBNAIL: string
    EVENT_TITLE: string
    EVENT_TYPE: string
}

export interface API_MAIN_PROJECTS {
    MAIN_PROJECT_CNT: number
    MAIN_PROJECT_LIST: Array<MAIN_PROJECT_DATA>
}

export interface MAIN_PROJECT_DATA {
    PROJECT_DESCRIPTION: string
    PROJECT_ID: string
    PROJECT_IMAGE: string
    PROJECT_IMAGE_SUB: string
    PROJECT_SUBTITLE: string
    PROJECT_TITLE: string
}

export interface API_MAIN_TIMELINES {
    MAIN_TIMELINE_CNT: number
    MAIN_TIMELINE_LIST: Array<MAIN_TIMELINE_DATA>
}

export interface MAIN_TIMELINE_DATA {
    TIMELINE_CARD_TITLE: string
    TIMELINE_DATE: string
    TIMELINE_DESCRIPTION: string
    TIMELINE_TITLE: string
}

export interface API_MEMBER_LIST {
    MEMBER_CNT: number
    MEMBER_LIST: Array<MEMBER_DATA>
}

export interface MEMBER_DATA {
    MEMBER_COMMENT: string
    MEMBER_EMAIL: string
    MEMBER_GENDER: 'Male' | 'Female'
    MEMBER_IMAGE: string
    MEMBER_INSTAGRAM: string
    MEMBER_LINK_BEHANCE: string
    MEMBER_LINK_GITHUB: string
    MEMBER_NAME: string
    MEMBER_NICKNAME: string
    MEMBER_POSITION: string
    MEMBER_ROLE: 'Lead' | 'Core' | 'Member'
    MEMBER_YEAR: '1기' | '2기' | '3기'
}
