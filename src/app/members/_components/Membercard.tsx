'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { Gdsc } from '~/components/icons'
import { Member } from '../page'

const MemberCard = ({ member }: { member: Member }) => {
    const [showIntroduction, setShowIntroduction] = useState(false)

    const toggleIntroduction = () => {
        setShowIntroduction((showIntroduction) => !showIntroduction)
    } //이전 상태 조회할 때, 함수 넣기

    const getImgSrc = () => {
        if (!member.imagesrc) {
            return member.gender === 'Female' ? '/female.png' : '/male.png'
        }
        return member.imagesrc
    }

    return (
        <div
            className="group relative h-[250px] w-40 cursor-pointer transition-transform transform-gpu hover:scale-105"
            onClick={toggleIntroduction}
        >
            <div className="preserve-3d group-hover:my-rotate-y-180 duration-5000 relative h-full w-full">
                {/* Front Content */}
                <div className="absolute h-full w-full backface-hidden">
                    <Link href={`/members/${member.name}`}>
                        <Image
                            fill
                            src={getImgSrc()}
                            alt="mem_image"
                            objectFit="cover"
                            style={{ borderRadius: '5% 5% 5% 5%' }}
                        />
                        <div
                            className="absolute bottom-0 left-0 h-[110px] w-full rounded-b-xl bg-white p-2"
                            style={{ borderRadius: '50% 0% 5% 5%', boxShadow: '-1px -2px 6px rgba(0, 0, 0, 0.3)' }}
                        >
                            <div className="flex justify-end px-1">
                                <Gdsc width={40} height={40} />
                            </div>
                            <div className="mt-3 text-right font-kor text-lg text-black">{member.name}</div>
                            <div className="text-right font-eng text-xs text-black">{member.position}</div>
                        </div>
                    </Link>
                </div>

                {/* Back Content */}
                <div
                    className={`my-rotate-y-180 absolute h-full w-full overflow-hidden backface-hidden ${
                        showIntroduction ? '' : 'hidden'
                    }`}
                >
                    <div className="group relative h-[250px] w-40 bg-white" style={{ borderRadius: '5% 5% 5% 5%' }}>
                        <div className="mx-2" style={{ padding: '10px' }}>
                            <div className="text-left font-kor text-lg text-black" style={{ fontWeight: 500 }}>
                                {member.nickname}
                            </div>
                            <div className="text-left font-eng text-xs text-primary-purple">{member.position}</div>
                            <hr className="my-2 border-primary-whitegray" />
                            <div className="text-left font-kor text-xs text-black">{member.introduction}</div>
                            <div className="absolute bottom-0 my-2">
                                <div className="text-left font-kor text-xs text-black">{member.github}</div>
                                <div className="text-left font-kor text-xs text-black">{member.email}</div>
                                <div className="text-left font-kor text-xs text-black">{member.instagram}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { MemberCard }
