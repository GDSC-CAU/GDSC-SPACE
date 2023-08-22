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
        PROJECT_DESCRIPTION:
            'GDSC CAU GDSC CAU GDSC CAU GDSC CAU GDSC CAU GDSC CAU GDSC CAU GDSC CAU GDSC CAU ' +
            'GDSC CAU GDSC CAU GDSC CAU GDSC CAU GDSC CAU GDSC CAU GDSC CAU GDSC CAU GDSC CAU GDSC CAU GDSC CAU',
        PROJECT_SUBTITLE: ': No more Lonely Death',
    }
    const textAlign = isReverse ? 'text-end' : 'text-start'
    const LCardMargin = isReverse ? 'ml-[20px]' : 'mr-[-20px]'
    const RCardMargin = isReverse ? 'ml-[20px]' : 'mr-[-20px]'
    const LScrollFrom = isReverse ? '-translate-x-full' : 'translate-x-[200%]'
    const LScrollTo = isReverse ? '-translate-x-0' : 'translate-x-full'
    const RScrollFrom = isReverse ? 'translate-x-full' : '-translate-x-[200%]'
    const RScrollTo = isReverse ? 'translate-x-0' : '-translate-x-full'

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
            <div ref={ImageRef} className={`flex flex-row items-center`}>
                <div
                    className={`h-[480px] w-[420px] ${LCardMargin} transition-all duration-1000 ease-in-out ${
                        isVisible ? LScrollTo : LScrollFrom
                    }`}
                >
                    <div className={'relative h-[480px] w-[420px]'}>
                        <Image
                            src={project.PROJECT_IMAGE}
                            alt="pixabay picture3"
                            fill
                            priority
                            layout="fixed"
                            style={{ borderRadius: '15px' }}
                            className={`transition duration-300 ease-in-out${
                                isVisible ? 'group-hover:brightness-90' : ''
                            }`}
                        />
                    </div>
                </div>
                <div
                    className={`h-[480px] w-[420px] ${RCardMargin} flex flex-col transition-all duration-1000 ease-in-out ${
                        isVisible ? RScrollTo : RScrollFrom
                    }`}
                >
                    <div className={`flex h-full w-full flex-col items-end justify-start`}>
                        <p className={`w-full text-6xl font-bold ${textAlign}`}>{project.PROJECT_TITLE}</p>
                        <p className={`mb-10 w-full text-4xl ${textAlign}`}>{project.PROJECT_SUBTITLE}</p>
                        <p className={`w-full text-base ${textAlign}`}>{project.PROJECT_DESCRIPTION}</p>
                    </div>

                    <div className={'relative h-[280px] w-[420px]'}>
                        <Image
                            src={project.PROJECT_IMAGE}
                            alt="pixabay picture3"
                            fill
                            priority
                            layout="fixed"
                            style={{ borderRadius: '15px' }}
                            className={`transition duration-300 ease-in-out${
                                isVisible ? 'group-hover:brightness-90' : ''
                            }`}
                        />
                    </div>
                </div>
            </div>
        </Link>
    )
}
