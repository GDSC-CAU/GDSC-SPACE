'use client'

import { useState } from 'react'
import { Tag } from '~/src/components/common'
import { BlogTop } from './_components/BlogTop'
import { BlogView } from './_components/BlogView'

export default function BlogList() {
    const [blogCategory, setBlogCategory] = useState<'Develop' | 'Design' | 'Project'>('Develop')
    return (
        <main className="flex h-full w-full flex-col items-center justify-center  gap-10 p-24">
            <BlogTop />
            <div className="mx-6 my-8 flex flex-row gap-16">
                <Tag onClick={() => setBlogCategory('Develop')} isActive={blogCategory === 'Develop'}>
                    Develop
                </Tag>
                <Tag onClick={() => setBlogCategory('Design')} isActive={blogCategory === 'Design'}>
                    Design
                </Tag>
                <Tag onClick={() => setBlogCategory('Project')} isActive={blogCategory === 'Project'}>
                    Project
                </Tag>
            </div>
            <div className="w-full">
                <BlogView blogCategory={`${blogCategory}`} />
            </div>
        </main>
    )
}
