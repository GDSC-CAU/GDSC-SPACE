import Image from 'next/image'

export default function EventView({ params }: { params: { id: string } }) {
    const eventID = params.id //{evenID}
    const title = 'PRO, GRAMMING' // 노션에서의 이벤트 글 제목

    return (
        <main>
            <div className="mb-96">
                <Image
                    src="https://cdn.pixabay.com/photo/2023/07/27/03/27/fireworks-8152353_1280.jpg"
                    alt="pixabay picture1"
                    // priority
                    // width={500}
                    // height={500}
                    layout="fill"
                    objectFit="cover"
                    style={{
                        maxHeight: '700px',
                    }}
                />
            </div>

            <div className="mb-12 flex flex-row items-center justify-center pt-72">
                <button className=" h-8 w-28 cursor-pointer rounded-full border-4 border-blue-600 bg-blue-600 duration-500 hover:border-blue-700 hover:bg-blue-700">
                    Join
                </button>
                <div className="flex-end flex flex-row gap-2">
                    <Image
                        //fill
                        src="/events/share.png"
                        alt="share icon"
                        width={25}
                        height={25}
                    />
                    <Image
                        //fill
                        src="/events/insta.png"
                        alt="instagram icon"
                        width={25}
                        height={25}
                    />
                    <Image
                        //fill
                        src="/events/email.png"
                        alt="email icon"
                        width={25}
                        height={25}
                    />
                </div>
            </div>

            <div className="flex h-full w-full flex-col items-center justify-between ">
                <hr className="mx-auto  w-full bg-gray-100" />
                <h1 className="p-16 text-5xl">{title}</h1>
                <div className="flex w-full items-center justify-center bg-black">
                    <Image
                        src="https://cdn.pixabay.com/photo/2023/07/24/01/31/plane-8145957_1280.jpg"
                        alt="pixabay picture2"
                        priority
                        width={500}
                        height={700}
                    />
                </div>
                <div className="text-center">▴ GDSC 잡 페어 행사</div>
                <p className="mb-28 mt-12">
                    Google Developer Student Clubs (GDSC) 프로그램은 학생들이 개발/리더십 능력을 키울 수 있도록 지원하는
                    프로그램입니다. 기술적 성장을 위한 교육자료를 제공하고 리더십 개발을 위한 다양한 활동들을
                    지원합니다. 학생이 성장할 수 있도록 전세계의 학생 Lead들과의 교류 기회, Google의 이벤트 참여, 현업
                    엔지니어와의 만남 등 다양한 기회를 제공하고 쇼케이스/워크샵을 통해 역량을 높일 수 있도록 돕습니다.
                </p>
                <div className="flex w-full items-center justify-center bg-black">
                    <Image
                        src="https://cdn.pixabay.com/photo/2023/07/19/04/56/european-shorthair-8136065_1280.jpg"
                        alt="pixabay picture3"
                        priority
                        width={500}
                        height={500}
                    />
                </div>
            </div>
        </main>
    )
}
