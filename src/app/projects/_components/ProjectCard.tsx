'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import { API_MAIN_PROJECTS } from 'src/app/page'
import { MAIN_PROJECT_DATA } from 'src/app/page'

export type API_MAIN_PROJECTS = {
    MAIN_PROJECT_CNT: number
    MAIN_PROJECT_LIST: Array<MAIN_PROJECT_DATA>
}

export type MAIN_PROJECT_DATA = {
    PROJECT_DESCRIPTION: string
    PROJECT_IMAGE: string
    PROJECT_IMAGE_SUB: string
    PROJECT_SUBTITLE: string
    PROJECT_TITLE: string
}
const API_MAIN_PROJECTS: API_MAIN_PROJECTS = {
    MAIN_PROJECT_CNT: 3,
    MAIN_PROJECT_LIST: [
        {
            PROJECT_DESCRIPTION: '(두줄소개)',
            PROJECT_IMAGE: 'https://cdn.pixabay.com/photo/2023/08/11/18/35/flowers-8184126_1280.jpg',
            PROJECT_IMAGE_SUB: 'https://cdn.pixabay.com/photo/2023/08/05/15/15/waves-8171279_1280.jpg',
            PROJECT_SUBTITLE: '작업기간 / 개발자',
            PROJECT_TITLE: 'Wiro',
        },
        {
            PROJECT_DESCRIPTION:
                "This is a Solution for the people who don't know what actions could be taken toreduce green house effect.This is an education game. By playing this game, the players are informedwhat could be done in real world to decrease the green house effect andwhat contributes to the global warming and green house effect.",
            PROJECT_IMAGE: 'https://cdn.pixabay.com/photo/2023/08/11/18/35/flowers-8184126_1280.jpg',
            PROJECT_IMAGE_SUB: 'https://cdn.pixabay.com/photo/2023/08/05/15/15/waves-8171279_1280.jpg',
            PROJECT_SUBTITLE: ': Save The Earth',
            PROJECT_TITLE: 'Carbon Hero',
        },
        {
            PROJECT_DESCRIPTION:
                "Our goal is to help blind people recognize menus and order without assistance. The most important thing was to capture the menu through the user's camera and present the menu in the most convenient way for blind people: by sound and optimized UI.",
            PROJECT_IMAGE: 'https://cdn.pixabay.com/photo/2023/08/11/18/35/flowers-8184126_1280.jpg',
            PROJECT_IMAGE_SUB: 'https://cdn.pixabay.com/photo/2023/08/05/15/15/waves-8171279_1280.jpg',
            PROJECT_SUBTITLE: 'to blind people can easily order',
            PROJECT_TITLE: 'Blinder',
        },
        {
            PROJECT_DESCRIPTION:
                '돌아보면 주변에 참 고마운 분들이 많은 것 같습니다. 이번 기회에 주위의 감사한 사람들에게 하나뿐인 클립 영상으로 마음을 전달해보는 건 어떨까요? 짧은 감사편지를 작성하고, 받는 분에게 어울리는 키워드를 뽑아보세요. 여러분의 감사한 마음을 소중히 담아 영상으로 보내드립니다.',
            PROJECT_IMAGE: 'https://cdn.pixabay.com/photo/2023/08/11/18/35/flowers-8184126_1280.jpg',
            PROJECT_IMAGE_SUB: 'https://cdn.pixabay.com/photo/2023/08/05/15/15/waves-8171279_1280.jpg',
            PROJECT_SUBTITLE: 'Say Thank You',
            PROJECT_TITLE: 'Thanks Clip',
        },
    ],
}
interface ProjectCardProps extends API_MAIN_PROJECTS.MAIN_PROJECT_DATA {
    isReverse: boolean
}

export default function ProjectCard(props: Omit<API_MAIN_PROJECTS.MAIN_PROJECT_DATA, 'key'>) {
    const { title, image, image_sub, description, subtitle, isReverse } = props
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
        <main
            className={`relative grid w-full  grid-cols-2 items-center justify-between gap-3`}
            dir={isReverse ? '' : 'rtl'}
        >
            <div className="group relative">
                <Link href="/blog/1">
                    <div
                        ref={ImageRef}
                        className={`relative overflow-hidden transition-all duration-1000 ease-in-out${
                            isVisible ? 'translate-x-0' : LScrollDirection
                        }`}
                    >
                        <div
                            className={` flex transition-all duration-1000 ease-in-out ${
                                isVisible ? 'translate-x-0' : 'translate-x-full'
                            }`}
                        >
                            <Image
                                src={image}
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
                </Link>
            </div>
            <div
                ref={ImageRef}
                className={`relative overflow-hidden transition-all duration-1000 ease-in-out ${
                    isVisible ? 'translate-x-0' : RScrollDirection
                }`}
            >
                <div
                    className={`flex transition-all duration-1000 ease-in-out${
                        isVisible ? 'translate-x-0' : 'translate-x-full'
                    }`}
                >
                    <div className="group relative grid grid-rows-2 ">
                        <div className={`max-x-prose flex w-full flex-col items-end ${textDirection}`}>
                            <h1 className="mb-5 text-4xl font-bold">{title}</h1>
                            <h2 className="text-xs">{subtitle}</h2>
                            <h3 className="text-xs">{description}</h3>
                        </div>

                        <div className={`relative mt-5`}>
                            <Image
                                src={image_sub}
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
            </div>
        </main>
    )
}
