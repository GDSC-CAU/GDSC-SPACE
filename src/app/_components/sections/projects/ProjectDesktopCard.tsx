'use client'
import { FadeIn, FillImage, IconButton, Link$ } from '~/components/common'
import { Arrow } from '~/src/components/icons'
import type { MAIN_PROJECT_DATA } from '~/src/interfaces/Common'

interface ProjectCardDesktopProps {
    isMainBannerLeft: boolean
    projectData: MAIN_PROJECT_DATA
}
export const ProjectCardDesktop = ({ isMainBannerLeft, projectData }: ProjectCardDesktopProps) => {
    const {
        PROJECT_ID: id,
        PROJECT_TITLE: title,
        PROJECT_SUBTITLE: subTitle,
        PROJECT_DESCRIPTION: description,
        PROJECT_IMAGE: imageSrc,
        PROJECT_IMAGE_SUB: subImageSrc,
    } = projectData

    const fromLeft = '-translate-y-16 -translate-x-1/2 opacity-0 scale-75'
    const fromRight = '-translate-y-16 translate-x-1/2 opacity-0 scale-75'
    const toCenter = 'translate-0 opacity-100 scale-100'

    const mainBannerHeight = 'h-[500px]'
    const subBannerHeight = 'h-full max-h-[200px]'

    const textAlign = isMainBannerLeft ? 'text-end' : 'text-start'

    return (
        <Link$
            href={`/blog/Project/${id}`}
            className={`${
                isMainBannerLeft ? 'flex-row' : 'flex-row-reverse'
            } hidden h-full w-full items-start justify-center gap-4 md:flex`}
        >
            <FadeIn
                animationTiming="ease"
                duration="1000"
                from={isMainBannerLeft ? fromLeft : fromRight}
                to={toCenter}
                observerOption={{
                    rootMargin: '100%',
                }}
                twClass="w-1/2 h-full group"
            >
                <FillImage
                    alt={`${title} project image`}
                    src={imageSrc}
                    containerClass={`w-full ${mainBannerHeight} relative`}
                    imageClass="w-full h-full rounded-xl"
                >
                    <IconButton twClass="absolute opacity-0 bottom-4 right-4 group-hover:opacity-100 transition-opacity duration-300">
                        <Arrow className="stroke-black" />
                    </IconButton>
                </FillImage>
            </FadeIn>

            <FadeIn
                animationTiming="ease"
                duration="1000"
                from={isMainBannerLeft ? fromRight : fromLeft}
                to={toCenter}
                observerOption={{
                    rootMargin: '100%',
                }}
                twClass={`w-1/2 ${mainBannerHeight} flex flex-col items-center gap-10`}
            >
                <section className={`flex h-full w-full flex-col items-end justify-start font-eng text-white`}>
                    <h1 className={`w-full text-6xl font-bold ${textAlign}`}>{title}</h1>
                    <h2 className={`mb-10 w-full text-3xl font-normal ${textAlign}`}>{subTitle}</h2>
                    <p className={`w-full text-base font-light text-primary-whitegray ${textAlign}`}>{description}</p>
                </section>

                <FillImage
                    src={subImageSrc}
                    alt={`${subTitle} project sub image`}
                    containerClass={`w-full ${subBannerHeight}`}
                    imageClass="w-full h-full rounded-xl"
                />
            </FadeIn>
        </Link$>
    )
}
