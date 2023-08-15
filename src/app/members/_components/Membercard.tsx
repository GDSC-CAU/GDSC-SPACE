import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { Gdsc } from '~/components/icons'
import { MemberData } from '../page'

const imageStyle = {
    borderRadius: '5% 5% 5% 5%',
}

const infoStyle = {
    borderRadius: '50% 0% 5% 5%',
}

const MemberCard = ({ member }: { member: MemberData }) => {
    const [showIntroduction, setShowIntroduction] = useState(false)
    const [isHovered, setIsHovered] = useState(false)

    const toggleIntroduction = () => {
        setShowIntroduction(!showIntroduction)
    }

    return (
        <div
            className={`perspective group relative h-[250px] w-40 cursor-pointer`}
            onClick={toggleIntroduction}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
                transform: isHovered ? 'scale(1.05)' : 'scale(1)',
                transition: 'transform 0.3s ease-in-out',
            }}
        >
            <div className="preserve-3d group-hover:my-rotate-y-180 relative h-full w-full duration-1000">
                {/* Front Content */}
                <div className="backface-hidden absolute h-full w-full">
                    <Link href={`/members/${member.name}`}>
                        <Image fill src={member.image} alt="mem_image" objectFit="cover" style={imageStyle} />
                        <div
                            className="absolute bottom-0 left-0 h-[110px] w-full rounded-b-xl bg-white p-2"
                            style={{ ...infoStyle, boxShadow: '-1px -2px 6px rgba(0, 0, 0, 0.3)' }}
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
                    className={`my-rotate-y-180 backface-hidden absolute h-full w-full overflow-hidden ${
                        showIntroduction ? '' : 'hidden'
                    }`}
                >
                    <div className="group relative h-[250px] w-40 bg-white" style={{ ...imageStyle }}>
                        <div className="margin" style={{ padding: '10px' }}>
                            <div className="text-left font-kor text-lg text-black" style={{ fontWeight: 500 }}>
                                {member.nickname}
                            </div>
                            <div className="text-left font-eng text-xs text-primary-purple">{member.position}</div>
                            <hr className="my-2 border-primary-whitegray" />
                            <div className="text-left font-kor text-xs text-black">{member.introduction}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { MemberCard }
