'use Client'
import { useState } from 'react'
import { BLOG_META } from '~/src/interfaces'
import { Category } from './Category'
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

export const ProjectView = () => {
    const [tag, setTag] = useState<'All' | 'Web' | 'App'>('All')
    return (
        <div className="flex min-w-[50%] flex-col items-center justify-center gap-12">
            <div className="flex flex-row items-center justify-center gap-10">
                <Category isActive={tag === 'All'} onClick={() => setTag('All')}>
                    All
                </Category>
                <Category isActive={tag === 'Web'} onClick={() => setTag('Web')}>
                    Web
                </Category>
                <Category isActive={tag === 'App'} onClick={() => setTag('App')}>
                    App
                </Category>
            </div>
            <div className="grid grid-cols-3 items-center justify-evenly gap-x-2 gap-y-8">
                {bulkData.map((article) => (
                    <DesignProjectCard type="project" article={article} key={article.BLOG_ID} />
                ))}
            </div>
        </div>
    )
}
