const Logo = () => {
    return (
        <div className="flex flex-col items-center justify-center gap-32">
            <div className="flex flex-row gap-0">
                <h1 className="bg-gradient-to-br from-red-400 to-red-500 bg-clip-text text-7xl font-bold text-transparent">
                    G
                </h1>
                <h1 className="bg-gradient-to-br from-yellow-400 to-yellow-500 bg-clip-text text-7xl font-bold text-transparent">
                    D
                </h1>
                <h1 className="bg-gradient-to-br from-blue-400 to-sky-500 bg-clip-text text-7xl font-bold text-transparent">
                    S
                </h1>
                <h1 className="bg-gradient-to-br from-emerald-400 to-green-500 bg-clip-text text-7xl font-bold text-transparent">
                    C
                </h1>
            </div>
            Space
        </div>
    )
}

export default function Home() {
    return (
        <main className="flex h-full w-full flex-col items-center justify-between p-24">
            <Logo />
        </main>
    )
}
