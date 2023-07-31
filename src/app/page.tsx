const Logo = () => {
    return (
        <div className="flex flex-col items-center justify-center gap-32">
            <div className="flex flex-row gap-0">
                <h1 className="bg-gradient-to-br from-primary-hotpink to-primary-hotpink bg-clip-text text-7xl font-bold text-transparent">
                    G
                </h1>
                <h1 className="bg-gradient-to-br from-primary-yellow to-yellow-500 bg-clip-text text-7xl font-bold text-transparent">
                    D
                </h1>
                <h1 className="bg-gradient-to-br from-primary-blue to-sky-500 bg-clip-text text-7xl font-bold text-transparent">
                    S
                </h1>
                <h1 className="bg-gradient-to-br from-primary-teal to-green-500 bg-clip-text text-7xl font-bold text-transparent">
                    C
                </h1>
            </div>
            가상 Banner 영역입니다
        </div>
    )
}

export default function Home() {
    return (
        <>
            <div className="flex h-full w-full flex-col items-center justify-between">
                <div className="py-40">
                    <Logo />
                </div>
            </div>
        </>
    )
}
