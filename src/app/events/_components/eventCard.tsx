function EventCard() {
    return (
        <div className="group h-32 w-32 rounded-xl">
            <div className="flex h-1/5 w-full items-center justify-end rounded-t-xl bg-black px-1.5 group-hover:h-0">
                <div className="flex h-4 w-4 items-center justify-center rounded-full bg-gray-300 text-black group-hover:invisible">
                    {'>'}
                </div>
            </div>
            <div className="relative h-full w-full">
                <div className="absolute h-4/5 w-full rounded-b-xl bg-orange-400 group-hover:h-32 group-hover:rounded-xl"></div>
                <div className="invisible absolute right-1.5 top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-gray-300 text-black group-hover:visible">
                    {'>'}
                </div>
            </div>
        </div>
    )
}

export default EventCard
