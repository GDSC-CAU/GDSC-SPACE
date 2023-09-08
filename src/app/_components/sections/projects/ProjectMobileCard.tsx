'use client'
import { FadeIn, FillImage, IconButton, Link$ } from '~/components/common'
import { Arrow } from '~/src/components/icons'
import type { MAIN_PROJECT_DATA } from '~/src/interfaces'

interface ProjectCardMobileProps {
    projectData: MAIN_PROJECT_DATA
    fromLeft: boolean
}
export const ProjectCardMobile = ({ projectData, fromLeft }: ProjectCardMobileProps) => {
    const { PROJECT_ID, PROJECT_IMAGE, PROJECT_IMAGE_SUB, PROJECT_SUBTITLE, PROJECT_TITLE } = projectData

    return (
        <FadeIn
            twClass="w-full flex gap-4 flex-col items-center justify-center md:hidden"
            from={`${fromLeft ? '-translate-x-full' : 'translate-x-full'}`}
            to="translate-x-0"
            duration="1000"
            observerOption={{
                rootMargin: '0px 100px 100px 0px',
            }}
        >
            <div className="mb-4 flex flex-col items-center justify-center gap-0">
                <h1 className="font-eng text-4xl font-semibold text-white">{PROJECT_TITLE}</h1>
                <h2 className="font-eng text-xl font-light text-white">{PROJECT_SUBTITLE}</h2>
            </div>

            <Link$ href={`/blog/Project/${PROJECT_ID}`} className="h-[400px] w-full">
                <FillImage
                    src={PROJECT_IMAGE}
                    alt={PROJECT_TITLE}
                    containerClass="w-full h-full overflow-hidden rounded-2xl transition-all duration-1000 ease-in-out"
                    imageClass="rounded-2xl"
                >
                    <IconButton twClass="z-10 absolute bottom-4 right-4">
                        <Arrow />
                    </IconButton>
                </FillImage>
            </Link$>

            <FillImage
                src={PROJECT_IMAGE_SUB}
                alt={PROJECT_SUBTITLE}
                containerClass="w-full h-[175px] rounded-2xl"
                imageClass="rounded-2xl"
            />
        </FadeIn>
    )
}
