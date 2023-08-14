import Link from 'next/link'

export default function ProjectList() {
    return (
        <main className="flex h-full w-full flex-col items-center p-24">
            <p>This is Project List</p>
            <Link href="/projects/1">Project 1</Link>
            <Link href="/projects/2">Project 2</Link>
        </main>
    )
}
