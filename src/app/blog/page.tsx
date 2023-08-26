'use client'

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
                    className="group"
                >
                    {blogCategory === 'Develop Article' ? (
                        <div>
                            <p className="text-2xl font-bold">Develop Article</p>
                            <div className="h-[0.75px] w-full rounded bg-theme-font" />
                        </div>
                    ) : (
                        <div>
                            <p className="text-2xl">Develop Article</p>
                            <div className="h-[0.75px] w-full rounded bg-theme-font transition-all duration-200 scale-x-0 group-hover:opacity-90 group-hover:scale-x-100" />
                        </div>
                    )}
                </button>
                <button
                    type="button"
                    aria-label="Design Article"
                    onClick={() => setBlogCategory('Design Article')}
                    className="group"
                >
                    {blogCategory === 'Design Article' ? (
                        <div>
                            <p className="text-2xl font-bold">Design Article</p>
                            <div className="h-[0.75px] w-full rounded bg-theme-font" />
                        </div>
                    ) : (
                        <div>
                            <p className="text-2xl">Design Article</p>
                            <div className="h-[0.75px] w-full rounded bg-theme-font transition-all duration-200 scale-x-0 group-hover:opacity-90 group-hover:scale-x-100" />
                        </div>
                    )}
                </button>
                <button type="button" aria-label="Project" onClick={() => setBlogCategory('Project')} className="group">
                    {blogCategory === 'Project' ? (
                        <div>
                            <p className="text-2xl font-bold">Project</p>
                            <div className="h-[0.75px] w-full rounded bg-theme-font" />
                        </div>
                    ) : (
                        <div>
                            <p className="text-2xl">Project</p>
                            <div className="h-[0.75px] w-full rounded bg-theme-font transition-all duration-200 scale-x-0 group-hover:opacity-90 group-hover:scale-x-100" />
                        </div>
                    )}
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
