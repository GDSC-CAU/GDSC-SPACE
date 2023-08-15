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
    }

    const getImgSrc = () => {
        if (!member.imageSrc) {
            return member.gender === 'Female' ? '/female.png' : '/male.png'
        }
        return member.imageSrc
    }

    return (
        <div
            className="group relative h-[250px] w-40 transform-gpu cursor-pointer transition-transform hover:scale-105"
            onClick={toggleIntroduction}
        >
            <div className="preserve-3d group-hover:my-rotate-y-180 duration-5000 relative h-full w-full">
                {/* Front Content */}
                <div className="backface-hidden absolute h-full w-full">
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
                            <div className="font-kor mt-3 text-right text-lg text-black">{member.name}</div>
                            <div className="font-eng text-right text-xs text-black">{member.position}</div>
                        </div>
                    </Link>
                </div>

                {/* Back Content */}
                <div
                    className={`my-rotate-y-180 backface-hidden absolute h-full w-full overflow-hidden ${
                        showIntroduction ? '' : 'hidden'
                    }`}
                >
                    <div className="group relative h-[250px] w-40 bg-white" style={{ borderRadius: '5% 5% 5% 5%' }}>
                        <div className="mx-2" style={{ padding: '10px' }}>
                            <div className="font-kor text-left text-lg text-black" style={{ fontWeight: 500 }}>
                                {member.nickname}
                            </div>
                            <div className="font-eng text-primary-purple text-left text-xs">{member.position}</div>
                            <hr className="border-primary-whitegray my-2" />
                            <div className="font-kor text-left text-xs text-black">{member.introduction}</div>
                            <div className="absolute bottom-0 my-2">
                                <div className="font-kor text-left text-xs text-black">{member.github}</div>
                                <div className="font-kor text-left text-xs text-black">{member.email}</div>
                                <div className="font-kor text-left text-xs text-black">{member.instagram}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { MemberCard }
