'use client'

import Link from 'next/link'
import { Tag } from '~/src/components/common'
import { BlogTop } from '../_components/BlogTop'
import { DesignArticleView } from '../_components/DesignArticleView'
import { DevelopArticleView } from '../_components/DevelopArticleView'
import { ProjectView } from '../_components/ProjectView'

export default function TypeView({ params }: { params: { type: string } }) {
    const blogType = params.type
    return (
        <main className="flex h-full w-full flex-col items-center justify-between gap-8 p-24">
            <BlogTop />
            <div className="mx-6 my-8 flex flex-row gap-16">
                <Link href="/blog/develop">
                    <Tag isActive={blogType === 'develop'}>Develop</Tag>
                </Link>
                <Link href="/blog/design">
                    <Tag isActive={blogType === 'design'}>Design</Tag>
                </Link>
                <Link href="/blog/project">
                    <Tag isActive={blogType === 'project'}>Project</Tag>
                </Link>
            </div>
            <div className="w-full">
                {blogType === 'develop' && <DevelopArticleView />}
                {blogType === 'design' && <DesignArticleView />}
                {blogType === 'project' && <ProjectView />}
            </div>
        </main>
    )
}
