'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Tag } from '~/src/components/common'
import { BLOG_META } from '~/src/interfaces'
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
    const [tag, setTag] = useState<'Front-End' | 'Back-End' | 'DS/ML/DL' | 'Application' | 'Cloud' | 'General'>(
        'Front-End'
    )
    return (
        <div className="flex min-w-[50%] flex-col items-center justify-center gap-12">
            <div className="flex flex-row items-center justify-center gap-10">
                <Tag isActive={tag === 'Front-End'} onClick={() => setTag('Front-End')}>
                    Front-End
                </Tag>
                <Tag isActive={tag === 'Back-End'} onClick={() => setTag('Back-End')}>
                    Back-End
                </Tag>
                <Tag isActive={tag === 'DS/ML/DL'} onClick={() => setTag('DS/ML/DL')}>
                    DS/ML/DL
                </Tag>
                <Tag isActive={tag === 'Application'} onClick={() => setTag('Application')}>
                    Application
                </Tag>
                <Tag isActive={tag === 'Cloud'} onClick={() => setTag('Cloud')}>
                    Cloud
                </Tag>
                <Tag isActive={tag === 'General'} onClick={() => setTag('General')}>
                    General
                </Tag>
            </div>

            <div className="flex w-full flex-col items-center justify-evenly gap-y-8">
                {bulkData.map((article) => (
                    <Link href={`/blog/${article.BLOG_ID}`} key={article.BLOG_ID} className="w-full">
                        <DevelopCard article={article} key={article.BLOG_ID} />
                    </Link>
                ))}
            </div>
        </div>
    )
}
