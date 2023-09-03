'use client'

import dynamic from 'next/dynamic'
import Image from 'next/image'
import Link from 'next/link'
import { NotionRenderer } from 'react-notion-x'
import type { API_BLOG_DETAIL } from '~/src/interfaces'

type GetComponentTypeProps<T> = T extends React.ComponentType<infer P> ? P : never

const Code = dynamic(() => import('react-notion-x/build/third-party/code').then((m) => m.Code))

export const Notion = ({ recordMap }: { recordMap: API_BLOG_DETAIL['BLOG_CONTENT'] }) => {
    return (
        <NotionRenderer
            recordMap={recordMap}
            components={{
                Code: ({ block }: GetComponentTypeProps<typeof Code>) => (
                    <Code
                        block={block}
                        className="rounded border border-[#81a1c1] bg-transparent scrollbar-hide"
                        defaultLanguage="bash"
                    />
                ),
                nextImage: Image,
                nextLink: Link,
                Header: () => null,
            }}
            fullPage={true}
            darkMode={true}
            className="h-full w-full bg-theme-background"
        />
    )
}
