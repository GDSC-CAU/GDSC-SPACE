'use client'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { MAIN_PROJECT_DATA } from 'src/interfaces/common'
import { FillImage } from '~/components/common'

interface ProjectCardProps {
    isReverse: boolean
    projectData: MAIN_PROJECT_DATA
}
export const ProjectCard = ({ isReverse, projectData }: ProjectCardProps) => {
    const textAlign = isReverse ? 'text-end' : 'text-start'
    const LCardMargin = isReverse ? 'ml-[20px]' : 'mr-[-20px]'
    const RCardMargin = isReverse ? 'ml-[20px]' : 'mr-[-20px]'
    const LScrollFrom = isReverse ? '-translate-x-full' : 'translate-x-[200%]'
    const LScrollTo = isReverse ? '-translate-x-0' : 'translate-x-full'
    const RScrollFrom = isReverse ? 'translate-x-full' : '-translate-x-[200%]'
    const RScrollTo = isReverse ? 'translate-x-0' : '-translate-x-full'

    const [isVisible, setIsVisible] = useState(false)
    const projectCardRef = useRef<HTMLAnchorElement>(null)

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5,
        }

        const observeTarget = projectCardRef.current

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                    observer.unobserve(entry.target)
                }
            })
        }, options)

        if (observeTarget) {
            observer.observe(observeTarget)
        }

        return () => {
            if (observeTarget) {
                observer.unobserve(observeTarget)
            }
        }
    }, [])

    return (
        <Link
            href={`/blog/${projectData.PROJECT_ID}`}
            ref={projectCardRef}
            className="group flex flex-row items-center"
        >
            <FillImage
                src={projectData.PROJECT_IMAGE}
                alt={projectData.PROJECT_TITLE}
                containerClass={`h-[480px] w-[420px] overflow-hidden rounded-xl transition-all duration-1000 ease-in-out ${LCardMargin} ${
                    isVisible ? LScrollTo : LScrollFrom
                }`}
                imageClass="rounded-xl group-hover:scale-110 group-hover:brightness-110 transition-all duration-500"
            />

            <div
                className={`h-[480px] w-[420px] ${RCardMargin} flex flex-col transition-all duration-1000 ease-in-out ${
                    isVisible ? RScrollTo : RScrollFrom
                }`}
            >
                <section className={`flex h-full w-full flex-col items-end justify-start`}>
                    <h1 className={`w-full text-6xl font-extrabold text-white ${textAlign}`}>
                        {projectData.PROJECT_TITLE}
                    </h1>
                    <h2 className={`mb-10 w-full text-3xl font-bold text-white ${textAlign}`}>
                        {projectData.PROJECT_SUBTITLE}
                    </h2>
                    <p className={`w-full text-sm ${textAlign}`}>{projectData.PROJECT_DESCRIPTION}</p>
                </section>

                <FillImage
                    src={projectData.PROJECT_IMAGE_SUB}
                    alt={projectData.PROJECT_SUBTITLE}
                    containerClass="h-[280px] w-[420px]"
                    imageClass="rounded-xl"
                />
            </div>
        </Link>
    )
}
