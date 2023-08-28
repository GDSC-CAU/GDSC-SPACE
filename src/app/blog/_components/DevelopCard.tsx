import { BLOG_META } from '~/src/interfaces'

export const DevelopCard = ({ article }: { article: BLOG_META }) => {
    return (
        <div className="flex w-full flex-col gap-y-1 rounded-2xl border border-black bg-black p-6 text-white transition-colors duration-300 hover:border-primary-blue md:gap-y-2 md:p-10">
            <div className="flex flex-row items-center justify-between">
                <div className="flex flex-row gap-3 text-sm">
                    {article.BLOG_TAG.map((tag) => (
                        <div key={tag}> {tag} </div>
                    ))}
                </div>
                <div>{article.BLOG_DATE}</div>
            </div>
            <div className="flex flex-row items-center gap-5">
                <div className="text-base font-semibold">{article.BLOG_TITLE}</div>
                <div className="text-sm">by {article.BLOG_AUTHOR}</div>
            </div>
            <div className="text-sm">{article.BLOG_DESCRIPTION}</div>
        </div>
    )
}
