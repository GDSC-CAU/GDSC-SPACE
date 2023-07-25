import Link from 'next/link'

export default function BlogList() {
    return (
        <main className="flex h-full w-full flex-col items-center p-24">
            <p>This is Blog List</p>
            <Link href="/blog/1">Blog Post 1</Link>
            <Link href="/blog/2">Blog Post 2</Link>
        </main>
    )
}
