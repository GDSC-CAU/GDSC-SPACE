import Image from 'next/image'
import Link from 'next/link'
import { memberData } from '../page'

const imageStyle = {
    borderRadius: '5% 5% 5% 5%',
}

const infoStyle = {
    borderRadius: '50% 0% 5% 5%',
    height: '110px',
}

const MemberCard = ({ member }: { member: memberData }) => {
    return (
        <Link href={`/members/${member.id}`}>
            <div className="h-200 group relative w-40">
                <div className="flex h-[250px] w-full items-center justify-start rounded-t-xl">
                    <Image src={member.image} alt="mem_image" layout="fill" objectFit="cover" style={imageStyle} />
                </div>
                <div
                    className="absolute bottom-0 left-0 w-full rounded-b-xl bg-white p-2"
                    style={{ ...infoStyle, boxShadow: '-1px -2px 6px rgba(0, 0, 0, 0.2)' }}
                >
                    <div className="mt-1 flex justify-end px-1">
                        <Image src="/GDSC_logo.png" alt="GDSC_logo" width={40} height={40} />
                    </div>
                    <div className="mt-5 px-1 text-right font-kor text-lg text-black">{member.name}</div>
                    <div className="px-1 text-right font-eng text-xs text-black">{member.role}</div>
                </div>
            </div>
        </Link>
    )
}

export { MemberCard }
