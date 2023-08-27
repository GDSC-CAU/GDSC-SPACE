'use client'

import Link from 'next/link'
import { useState } from 'react'
import { BLOG_META } from '~/src/interfaces'
import { Category } from './Category'
import { DevelopCard } from './DevelopCard'

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

export const DevelopArticleView = () => {
    const [tag, setTag] = useState<'All' | 'Front-End' | 'Back-End' | 'DS/ML/DL' | 'Application' | 'Cloud' | 'General'>(
        'All'
    )
    return (
        <div className="flex min-w-[50%] flex-col items-center justify-center gap-12">
            <div className="flex flex-row items-center justify-center gap-10">
                <Category isActive={tag === 'All'} onClick={() => setTag('All')}>
                    All
                </Category>
                <Category isActive={tag === 'Front-End'} onClick={() => setTag('Front-End')}>
                    Front-End
                </Category>
                <Category isActive={tag === 'Back-End'} onClick={() => setTag('Back-End')}>
                    Back-End
                </Category>
                <Category isActive={tag === 'DS/ML/DL'} onClick={() => setTag('DS/ML/DL')}>
                    DS/ML/DL
                </Category>
                <Category isActive={tag === 'Application'} onClick={() => setTag('Application')}>
                    Application
                </Category>
                <Category isActive={tag === 'Cloud'} onClick={() => setTag('Cloud')}>
                    Cloud
                </Category>
                <Category isActive={tag === 'General'} onClick={() => setTag('General')}>
                    General
                </Category>
            </div>

            <div className="flex w-full flex-col items-center justify-evenly gap-y-8">
                {bulkData.map((article) => (
                    <Link href={`/blog/develop/${article.BLOG_ID}`} key={article.BLOG_ID} className="w-full">
                        <DevelopCard article={article} key={article.BLOG_ID} />
                    </Link>
                ))}
            </div>
        </div>
    )
}
