import Image from 'next/image'
import Link from 'next/link'

type eventcard = {
    id: string
    category: string
    date: string
    title: string
    content: string
    image: string
}

const imageStyle = {
    borderRadius: '5% 5% 0% 0%',
}

const EventCard = ({ id, category, date, title, content, image }: eventcard) => {
    return (
        <Link href={`/events/${id}`}>
            <div className="group relative h-80 w-60">
                <div className="relative flex h-1/2 w-full items-center justify-end rounded-t-xl">
                    <Image fill src={image} alt="picture" style={imageStyle}></Image>
                </div>
                <div className="absolute h-1/2 w-full rounded-b-xl bg-black ">
                    <div className="px-4 pb-2 pt-4 font-kor text-xs">
                        {' '}
                        {category} ﹒ {date}
                    </div>
                    <div className="px-4 font-eng text-xl"> {title} </div>
                    <div className="p-4 font-kor text-sm"> {content} </div>
                </div>
            </div>
        </Link>
    )
}

export { EventCard }
