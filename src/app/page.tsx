import { API_MAIN_PROJECTS, API_MAIN_TIMELINES, API_RESPONSE } from 'src/interfaces/common'
import { IntroIcon } from '~/components/icons'
import { GradientHeader } from '../components/common'
import { Fetcher } from '../utils'
import { ProjectCard } from './_components'
import { Benefits } from './_components/benefits'
import { TimeLineCard } from './events/_components/TimeLineCard'

const mainFetcher = new Fetcher({
    baseUrl: 'http://localhost:3000',
})

const BulkBanner = () => {
    return (
        <div className="flex h-72 w-full flex-col items-center justify-center gap-32 rounded-3xl border border-neutral-800 bg-theme-background py-40 text-sm">
            <div className="flex flex-row gap-0">
                <h1 className="bg-gradient-to-br from-primary-hotpink to-primary-hotpink bg-clip-text font-eng text-7xl font-bold text-transparent">
                    G
                </h1>
                <h1 className="bg-gradient-to-br from-primary-yellow to-yellow-500 bg-clip-text font-eng text-7xl font-bold text-transparent">
                    D
                </h1>
                <h1 className="bg-gradient-to-br from-primary-blue to-sky-500 bg-clip-text font-eng text-7xl font-bold text-transparent">
                    S
                </h1>
                <h1 className="bg-gradient-to-br from-primary-teal to-green-500 bg-clip-text font-eng text-7xl font-bold text-transparent">
                    C
                </h1>
            </div>
            가상 Banner 영역입니다
        </div>
    )
}

const Intro = () => {
    return (
        <div className="relative ml-[calc(-13rem)] flex w-screen flex-col items-center justify-center bg-gradient-to-b from-black to-primary-darkgray py-20">
            <div className="absolute left-1/2 top-1/4 h-64 w-64 rounded-full bg-primary-blue blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
            <GradientHeader twClass="mb-10 z-10">Who are we?</GradientHeader>

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

            <div className="mt-5 flex h-32 w-32 animate-[pulse_3s_infinite_100ms] items-center justify-center">
                <IntroIcon />
            </div>
        </div>
    )
}

const TimeLines = ({ MAIN_TIMELINE_LIST }: API_MAIN_TIMELINES) => {
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

    return (
        <>
            <div className="flex h-[60rem] w-full flex-row">
                <div className="flex w-1/2 items-center justify-center">
                    <GradientHeader>
                        Here we go. <br /> What you will <br />
                        experience.
                    </GradientHeader>
                </div>
                <div className="mx-2 h-full w-[0.08rem] border-0 bg-gradient-to-b from-primary-blue to-white" />
                <div className="flex h-full w-1/2 flex-col items-center justify-start gap-7 overflow-y-auto overflow-x-hidden p-3 pt-32 scrollbar-hide">
                    {MAIN_TIMELINE_LIST.map((timeline, i) => (
                        <TimeLineCard
                            key={`${timeline.TIMELINE_TITLE}-${timeline.TIMELINE_DESCRIPTION}`}
                            timeLine={timeline}
                            bg_color={bg_colors[i % 5]}
                            text_color={text_colors[i % 5]}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}

const Projects = ({ MAIN_PROJECT_LIST }: API_MAIN_PROJECTS) => {
    return (
        <div className="mt-28 flex flex-col items-center justify-center gap-6">
            <GradientHeader>Project</GradientHeader>
            <div className="mb-12">우리는 이러한 문제점들을 읽어내고, 해결책을 탐구합니다!</div>

            <div className="flex w-[1000px] flex-col items-center gap-10">
                {MAIN_PROJECT_LIST.map((project, i) => (
                    <ProjectCard key={project.PROJECT_ID} isReverse={i % 2 === 0} projectData={project} />
                ))}
            </div>
        </div>
    )
}

export default async function Home() {
    const timelines = (await mainFetcher.get<API_RESPONSE>('main/getTimelines')).RESULT_DATA as API_MAIN_TIMELINES
    const mainProjects = (await mainFetcher.get<API_RESPONSE>('main/getProjects')).RESULT_DATA as API_MAIN_PROJECTS

    return (
        <div className="h-full w-full">
            <BulkBanner />
            <Intro />
            <TimeLines {...timelines} />
            <Benefits />
            <Projects {...mainProjects} />
        </div>
    )
}
