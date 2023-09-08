import { GradientHeader } from '~/src/components/common'
import { API_MAIN_PROJECTS } from '~/src/interfaces'
import { ProjectCardDesktop } from './ProjectDesktopCard'
import { ProjectCardMobile } from './ProjectMobileCard'

export const ProjectsSection = ({ MAIN_PROJECT_LIST }: API_MAIN_PROJECTS) => {
    return (
        <section className="mt-28 flex flex-col items-center justify-center gap-6 pb-20">
            <GradientHeader id="projects">Projects</GradientHeader>
            <div className="mb-12">우리는 세상의 문제를 찾고 새로운 해결책을 탐구합니다.</div>

            <div className="flex w-full flex-col items-center justify-center gap-4 gap-y-20 md:grid md:grid-flow-col md:grid-rows-2 md:gap-4">
                {MAIN_PROJECT_LIST.map((project, i) => (
                    <ProjectCardDesktop key={project.PROJECT_ID} isReverse={i % 2 === 0} projectData={project} />
                ))}

                {MAIN_PROJECT_LIST.map((project, i) => (
                    <ProjectCardMobile key={project.PROJECT_ID} fromLeft={i % 2 === 0} projectData={project} />
                ))}
            </div>
        </section>
    )
}

//flex flex-col gap-7 md:grid md:grid-flow-col md:grid-cols-7 md:grid-rows-6 md:gap-5
