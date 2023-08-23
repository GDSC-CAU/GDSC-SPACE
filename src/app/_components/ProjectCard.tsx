'use client'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { MAIN_PROJECT_DATA } from 'src/interfaces/common'
import { FillImage } from '~/components/common'

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
        <Link href={`/blog/${project.PROJECT_ID}`} className="group flex flex-row items-center" ref={ImageRef}>
            <FillImage
                src={project.PROJECT_IMAGE}
                alt={project.PROJECT_TITLE}
                containerClass={`h-[480px] w-[420px] overflow-hidden rounded-xl transition-all duration-1000 ease-in-out transform-gpu ${LCardMargin} ${
                    isVisible ? LScrollTo : LScrollFrom
                }`}
                imageClass="rounded-xl group-hover:scale-110 group-hover:brightness-110 transition-all duration-500"
            />

            <div
                className={`h-[480px] w-[420px] ${RCardMargin} flex flex-col transition-all duration-1000 ease-in-out transform-gpu ${
                    isVisible ? RScrollTo : RScrollFrom
                }`}
            >
                <section className={`flex h-full w-full flex-col items-end justify-start`}>
                    <h1 className={`-mt-2 w-full text-6xl font-extrabold text-white ${textAlign}`}>
                        {project.PROJECT_TITLE}
                    </h1>
                    <h2 className={`mb-10 w-full text-3xl font-bold text-white ${textAlign}`}>
                        {project.PROJECT_SUBTITLE}
                    </h2>
                    <p className={`w-full text-sm ${textAlign}`}>{project.PROJECT_DESCRIPTION}</p>
                </section>

                <FillImage
                    containerClass="h-[280px] w-[420px]"
                    imageClass="rounded-xl"
                    src={project.PROJECT_IMAGE}
                    alt="pixabay picture3"
                />
            </div>
        </Link>
    )
}
