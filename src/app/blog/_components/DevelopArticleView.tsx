'use client'

import Link from 'next/link'
import { useState } from 'react'
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
    const [Tag, setTag] = useState<'Front-End' | 'Back-End' | 'DS/ML/DL' | 'Application' | 'Cloud' | 'General'>(
        'Front-End'
    )
    return (
        <div className="flex min-w-[50%] flex-col items-center justify-center gap-12">
            <div className="flex flex-row items-center justify-center gap-10">
                <button
                    type="button"
                    aria-label="Front-End"
                    onClick={() => setTag('Front-End')}
                    className={
                        Tag === 'Front-End'
                            ? `rounded-full border border-primary-blue bg-primary-blue px-6 py-1 text-white hover:border-primary-blue`
                            : `rounded-full border border-white px-6 py-1 text-white`
                    }
                >
                    Front-End
                </button>
                <button
                    type="button"
                    aria-label="Back-End"
                    onClick={() => setTag('Back-End')}
                    className={
                        Tag === 'Back-End'
                            ? `rounded-full border border-primary-blue bg-primary-blue px-6 py-1 text-white`
                            : `rounded-full border border-white px-6 py-1 text-white hover:border-primary-blue`
                    }
                >
                    Back-End
                </button>
                <button
                    type="button"
                    aria-label="DS/ML/DL"
                    onClick={() => setTag('DS/ML/DL')}
                    className={
                        Tag === 'DS/ML/DL'
                            ? `rounded-full border border-primary-blue bg-primary-blue px-6 py-1 text-white`
                            : `rounded-full border border-white px-6 py-1 text-white hover:border-primary-blue`
                    }
                >
                    DS/ML/DL
                </button>
                <button
                    type="button"
                    aria-label="Application"
                    onClick={() => setTag('Application')}
                    className={
                        Tag === 'Application'
                            ? `rounded-full border border-primary-blue bg-primary-blue px-6 py-1 text-white`
                            : `rounded-full border border-white px-6 py-1 text-white hover:border-primary-blue`
                    }
                >
                    Application
                </button>
                <button
                    type="button"
                    aria-label="Cloud"
                    onClick={() => setTag('Cloud')}
                    className={
                        Tag === 'Cloud'
                            ? `rounded-full border border-primary-blue bg-primary-blue px-6 py-1 text-white`
                            : `rounded-full border border-white px-6 py-1 text-white hover:border-primary-blue`
                    }
                >
                    Cloud
                </button>
                <button
                    type="button"
                    aria-label="General"
                    onClick={() => setTag('General')}
                    className={
                        Tag === 'General'
                            ? `rounded-full border border-primary-blue bg-primary-blue px-6 py-1 text-white`
                            : `rounded-full border border-white px-6 py-1 text-white hover:border-primary-blue`
                    }
                >
                    General
                </button>
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
