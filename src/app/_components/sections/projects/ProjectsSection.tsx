import { GradientHeader } from '~/src/components/common'
import { API_MAIN_PROJECTS } from '~/src/interfaces'
import { ProjectCardDesktop } from './ProjectDesktopCard'
import { ProjectCardMobile } from './ProjectMobileCard'

export const ProjectsSection = ({ MAIN_PROJECT_LIST }: API_MAIN_PROJECTS) => {
    return (
        <section className="mt-28 flex h-full w-full flex-col items-center justify-center gap-6 overflow-x-hidden pb-20">
            <GradientHeader id="projects">Projects</GradientHeader>
            <div className="mb-12">우리는 세상의 문제를 찾고 새로운 해결책을 탐구합니다.</div>

            <div className="flex h-full w-full flex-col items-center justify-between gap-20 md:max-w-4xl">
                {MAIN_PROJECT_LIST.map((project, i) => (
                    <ProjectCardDesktop key={project.PROJECT_ID} isMainBannerLeft={i % 2 === 0} projectData={project} />
                ))}

                {MAIN_PROJECT_LIST.map((project, i) => (
                    <ProjectCardMobile key={project.PROJECT_ID} fromLeft={i % 2 === 0} projectData={project} />
                ))}
            </div>
        </section>
    )
}
