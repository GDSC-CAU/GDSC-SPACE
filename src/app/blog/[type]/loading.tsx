export default function BlogLoading() {
    return (
        <section className="flex h-full w-full min-w-[50%] animate-pulse flex-col items-center justify-center gap-12">
            <div className="w-full flex-col items-center justify-center gap-10 pt-10">
                {[...Array(6)].map((_, index) => (
                    <div
                        className="my-10 flex h-fit w-full animate-pulse flex-col gap-4 rounded-xl bg-black p-4"
                        key={index}
                    >
                        <div className="h-4 w-32 rounded-xl bg-primary-darkgray"></div>
                        <div className="h-20 w-full rounded-xl bg-primary-darkgray"></div>
                    </div>
                ))}
            </div>
        </section>
    )
}
