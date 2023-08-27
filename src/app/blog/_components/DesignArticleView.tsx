'use client'

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

export const DesignArticleView = () => {
    const [tag, setTag] = useState<'Graphic' | 'UI/UX' | 'Product' | 'Reference'>('Graphic')
    return (
        <div className="flex min-w-[50%] flex-col items-center justify-center gap-12">
            <div className="flex flex-row items-center justify-center gap-10">
                <Category isActive={tag === 'Graphic'} onClick={() => setTag('Graphic')}>
                    Graphic
                </Category>
                <Category isActive={tag === 'UI/UX'} onClick={() => setTag('UI/UX')}>
                    UI/UX
                </Category>
                <Category isActive={tag === 'Product'} onClick={() => setTag('Product')}>
                    Product
                </Category>
                <Category isActive={tag === 'Reference'} onClick={() => setTag('Reference')}>
                    Reference
                </Category>
            </div>
            <div className="grid grid-cols-3 items-center justify-evenly gap-x-2 gap-y-8">
                {bulkData.map((article) => (
                    <DesignProjectCard article={article} key={article.BLOG_ID} />
                ))}
            </div>
        </div>
    )
}
