export default function BlogView({ params }: { params: { id: string } }) {
    const blogID = params.id
    return (
        <main className="flex h-full w-full flex-col items-center justify-between p-24">
            <p>This is Blog View of {blogID}</p>
        </main>
    )
}
