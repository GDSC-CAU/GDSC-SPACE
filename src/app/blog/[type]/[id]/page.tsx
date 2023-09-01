import { IconButton, Link$, PageHeader } from '~/src/components/common'
import { Arrow } from '~/src/components/icons'

const ProjectDetailView = () => {
    return (
        <>
            <div className="relative flex w-full flex-col items-center justify-center gap-10">
                <div className="flex w-full flex-col items-center justify-center gap-10">
                    <div className="flex w-full items-center justify-center p-4 text-4xl font-bold md:text-7xl">
                        Thanks Clip
                    </div>
                    <div className="flex w-full flex-row items-center justify-between">
                        <div className="flex w-full items-center justify-center p-2 text-lg md:text-xl">People</div>
                        <div className="flex w-full items-center justify-center p-2 text-lg md:text-xl">Date</div>
                    </div>
                </div>
                <div>content</div>
            </div>
        </>
    )
}

const DevDesignDetailView = () => {
    return (
        <>
            <div className="relative flex w-full flex-col items-center justify-center gap-7">
                <div className="mt-10 flex w-full flex-col items-center justify-center md:mt-12">
                    <div className="flex w-full items-center justify-center border-[0.5px] border-white p-4 text-lg font-bold md:text-xl">
                        title
                    </div>
                    <div className="flex w-full flex-row items-center justify-center">
                        <div className="flex w-full items-center justify-center border-[0.5px] border-white p-2">
                            Tag
                        </div>
                        <div className="flex w-full items-center justify-center border-[0.5px] border-white p-2">
                            name
                        </div>
                        <div className="flex w-full items-center justify-center border-[0.5px] border-white p-2">
                            Date
                        </div>
                    </div>
                </div>
                <div>content</div>
            </div>
        </>
    )
}

const PrevNextButton = () => {
    return (
        <>
            <div className="flex w-full flex-row items-center justify-between">
                <div className="group flex flex-row items-center gap-3 rounded-2xl p-2 hover:border-[0.5px] hover:border-white">
                    <IconButton twClass="rotate-180">
                        <Arrow />
                    </IconButton>
                    <div>Previous post</div>
                </div>
                <div className="group flex flex-row items-center gap-3 rounded-2xl p-2 hover:border-[0.5px] hover:border-white">
                    <div>Next post</div>
                    <IconButton>
                        <Arrow />
                    </IconButton>
                </div>
            </div>
        </>
    )
}

export default function BlogDetailView({ params }: { params: { id: string; type: string } }) {
    const blogID = params.id
    const type = params.type
    return (
        <main className="flex h-full w-full flex-col items-center justify-between md:gap-5 md:px-24 md:pb-5">
            <PageHeader
                heading={`${type}`}
                twClass="w-full sticky top-14 text-5xl bg-theme-background py-8 md:top-20"
            />
            {type === 'Project' ? <ProjectDetailView /> : <DevDesignDetailView />}
            <PrevNextButton />
        </main>
    )
}
