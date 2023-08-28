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
        <div className="flex w-full min-w-[50%] flex-col items-center justify-center gap-12">
            <div className="hidden md:flex md:flex-row md:items-center md:justify-center md:gap-10">
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
            <div className="flex w-full flex-col items-center justify-evenly gap-x-2 gap-y-4 md:grid md:w-fit md:grid-cols-3 md:gap-y-8">
                {bulkData.map((article) => (
                    <DesignProjectCard type="project" article={article} key={article.BLOG_ID} />
                ))}
            </div>
        </div>
    )
}
