import Image from 'next/image'
import Link from 'next/link'
import { Instagram } from '~/components/icons'
import { Email } from '~/components/icons'
import { Share } from '~/components/icons'
export default function EventView({ params }: { params: { id: string } }) {
    const eventID = params.id //{evenID}
    const title = 'PRO, GRAMMING' // 노션에서의 이벤트 글 제목

    return (
        <main className="h-full w-full">
            <div className="relative ml-[-13rem] h-[35rem] w-[calc(100%+26rem)]">
                <Image
                    fill
                    style={{ objectFit: 'cover' }}
                    alt="pixabay picture1"
                    src="https://cdn.pixabay.com/photo/2023/07/24/01/31/plane-8145957_1280.jpg"
                    priority
                />
            </div>

            <div className="my-12 flex flex-row items-center justify-between">
                <div className="text-theme-background">이렇게 해도 되나 </div>
                <button className="h-8 w-28 cursor-pointer rounded-full border-4 border-blue-600 bg-blue-600 duration-500 hover:border-blue-700 hover:bg-blue-700 ">
                    Join
                </button>
                <div className="flex flex-row gap-2">
                    <Link href={'/blog'}>
                        <Share />
                    </Link>
                    <Link href={'/members'}>
                        <Instagram />
                    </Link>
                    <Link href={'/projects'}>
                        <Email />
                    </Link>
                </div>
            </div>

            <div className="flex h-full w-full flex-col items-center justify-between">
                <hr className="mx-auto  w-full bg-gray-100" />
                <h1 className="p-16 text-5xl">{title}</h1>
                <div className="flex w-full items-center justify-center bg-black">
                    <Image
                        src="https://cdn.pixabay.com/photo/2023/07/24/01/31/plane-8145957_1280.jpg"
                        alt="pixabay picture3"
                        priority
                        width={600}
                        height={800}
                    />
                </div>

                <div className="text-center">▴ GDSC 잡 페어 행사</div>
                <p className="mb-28 mt-12"></p>
                <div className="flex w-full items-center justify-center bg-black">
                    <Image
                        src="https://cdn.pixabay.com/photo/2023/07/19/04/56/european-shorthair-8136065_1280.jpg"
                        alt="pixabay picture3"
                        priority
                        width={600}
                        height={800}
                    />
                </div>
            </div>
        </main>
    )
}
