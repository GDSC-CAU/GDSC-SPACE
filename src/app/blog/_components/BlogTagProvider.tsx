'use client'

import { createContext, useContext, useState } from 'react'
import { BlogTag } from '../_data/blogRouteData'

const BlogTagValueContext = createContext<BlogTag | null>(null)
const BlogTagActionContext = createContext<React.Dispatch<React.SetStateAction<BlogTag>> | null>(null)

export const BlogTagProvider = ({ children }: React.PropsWithChildren) => {
    const [tag, setTag] = useState<BlogTag>('All')

    return (
        <BlogTagValueContext.Provider value={tag}>
            <BlogTagActionContext.Provider value={setTag}>{children}</BlogTagActionContext.Provider>
        </BlogTagValueContext.Provider>
    )
}

export const useBlogTag = () => {
    const tag = useContext(BlogTagValueContext)
    const setTag = useContext(BlogTagActionContext)

    if (tag === null || setTag === null) {
        throw new Error('<BlogTagProvider> should be called inside of <BlogTagProvider>{children}</BlogTagProvider>')
    }

    return { tag, setTag }
}
