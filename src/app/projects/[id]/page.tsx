export default function ProjectPage({ params }: { params: { id: string } }) {
    const projectID = params.id
    return (
        <main className="flex h-full w-full flex-col items-center justify-between p-24">
            <p>This is Project View of {projectID}</p>
        </main>
    )
}
