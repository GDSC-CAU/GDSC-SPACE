import { BLOG_POST_META } from '~/src/interfaces'

export const DevelopCard = ({ article }: { article: BLOG_POST_META }) => {
    return (
        <div className="flex w-full flex-col gap-y-1 rounded-2xl border border-black bg-black p-6 transition-colors duration-300 hover:border-primary-blue md:gap-y-2 md:px-9 md:py-8">
            <div className="flex flex-row items-center justify-between">
                <ul className="flex flex-row gap-2 text-sm font-light">
                    {article.BLOG_TAGS.map((tag) => (
                        <li key={tag}>#{tag}</li>
                    ))}
                </ul>
                <p className="text-sm font-light">{article.BLOG_UPDATED_AT}</p>
            </div>

            <div className="flex flex-row items-center gap-5">
                <h1 className="text-base font-semibold text-white">{article.BLOG_TITLE}</h1>
                <h2 className="text-sm font-light">by {article.BLOG_AUTHOR}</h2>
            </div>

            <p className="text-sm font-light">{article.BLOG_DESCRIPTION}</p>
        </div>
    )
}
