export default function BlogPostLoading() {
    return (
        <section className="flex h-screen w-full min-w-[50%] animate-pulse flex-col items-center justify-center gap-12">
            <div className="my-10 flex h-full w-full animate-pulse flex-col gap-4 rounded-xl bg-black p-4">
                <div className="h-4 w-32 rounded-xl bg-primary-darkgray"></div>
                <div className="h-20 w-full rounded-xl bg-primary-darkgray"></div>
                <div className="flex h-full w-full flex-col items-start justify-center gap-8 rounded-xl bg-primary-darkgray">
                    <div className="h-4 w-full bg-black"></div>
                    <div className="h-4 w-full bg-black"></div>
                    <div className="h-4 w-full bg-black"></div>
                    <div className="h-4 w-full bg-black"></div>
                    <div className="h-4 w-full bg-black"></div>
                    <div className="h-4 w-full bg-black"></div>
                    <div className="h-4 w-full bg-black"></div>
                </div>
            </div>
        </section>
    )
}
