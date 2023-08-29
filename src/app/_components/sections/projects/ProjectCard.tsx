'use client'
import Link from 'next/link'
import { MAIN_PROJECT_DATA } from 'src/interfaces/common'
import { FillImage, IconButton, useVisibility } from '~/components/common'
import { Arrow } from '~/src/components/icons'

interface ProjectCardProps {
    isReverse: boolean
    projectData: MAIN_PROJECT_DATA
}
export const ProjectCard = ({ isReverse, projectData }: ProjectCardProps) => {
    const textAlign = isReverse ? 'text-end' : 'text-start'
    const LCardMargin = isReverse ? 'ml-[20px]' : 'mr-[-20px]'
    const RCardMargin = isReverse ? 'ml-[20px]' : 'mr-[-20px]'
    const LScrollFrom = isReverse
        ? 'translate-y-16 -translate-x-full opacity-0 scale-75'
        : 'translate-y-16 translate-x-[200%] opacity-0 scale-75'
    const LScrollTo = isReverse ? '-translate-x-0 opacity-100 scale-100' : 'translate-x-full opacity-100 scale-100'
    const RScrollFrom = isReverse
        ? 'translate-y-16 translate-x-full opacity-0 scale-75'
        : 'translate-y-16 -translate-x-[200%] opacity-0 scale-75'
    const RScrollTo = isReverse ? 'translate-x-0 opacity-100 scale-100' : '-translate-x-full opacity-100 scale-100'

    const { isVisible, setVisibilityRef } = useVisibility<HTMLDivElement>()

    return (
        <div className="group flex flex-row items-center" ref={setVisibilityRef}>
            <Link href={`/blog/${projectData.PROJECT_ID}`}>
                <FillImage
                    src={projectData.PROJECT_IMAGE}
                    alt={projectData.PROJECT_TITLE}
                    containerClass={`transform-gpu h-[480px] w-[420px] overflow-hidden rounded-xl transition-all duration-1000 ease-in-out relative ${LCardMargin} ${
                        isVisible ? LScrollTo : LScrollFrom
                    }`}
                    imageClass="rounded-xl group-hover:scale-110 group-hover:brightness-110 transition-all duration-500"
                >
                    <IconButton twClass="absolute opacity-0 bottom-4 right-4 group-hover:opacity-100 transition-opacity duration-300">
                        <Arrow />
                    </IconButton>
                </FillImage>
            </Link>

            <div
                className={`flex h-[480px] w-[420px] flex-col transition-all duration-1000 ease-in-out transform-gpu ${RCardMargin} ${
                    isVisible ? RScrollTo : RScrollFrom
                }`}
            >
                <section className={`flex h-full w-full flex-col items-end justify-start pb-10`}>
                    <h1 className={`w-full font-eng text-6xl font-bold text-white ${textAlign}`}>
                        {projectData.PROJECT_TITLE}
                    </h1>
                    <h2 className={`mb-10 w-full font-eng text-3xl font-normal text-white ${textAlign}`}>
                        {projectData.PROJECT_SUBTITLE}
                    </h2>
                    <p className={`w-full font-eng text-sm font-light ${textAlign}`}>
                        {projectData.PROJECT_DESCRIPTION}
                    </p>
                </section>

                <FillImage
                    src={projectData.PROJECT_IMAGE_SUB}
                    alt={projectData.PROJECT_SUBTITLE}
                    containerClass="h-[280px] w-[420px]"
                    imageClass="rounded-xl"
                />
            </div>
        </div>
    )
}
