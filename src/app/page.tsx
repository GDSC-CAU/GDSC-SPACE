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

export default function Home() {
    const p1 = '/d.png'
    const p2 = '/f.png'
    return (
        <div className="h-full w-full">
            <BulkBanner />
            <div className="flex flex-col items-center justify-center gap-5 p-5">
                <ProjectCard picture={p1} name="Project Wiro" d1="작업 기간 / 개발자" d2="(두줄 소개)" bool={true} />
                <ProjectCard picture={p2} name="Carbon Hero" d1=":Save The Earth" d2="asfdghjfhdgsf" bool={true} />
            </div>
        </div>
    )
}
