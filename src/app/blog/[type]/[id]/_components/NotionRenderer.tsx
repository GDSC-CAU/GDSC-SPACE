'use client'

import dynamic from 'next/dynamic'
import Image from 'next/image'
import Link from 'next/link'
import { NotionRenderer } from 'react-notion-x'

const Code = dynamic(() => import('react-notion-x/build/third-party/code').then((m) => m.Code))

type GetComponentTypeProps<T> = T extends React.ComponentType<infer P> ? P : never
type GetFcProps<T> = T extends React.FC<infer P> ? P : never

export const Notion = ({ recordMap }: { recordMap: GetFcProps<typeof NotionRenderer>['recordMap'] }) => {
    return (
        <NotionRenderer
            recordMap={recordMap}
            components={{
                Code: ({ block }: GetComponentTypeProps<typeof Code>) => (
                    <Code block={block} className="rounded-lg scrollbar-hide" defaultLanguage="bash" />
                ),
                nextImage: Image,
                nextLink: Link,
                Header: () => null,
            }}
            fullPage={true}
            darkMode={true}
            className="h-full w-full bg-transparent"
        />
    )
}
