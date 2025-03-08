'use client'

import { Link$, Tag } from '~/src/components/common'
import type { API_BLOG_LIST, BLOG_POST_META } from '~/src/interfaces'
import { blogRoutingData, type BlogRoutingType, type BlogTag } from '../_data/blogRouteData'
import { BlogCategory } from './BlogCategory'
import { BlogModalView } from './blogModal'
import { BlogTagProvider, useBlogTag } from './BlogTagProvider'
import { DevelopCard } from './card'
import { DesignProjectCard } from './card/DesignProjectCard'

const BlogDesktopTags = ({
    tag,
    type,
    onClick,
}: {
    tag: BlogTag
    type: BlogRoutingType
    onClick: (targetTag: BlogTag) => void
}) => {
    return (
        <div className="hidden max-w-3xl overflow-x-scroll scrollbar-hide md:flex md:w-full md:flex-row md:items-center md:justify-center md:gap-12">
            {blogRoutingData.map((route) => {
                if (route.type !== type) return null

                return route.tags.map((tagData) => (
                    <BlogCategory key={tagData} isActive={tagData === tag} onClick={() => onClick(tagData)}>
                        {tagData}
                    </BlogCategory>
                ))
            })}
        </div>
    )
}

const getFilteredArticle = (allArticles: API_BLOG_LIST['BLOG_LIST'], tag: BlogTag) => {
    const filteredArticle =
        tag === 'All' ? allArticles : allArticles.filter((article) => article.BLOG_TAGS.includes(tag))
    return filteredArticle
}

const getSortedArticleByDate = (filteredArticles: API_BLOG_LIST['BLOG_LIST']) => {
    const sortedArticle = filteredArticles.sort(
        (a: BLOG_POST_META, b: BLOG_POST_META) => +new Date(b.BLOG_UPDATED_AT) - +new Date(a.BLOG_UPDATED_AT)
    )
    return sortedArticle
}

const BlogArticleView = ({ BLOG_LIST, type }: BlogArticleViewProps) => {
    const { tag, setTag } = useBlogTag()
    const filteredArticle = getFilteredArticle(BLOG_LIST, tag)
    const sortedArticle = getSortedArticleByDate(filteredArticle)
    const isDevelopmentArticle = type === 'Development'

    if (filteredArticle.length === 0) {
        return <p className="pt-20 text-center text-base md:pl-14 md:text-lg">작성된 블로그가 없습니다.</p>
    }

    if (isDevelopmentArticle) {
        return (
            <>
                <BlogDesktopTags
                    tag={tag}
                    type={type}
                    onClick={(targetTag) => {
                        setTag(targetTag)
                    }}
                />
                <div className="flex w-full flex-col items-center justify-evenly gap-y-4 md:gap-y-7">
                    {sortedArticle.map((article) => {
                        return (
                            <Link$
                                href={`/blog/Development/${article.BLOG_PAGE_ID}`}
                                key={article.BLOG_PAGE_ID}
                                className="w-full"
                            >
                                <DevelopCard article={article} key={article.BLOG_PAGE_ID} />
                            </Link$>
                        )
                    })}
                </div>
            </>
        )
    }

    return (
        <div
            className="grid w-fit grid-cols-1 gap-4 sm:grid-cols-2 
        wide:grid-cols-3"
        >
            {filteredArticle.map((article) => (
                <DesignProjectCard type={type} article={article} key={article.BLOG_PAGE_ID} />
            ))}
        </div>
    )
}

const BlogDesktopTypes = ({ type }: { type: BlogRoutingType }) => (
    <section className="mx-6 my-8 hidden w-full flex-row items-center justify-center gap-4 md:flex lg:gap-10">
        {blogRoutingData.map((route) => (
            <Link$ href={route.url} key={route.url}>
                <Tag isActive={type === route.type}>{route.type}</Tag>
            </Link$>
        ))}
    </section>
)

const BlogMobileTypeAndTags = ({ type }: { type: BlogRoutingType }) => {
    return (
        <section className="mt-7 flex flex-row gap-4 md:hidden">
            <BlogModalView type={type} />
        </section>
    )
}

interface BlogArticleViewProps extends API_BLOG_LIST {
    type: BlogRoutingType
}
export const BlogView = (props: BlogArticleViewProps) => (
    <BlogTagProvider>
        <BlogDesktopTypes type={props.type} />
        <BlogMobileTypeAndTags type={props.type} />

        <section className="flex w-full min-w-[50%] flex-col items-center justify-center gap-12">
            <BlogArticleView {...props} />
        </section>
    </BlogTagProvider>
)
