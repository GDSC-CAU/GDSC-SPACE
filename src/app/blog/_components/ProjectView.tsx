'use Client'
import { useState } from 'react'
import { BLOG_META } from '~/src/interfaces'
import { DesignProjectCard } from './DesignProjectCard'
import { Tag } from '~/src/components/common'

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
    const [tag, setTag] = useState<'Web' | 'App'>('Web')
    return (
        <div className="flex min-w-[50%] flex-col items-center justify-center gap-12">
            <div className="flex flex-row items-center justify-center gap-10">
                <Tag isActive={tag === 'Web'} onClick={() => setTag('Web')}>
                    Web
                </Tag>
                <Tag isActive={tag === 'App'} onClick={() => setTag('App')}>
                    App
                </Tag>
            </div>
            <div className="grid grid-cols-3 items-center justify-evenly gap-x-2 gap-y-8">
                {bulkData.map((article) => (
                    <DesignProjectCard article={article} key={article.BLOG_ID} />
                ))}
            </div>
        </div>
    )
}
