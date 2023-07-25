export default function EventView({ params }: { params: { id: string } }) {
    const eventID = params.id
    return (
        <main className="flex h-full w-full flex-col items-center justify-between p-24">
            <p>This is Event View of {eventID}</p>
        </main>
    )
}
