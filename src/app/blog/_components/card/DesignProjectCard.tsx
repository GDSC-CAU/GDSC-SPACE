/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { ThumbnailCard } from '~/src/components/common'
import { BLOG_POST_META } from '~/src/interfaces'
import { BlogRoutingType } from '../../_data/blogRouteData'

export const DesignProjectCard = ({ type, article }: { type: BlogRoutingType; article: BLOG_POST_META }) => {
    return (
        <ThumbnailCard
            twClass="animate-rise duration-500"
            meta={article}
            href={`/blog/${type}/${article.BLOG_PAGE_ID}`}
            transformer={(article) => ({
                date: article.BLOG_UPDATED_AT,
                description: article.BLOG_DESCRIPTION,
                imageSrc: article.BLOG_THUMBNAIL!,
                title: article.BLOG_TITLE,
                cardType: article.BLOG_AUTHOR,
            })}
        />
    )
}
