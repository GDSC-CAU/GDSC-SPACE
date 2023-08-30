'use client'

import Link from 'next/link'
import { Tag } from '~/src/components/common'
import { BLOG_TYPE_PARAMS } from '~/src/interfaces'
import { util } from '~/src/utils'
import { blogRoutingData } from '../../_data/blogRouteData'
import { BlogCategory } from '../BlogCategory'
import { useBlogTag } from '../BlogTagProvider'
import { BlogModal, useModalContextValue } from './BlogModal'

export const BlogModalView = ({ type }: BLOG_TYPE_PARAMS['params']) => (
    <BlogModal>
        <BlogMobileTypesAndTagsModal type={type} />
    </BlogModal>
)

const BlogMobileTypesAndTagsModal = ({ type }: BLOG_TYPE_PARAMS['params']) => {
    const { tag, setTag } = useBlogTag()
    const { action } = useModalContextValue()

    return (
        <>
            {blogRoutingData.map((view) => (
                <div key={view.type}>
                    {view.type === type && (
                        <>
                            <BlogModal.MainContent isType={type === view.type}>
                                <Link href={view.url}>
                                    <Tag isActive={type === view.type} twClass="relative">
                                        {util.toCapitalize(view.type)}
                                    </Tag>
                                </Link>
                            </BlogModal.MainContent>

                            <BlogModal.ModalContent>
                                <div className="flex w-full flex-col items-center justify-center gap-3 md:hidden">
                                    {view.tags.map((viewTag, order) => (
                                        <BlogCategory
                                            key={`${viewTag}-${order}`}
                                            isActive={tag === viewTag}
                                            onClick={() => {
                                                setTag(viewTag)
                                                action.close()
                                            }}
                                        >
                                            {viewTag}
                                        </BlogCategory>
                                    ))}
                                </div>
                            </BlogModal.ModalContent>
                        </>
                    )}
                    {view.type !== type && (
                        <Link href={view.url}>
                            <Tag isActive={type === view.type} twClass="relative">
                                {util.toCapitalize(view.type)}
                            </Tag>
                        </Link>
                    )}
                </div>
            ))}
        </>
    )
}
