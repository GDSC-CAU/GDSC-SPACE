import { ThumbnailCard } from '~/src/components/common'
import { BLOG_META } from '~/src/interfaces'

export const DesignProjectCard = ({ type, article }: { type: string; article: BLOG_META }) => {
    return (
        <ThumbnailCard
            twClass="animate-rise duration-500"
            meta={article}
            href={`/blog/${type}/${article.BLOG_ID}`}
            transformer={(article) => ({
                date: article.BLOG_DATE,
                description: article.BLOG_DESCRIPTION,
                imageSrc: article.BLOG_THUMBNAIL,
                title: article.BLOG_TITLE,
                cardType: article.BLOG_AUTHOR,
            })}
        />
    )
}