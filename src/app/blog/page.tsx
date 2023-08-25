'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Divider } from '~/src/components/common'
import { BlogTop } from './_components/BlogTop'
import { BlogView } from './_components/BlogView'

export default function BlogList() {
    const [blogCategory, setBlogCategory] = useState<'Develop Article' | 'Design Article' | 'Project'>(
        'Develop Article'
    )
    return (
        <main className="flex h-full w-full flex-col gap-10 p-24">
            <BlogTop />
            <div className="mx-6 mt-5 flex flex-row gap-16">
                <div>
                    <input type="text" placeholder="Search" />
                </div>
                <button
                    type="button"
                    aria-label="Develop Article"
                    onClick={() => setBlogCategory('Develop Article')}
                    className="text-2xl hover:underline hover:underline-offset-8"
                >
                    Develop Article
                </button>
                <button
                    type="button"
                    aria-label="Design Article"
                    onClick={() => setBlogCategory('Design Article')}
                    className="text-2xl hover:underline hover:underline-offset-8"
                >
                    Design Article
                </button>
                <button
                    type="button"
                    aria-label="Project"
                    onClick={() => setBlogCategory('Project')}
                    className="text-2xl hover:underline hover:underline-offset-8"
                >
                    Project
                </button>
            </div>
            <div className="flex w-full flex-row items-center justify-center">
                <Divider />
                <h1 className="flex w-full items-center justify-center text-6xl">{blogCategory}</h1>
                <Divider />
            </div>
            <div>
                <BlogView blogCategory={`${blogCategory}`} />
            </div>
        </main>
    )
}
