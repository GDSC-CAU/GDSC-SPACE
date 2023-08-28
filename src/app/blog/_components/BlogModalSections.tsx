'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Tag } from '~/src/components/common'
import { BlogModal } from './BlogModal'
import { Category } from './Category'

export const DevelopModal = ({ isType, params }: { isType: boolean; params: string }) => {
    const [tag, setTag] = useState<'All' | 'Front-End' | 'Back-End' | 'DS/ML/DL' | 'Application' | 'Cloud' | 'General'>(
        'All'
    )
    return (
        <>
            <BlogModal>
                <BlogModal.MainContent isType={isType}>
                    <Link href="/blog/develop">
                        <Tag isActive={params === 'develop'} twClass="relative">
                            Develop
                        </Tag>
                    </Link>
                </BlogModal.MainContent>
                <BlogModal.ModalContent>
                    <div className="flex w-full flex-col items-center justify-center gap-3 md:hidden">
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
                </BlogModal.ModalContent>
            </BlogModal>
        </>
    )
}

export const DesignModal = ({ isType, params }: { isType: boolean; params: string }) => {
    const [tag, setTag] = useState<'All' | 'Graphic' | 'UI/UX' | 'Product' | 'Reference'>('All')
    return (
        <>
            <BlogModal>
                <BlogModal.MainContent isType={isType}>
                    <Link href="/blog/design">
                        <Tag isActive={params === 'design'} twClass="relative">
                            Design
                        </Tag>
                    </Link>
                </BlogModal.MainContent>
                <BlogModal.ModalContent>
                    <div className="flex w-full flex-col items-center justify-center gap-3 md:hidden">
                        <Category isActive={tag === 'All'} onClick={() => setTag('All')}>
                            All
                        </Category>
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
                </BlogModal.ModalContent>
            </BlogModal>
        </>
    )
}

export const ProjectModal = ({ isType, params }: { isType: boolean; params: string }) => {
    const [tag, setTag] = useState<'All' | 'Web' | 'App'>('All')
    return (
        <>
            <BlogModal>
                <BlogModal.MainContent isType={isType}>
                    <Link href="/blog/project">
                        <Tag isActive={params === 'project'} twClass="relative">
                            Project
                        </Tag>
                    </Link>
                </BlogModal.MainContent>
                <BlogModal.ModalContent>
                    <div className="flex w-full flex-col items-center justify-center gap-3 md:hidden">
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
                </BlogModal.ModalContent>
            </BlogModal>
        </>
    )
}
