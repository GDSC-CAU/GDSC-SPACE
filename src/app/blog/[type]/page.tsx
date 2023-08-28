'use client'

import Link from 'next/link'
import { Footer, Tag } from '~/src/components/common'
import { DesignModal, DevelopModal, ProjectModal } from '../_components/BlogModalSections'
import { BlogTop } from '../_components/BlogTop'
import { DesignArticleView } from '../_components/DesignArticleView'
import { DevelopArticleView } from '../_components/DevelopArticleView'
import { ProjectView } from '../_components/ProjectView'

export default function TypeView({ params }: { params: { type: string } }) {
    const blogType = params.type
    return (
        <main className="flex h-full w-full min-w-[50%] flex-col items-center justify-between gap-4 md:gap-7">
            <BlogTop />

            <div className="mt-7 flex flex-row gap-4 md:hidden">
                <DevelopModal isType={blogType === 'develop'} params={blogType} />
                <DesignModal isType={blogType === 'design'} params={blogType} />
                <ProjectModal isType={blogType === 'project'} params={blogType} />
            </div>

            <div className="hidden md:mx-6 md:my-8 md:flex md:w-full md:flex-row md:items-center md:justify-center md:gap-16">
                <Link href="/blog/develop">
                    <Tag isActive={blogType === 'develop'} twClass="relative">
                        Develop
                    </Tag>
                </Link>

                <Link href="/blog/design">
                    <Tag isActive={blogType === 'design'} twClass="relative">
                        Design
                    </Tag>
                </Link>
                <Link href="/blog/project">
                    <Tag isActive={blogType === 'project'} twClass="relative">
                        Project
                    </Tag>
                </Link>
            </div>
            <div className="w-full">
                {blogType === 'develop' && <DevelopArticleView />}
                {blogType === 'design' && <DesignArticleView />}
                {blogType === 'project' && <ProjectView />}
            </div>
            <Footer />
        </main>
    )
}
