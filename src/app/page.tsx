import SvgIntro from '~/components/icons/IntroIcon'
import ProjectCard from './_components/ProjectCard'

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
        <div className="relative mt-20 flex h-[600px] flex-col items-center justify-center">
            <div className="absolute left-1/2 top-1/4 h-60 w-60 rounded-full bg-primary-blue blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
            <h1 className="relative mb-10 flex bg-gradient-to-b from-primary-blue to-primary-whitegray bg-clip-text font-eng text-6xl font-bold text-transparent">
                Who are we
            </h1>
            <div className="z-10 flex w-[1000px] flex-row">
                <div className="mr-20 flex w-100 flex-col">
                    <p className="mb-5 flex font-eng text-xl">Developer/ Designer/ Leader</p>
                    <p className="flex font-eng text-sm leading-loose">
                        Google Developer Student Clubs are university based community groups for students interested in
                        Google developer technologies. Students from all undergraduate or graduate programs with an
                        interest in growing as a developer or designer are welcome. By joining a GDSC, students grow
                        their knowledge in a peer-to-peer learning environment and build solutions for local businesses
                        and their community.
                    </p>
                </div>
                <div className="ml-20 flex w-100 flex-col">
                    <p className="mb-5 flex font-kor text-xl">여러 작은 픽셀들이 하나의 큰 이미지로</p>
                    <p className="flex font-kor text-sm leading-loose">
                        Google Developer Student Clubs (GDSC) 프로그램은 학생들이 개발/디자인/리더십 능력을 키울 수
                        있도록 지원하는 프로그램입니다. 기술적 성장을 위한 교육자료를 제공하고 리더십 개발을 위한 다양한
                        활동들을 지원합니다. 학생이 성장할 수 있도록 전세계의 학생 Lead들과의 교류 기회, Google의 이벤트
                        참여, 현업 엔지니어와의 만남 등 다양한 기회를 제공하고 쇼케이스와 워크샵을 통해 역량을 높일 수
                        있도록 돕습니다.
                    </p>
                </div>
            </div>
            <div className="mb-10 mt-5 flex h-32 w-32 animate-[pulse_3s_infinite_100ms] items-center justify-center">
                <SvgIntro />
            </div>
        </div>
    )
}

const Projects = () => {
    return (
        <div className="mt-28 flex flex-col items-center justify-center gap-6">
            <div className="bg-gradient-to-b from-blue-700 to-white bg-clip-text text-5xl font-extrabold text-transparent">
                Project
            </div>
            <div className="mb-12">우리는 이러한 문제점들을 읽어내고, 해결책을 탐구합니다!</div>
            <div className="flex w-[1000px] flex-col items-center gap-10">
                <ProjectCard isReverse={false} projectData={undefined} />
                <ProjectCard isReverse={true} projectData={undefined} />
                <ProjectCard isReverse={false} projectData={undefined} />
                <ProjectCard isReverse={true} projectData={undefined} />
            </div>
        </div>
    )
}

export default function Home() {
    return (
        <div className="h-full w-full">
            <BulkBanner />
            <Intro />
            <Projects />
        </div>
    )
}
