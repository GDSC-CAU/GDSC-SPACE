import Image from 'next/image'
import { API_MAIN_PROJECTS, API_MAIN_TIMELINES, API_RESPONSE } from 'src/interfaces/common'
import { IntroIcon } from '~/components/icons'
import { FadeIn, FadeInGradientHeader, Footer, GradientHeader } from '../components/common'
import { Fetcher } from '../utils'
import { ProjectCard } from './_components'
import { Benefits } from './_components/benefits'
import { TimeLineCard } from './events/_components/TimeLineCard'

const fetcher = new Fetcher({
    baseUrl: 'http://localhost:3000',
})

const WhoAreWeSection = () => {
    return (
        <div className="relative flex flex-col items-center justify-center py-20 pb-6">
            <div className="absolute left-1/2 top-1/4 h-64 w-64 rounded-full bg-primary-blue blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
            <FadeInGradientHeader id="about" twClass="mb-10 z-10">
                Who are we?
            </FadeInGradientHeader>

            <div className="z-10 flex flex-row items-start justify-center gap-20">
                <div className="flex w-100 flex-col">
                    <p className="mb-5 flex font-eng text-xl font-normal">Developer/ Designer/ Leader</p>
                    <p className="flex font-eng text-sm font-light leading-loose">
                        Google Developer Student Clubs are university based community groups for students interested in
                        Google developer technologies. Students from all undergraduate or graduate programs with an
                        interest in growing as a developer or designer are welcome. By joining a GDSC, students grow
                        their knowledge in a peer-to-peer learning environment and build solutions for local businesses
                        and their community.
                    </p>
                </div>
                <div className="flex w-100 flex-col">
                    <p className="mb-5 flex font-kor text-xl font-normal">여러 작은 픽셀들이 하나의 큰 이미지로</p>
                    <p className="flex font-kor text-sm font-light leading-loose">
                        Google Developer Student Clubs (GDSC) 프로그램은 학생들이 개발/디자인/리더십 능력을 키울 수
                        있도록 지원하는 프로그램입니다. 기술적 성장을 위한 교육자료를 제공하고 리더십 개발을 위한 다양한
                        활동들을 지원합니다. 학생이 성장할 수 있도록 전세계의 학생 Lead들과의 교류 기회, Google의 이벤트
                        참여, 현업 엔지니어와의 만남 등 다양한 기회를 제공하고 쇼케이스와 워크샵을 통해 역량을 높일 수
                        있도록 돕습니다.
                    </p>
                </div>
            </div>

            <div className="mt-5 flex h-32 w-32 items-center justify-center">
                <IntroIcon />
            </div>
        </div>
    )
}

const IntroductionSection = () => {
    // -mt-20 for navbar height
    return (
        <section className="-mt-20 ml-[calc(-13rem)] flex w-screen select-none flex-col items-center justify-center bg-black">
            <div className="relative h-fit w-fit">
                <Image src="/banner.png" width={1920} height={1070} alt="GDSC CAU banner" priority quality={100} />

                <div className="absolute inset-0 h-full w-full bg-gradient-to-b from-black/60 to-white/0" />

                <div className="absolute left-1/2 top-1/2 flex flex-col items-center justify-center gap-8 -translate-x-1/2 -translate-y-1/2">
                    <FadeIn from="translate-x-full scale-75" to="translate-x-0 scale-100" duration="1250">
                        <h1 className="font-eng text-7xl font-semibold text-white">Google</h1>
                    </FadeIn>
                    <FadeIn from="-translate-x-full scale-75" to="translate-x-0 scale-100" duration="1250">
                        <h1 className="font-eng text-7xl font-semibold text-white">Developer</h1>
                    </FadeIn>
                    <FadeIn from="translate-x-full scale-75" to="translate-x-0 scale-100" duration="1250">
                        <h1 className="font-eng text-7xl font-semibold text-white">Student</h1>
                    </FadeIn>
                    <FadeIn from="-translate-x-full scale-75" to="translate-x-0 scale-100" duration="1250">
                        <h1 className="font-eng text-7xl font-semibold text-white">Club</h1>
                    </FadeIn>

                    <FadeIn duration="1250">
                        <p className="pt-10 text-xl font-light">Chung-Ang University</p>
                    </FadeIn>
                </div>
            </div>

            <div className="flex h-full w-full flex-col items-center justify-center gap-10 bg-gradient-to-b from-black to-primary-darkgray">
                <FadeIn from="translate-y-10" to="translate-y-0" duration="1250">
                    <div className="flex flex-col items-center justify-center pb-72 pt-56">
                        <h2 className="bg-gradient-to-b from-primary-hotpink from-15% to-white bg-clip-text text-center font-eng text-4xl/normal font-medium text-transparent">
                            From what you see
                            <br></br>
                            to what we want to see.
                        </h2>
                    </div>
                </FadeIn>
                <WhoAreWeSection />
            </div>
        </section>
    )
}

const TimeLinesSection = ({ MAIN_TIMELINE_LIST }: API_MAIN_TIMELINES) => {
    const bg_colors = [
        'bg-primary-hotpink',
        'bg-primary-yellow',
        'bg-primary-teal',
        'bg-primary-blue',
        'bg-primary-purple',
    ] as const

    const text_colors = [
        'text-primary-hotpink',
        'text-primary-yellow',
        'text-primary-teal',
        'text-primary-blue',
        'text-primary-purple',
    ] as const

    const border_group_colors = [
        'group-hover:border-primary-hotpink/50',
        'group-hover:border-primary-yellow/50',
        'group-hover:border-primary-teal/50',
        'group-hover:border-primary-blue/50',
        'group-hover:border-primary-purple/50',
    ] as const

    return (
        <section className="flex h-[52.5rem] w-full flex-row">
            <div className="flex w-1/2 items-center justify-center">
                <FadeInGradientHeader>
                    Here we go. <br /> What you will <br />
                    experience.
                </FadeInGradientHeader>
            </div>

            <FadeIn
                from="scale-y-0"
                to="scale-y-100"
                twClass="origin-top"
                duration="1000"
                animationTiming="ease-in-out"
            >
                <div className="ml-3.5 mt-0.5 h-full w-[0.08rem] border-0 bg-gradient-to-b from-primary-blue/40 to-white" />
            </FadeIn>

            <div className="flex h-full w-1/2 flex-col items-center justify-start gap-7 overflow-y-auto overflow-x-hidden p-3 pt-32 scrollbar-hide">
                {MAIN_TIMELINE_LIST.map((timeline, i) => (
                    <TimeLineCard
                        key={`${timeline.TIMELINE_TITLE}-${timeline.TIMELINE_DESCRIPTION}`}
                        timeLine={timeline}
                        bgColor={bg_colors[i % 5]}
                        textColor={text_colors[i % 5]}
                        borderGroupColor={border_group_colors[i % 5]}
                    />
                ))}
            </div>
        </section>
    )
}

const ProjectsSection = ({ MAIN_PROJECT_LIST }: API_MAIN_PROJECTS) => {
    return (
        <section className="mt-28 flex flex-col items-center justify-center gap-6 pb-20">
            <GradientHeader id="projects">Projects</GradientHeader>
            <div className="mb-12">우리는 이러한 문제점들을 읽어내고, 해결책을 탐구합니다!</div>

            <div className="flex w-[1000px] flex-col items-center gap-20">
                {MAIN_PROJECT_LIST.map((project, i) => (
                    <ProjectCard key={project.PROJECT_ID} isReverse={i % 2 === 0} projectData={project} />
                ))}
            </div>
        </section>
    )
}

export default async function Home() {
    const timelines = await fetcher.get<API_RESPONSE<API_MAIN_TIMELINES>>('main/getTimelines')
    const mainProjects = await fetcher.get<API_RESPONSE<API_MAIN_PROJECTS>>('main/getProjects')

    return (
        <div className="h-full w-full">
            <IntroductionSection />
            <TimeLinesSection {...timelines.RESULT_DATA!} />
            <Benefits />
            <ProjectsSection {...mainProjects.RESULT_DATA!} />
            <Footer main />
        </div>
    )
}
