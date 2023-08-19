import { type } from 'os'
import ProjectCard from './projects/_components/ProjectCard'
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

export default function Home() {
    return (
        <div className="h-full w-full">
            <BulkBanner />
            <div className="mt-28 flex flex-col items-center justify-center gap-6">
                <div className="bg-gradient-to-b from-blue-700 to-white bg-clip-text text-5xl font-extrabold text-transparent">
                    Project
                </div>
                <div className="mb-12">우리는 이러한 문제점들을 읽어내고, 해결책을 탐구합니다!</div>
            </div>
            <div className="flex flex-col items-center justify-center gap-10 ">
                <ProjectCard isReverse={true} />
                <ProjectCard isReverse={false} />
                <ProjectCard isReverse={true} />
                <ProjectCard isReverse={false} />
            </div>
        </div>
    )
}
