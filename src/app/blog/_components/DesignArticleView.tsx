'use client'

import { useState } from 'react'
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
    const [Tag, setTag] = useState<'Graphic' | 'UI/UX' | 'Product' | 'Reference'>('Graphic')
    return (
        <div className="flex min-w-[50%] flex-col items-center justify-center gap-12">
            <div className="flex flex-row items-center justify-center gap-10">
                <button
                    type="button"
                    aria-label="Graphic"
                    onClick={() => setTag('Graphic')}
                    className={
                        Tag === 'Graphic'
                            ? `rounded-full border border-primary-blue bg-primary-blue px-6 py-1 text-white hover:border-primary-blue`
                            : `rounded-full border border-white px-6 py-1 text-white`
                    }
                >
                    Graphic
                </button>
                <button
                    type="button"
                    aria-label="UI/UX"
                    onClick={() => setTag('UI/UX')}
                    className={
                        Tag === 'UI/UX'
                            ? `rounded-full border border-primary-blue bg-primary-blue px-6 py-1 text-white`
                            : `rounded-full border border-white px-6 py-1 text-white hover:border-primary-blue`
                    }
                >
                    UI/UX
                </button>
                <button
                    type="button"
                    aria-label="Product"
                    onClick={() => setTag('Product')}
                    className={
                        Tag === 'Product'
                            ? `rounded-full border border-primary-blue bg-primary-blue px-6 py-1 text-white`
                            : `rounded-full border border-white px-6 py-1 text-white hover:border-primary-blue`
                    }
                >
                    Product
                </button>
                <button
                    type="button"
                    aria-label="Reference"
                    onClick={() => setTag('Reference')}
                    className={
                        Tag === 'Reference'
                            ? `rounded-full border border-primary-blue bg-primary-blue px-6 py-1 text-white`
                            : `rounded-full border border-white px-6 py-1 text-white hover:border-primary-blue`
                    }
                >
                    Reference
                </button>
            </div>
            <div className="grid grid-cols-3 items-center justify-evenly gap-x-2 gap-y-8">
                {bulkData.map((article) => (
                    <DesignProjectCard article={article} key={article.BLOG_ID} />
                ))}
            </div>
        </div>
    )
}
