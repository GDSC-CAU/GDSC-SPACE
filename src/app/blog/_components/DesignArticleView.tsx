import { BLOG_META } from '~/src/interfaces'
import { DesignProjectCard } from './DesignProjectCard'

const generateBulkData = (count: number): Array<BLOG_META> =>
    Array.from(
        {
            length: count,
        },
        (_, i) => ({
            BLOG_AUTHOR: 'author',
            BLOG_DATE: 'date',
            BLOG_DESCRIPTION: 'description',
            BLOG_ID: String(i),
            BLOG_TAG: ['#abc', '#def'],
            BLOG_THUMBNAIL: '/events/cardtest.png',
            BLOG_TITLE: 'title',
        })
    )

const bulkData = generateBulkData(50)

export const DesignArticleView = () => {
    return (
        <div className="flex min-w-[50%] flex-col items-center justify-center">
            <div>
                <button>Graphic</button>
                <button>UI/UX</button>
                <button>Product</button>
                <button>Reference</button>
            </div>
            <div className="grid grid-cols-3 items-center justify-evenly gap-x-2 gap-y-8">
                {bulkData.map((article) => (
                    <DesignProjectCard article={article} key={article.BLOG_ID} />
                ))}
            </div>
        </div>
    )
}
