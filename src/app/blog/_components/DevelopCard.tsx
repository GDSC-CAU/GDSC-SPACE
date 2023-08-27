import { BLOG_META } from '~/src/interfaces'

export const DevelopCard = ({ article }: { article: BLOG_META }) => {
    return (
        <div className="flex w-full flex-col gap-y-2 rounded-2xl border border-black bg-black p-10 text-white transition-colors duration-300 hover:border-primary-blue">
            <div className="flex flex-row items-center justify-between">
                <div>{article.BLOG_TAG}</div>
                <div>{article.BLOG_DATE}</div>
            </div>
            <div className="flex flex-row items-center gap-5">
                <div className="text-xl font-semibold">{article.BLOG_TITLE}</div>
                <div>by {article.BLOG_AUTHOR}</div>
            </div>
            <div>{article.BLOG_DESCRIPTION}</div>
        </div>
    )
}
