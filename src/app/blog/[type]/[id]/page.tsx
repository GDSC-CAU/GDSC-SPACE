import { Divider, PageHeader } from '~/src/components/common'

const ProjectDetailView = () => {
    return (
        <>
            <div className="relative flex w-full flex-col items-center justify-center gap-10">
                <PageHeader heading="Project" twClass="sticky top-32 z-50 text-5xl" />
                <div className="mt-12 flex w-full flex-col items-center justify-center gap-14">
                    <div className="flex w-full items-center justify-center p-4 text-7xl font-bold">Thanks Clip</div>
                    <div className="flex w-full flex-row items-center justify-between">
                        <div className="flex w-full items-center justify-center p-2 text-xl">People</div>
                        <div className="flex w-full items-center justify-center p-2 text-xl">Date</div>
                    </div>
                </div>
            </div>
        </>
    )
}

const DevDesignDetailView = ({ type }: { type: string }) => {
    return (
        <>
            <div className="relative flex w-full flex-col items-center justify-center gap-7">
                <PageHeader heading={type} twClass="sticky top-32 z-50 text-5xl" />
                <div className="mt-12 flex w-full flex-col items-center justify-center">
                    <div className="flex w-full items-center justify-center border-[0.5px] border-white p-4 text-xl font-bold">
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
            </div>
        </>
    )
}

export default function BlogDetailView({ params }: { params: { id: string; type: string } }) {
    const blogID = params.id
    const type = params.type
    return (
        <main className="flex h-full w-full flex-col items-center justify-between px-24 py-5">
            {type === 'Project' ? <ProjectDetailView /> : <DevDesignDetailView type={type} />}
        </main>
    )
}
