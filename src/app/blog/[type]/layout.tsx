import { Footer } from '~/src/components/common'
import type { BLOG_TYPE_PARAMS } from '~/src/interfaces'
import { BlogHeader } from '../_components/BlogHeader'

export default function BlogLayout({ params: { type }, children }: React.PropsWithChildren<BLOG_TYPE_PARAMS>) {
    return (
        <main className="flex h-full w-full min-w-[50%] flex-col items-center justify-between gap-4 md:gap-7">
            <BlogHeader />
            {children}
            <Footer />
        </main>
    )
}
