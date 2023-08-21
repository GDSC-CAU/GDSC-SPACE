'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import { MAIN_PROJECT_DATA } from '../../interfaces/common'

export default function ProjectCard({
    isReverse,
    projectData,
}: {
    isReverse: boolean
    projectData: MAIN_PROJECT_DATA | undefined
}) {
    const project: MAIN_PROJECT_DATA = {
        PROJECT_TITLE: 'Wiro',
        PROJECT_ID: 'PROJECT_ID',
        PROJECT_IMAGE: 'https://cdn.pixabay.com/photo/2023/08/11/18/35/flowers-8184126_1280.jpg',
        PROJECT_IMAGE_SUB: 'https://cdn.pixabay.com/photo/2023/08/05/15/15/waves-8171279_1280.jpg',
        PROJECT_DESCRIPTION: '파이팅....',
        PROJECT_SUBTITLE: '미안..',
    }
    const textDirection = isReverse ? 'items-end' : 'items-start'
    const LScrollDirection = isReverse ? '-translate-x-full' : '-translate-x-0'
    const RScrollDirection = isReverse ? '-translate-x-0' : '-translate-x-full'

    const [isVisible, setIsVisible] = useState(false)
    const ImageRef = useRef(null)

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5,
        }

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                    observer.unobserve(entry.target)
                }
            })
        }, options)

        if (ImageRef.current) {
            observer.observe(ImageRef.current)
        }

        return () => {
            if (ImageRef.current) {
                observer.unobserve(ImageRef.current)
            }
        }
    }, [])

    return (
        <Link href="/blog/1">
            <div className={`flex flex-row items-center justify-between gap-3`}>
                <div
                    ref={ImageRef}
                    className={`h-full transition-all duration-1000 ease-in-out${
                        isVisible ? 'translate-x-0' : LScrollDirection
                    }`}
                >
                    <div
                        className={`transition-all duration-1000 ease-in-out ${
                            isVisible ? 'translate-x-0' : 'translate-x-full'
                        }`}
                    >
                        <div>
                            <Image
                                src={project.PROJECT_IMAGE}
                                alt="pixabay picture3"
                                priority
                                layout="responsive"
                                width={663}
                                height={718}
                                style={{ borderRadius: '15px' }}
                                className={`transition duration-300 ease-in-out${
                                    isVisible ? 'group-hover:brightness-90' : ''
                                }`}
                            />
                        </div>
                    </div>
                </div>
                <div
                    ref={ImageRef}
                    className={`flex h-full flex-col transition-all duration-1000 ease-in-out ${
                        isVisible ? 'translate-x-0' : RScrollDirection
                    }`}
                >
                    <div className={`flex w-full flex-col items-end justify-start ${textDirection}`}>
                        <h1 className="mb-5 text-4xl font-bold">{project.PROJECT_TITLE}</h1>
                        <h2 className="text-xs">{project.PROJECT_SUBTITLE}</h2>
                        <h3 className="text-xs">{project.PROJECT_DESCRIPTION}</h3>
                    </div>

                    <div>
                        <Image
                            src={project.PROJECT_IMAGE_SUB}
                            alt="pixabay picture3"
                            priority
                            layout="responsive"
                            width={664}
                            height={180}
                            style={{ borderRadius: '15px' }}
                        />
                    </div>
                </div>
            </div>
        </Link>
    )
}
