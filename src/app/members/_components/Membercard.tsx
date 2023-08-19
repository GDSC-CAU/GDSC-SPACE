'use client'

import { useState } from 'react'
import { Email, Gdsc, Instagram, Link as LinkIcon } from '~/components/icons'
import { Link$ } from '~/components/index'
import { Member } from '../page'
import { MemberAvatar } from './MemberAvatar'
import { MemberContact, MemberContactProps } from './MemberContact'
import { MemberRoleIcon } from './MemberRoleIcon'

interface MemberCardProps {
    member: Member
    disableFlip?: boolean
}
const MemberCard = ({ member, disableFlip = false }: MemberCardProps) => {
    const [isFrontViewActive, setIsFrontViewActive] = useState(false)

    const toggleCardView = () => {
        setIsFrontViewActive((isFrontViewActive) => !isFrontViewActive)
    }

    return (
        <div
            onClick={toggleCardView}
            className={`perspective-300 relative h-[18rem] w-[12rem] min-w-[12rem] cursor-pointer transition-transform duration-300 transform-style-3d transform-gpu hover:scale-105`}
        >
            <MemberCardFront member={member} isFrontViewActive={isFrontViewActive} />
            {disableFlip === false && <MemberCardBack member={member} isFrontViewActive={isFrontViewActive} />}
        </div>
    )
}

interface MemberCardFrontBackViewProps extends Omit<MemberCardProps, 'disableFlip'> {
    isFrontViewActive: boolean
}
const MemberCardFront = ({ member, isFrontViewActive }: MemberCardFrontBackViewProps) => (
    <section
        className={`absolute inset-0 z-10 h-full w-full transition duration-500 ease-in-out ${
            isFrontViewActive ? 'opacity-0 -rotate-y-180' : 'opacity-100 rotate-y-0'
        }`}
    >
        <MemberAvatar gender={member.gender} imageSrc={member.imagesrc} />
        <MemberRoleIcon role={member.role} />

        <div
            className="absolute bottom-0 left-0 flex h-28 w-full flex-col items-end justify-between rounded-b-xl rounded-tl-[3.5rem] rounded-tr-none bg-white p-3.5"
            style={{
                boxShadow: '-1px -1px 10px rgba(32, 32, 32, 0.2)',
            }}
        >
            <Gdsc width={40} height={40} className="scale-125" />
            <h1 className="mt-3 font-kor text-lg text-black">{member.name}</h1>
            <p className="font-eng text-xs font-light text-black">{member.position}</p>
        </div>
    </section>
)

const MemberCardBack = ({ member, isFrontViewActive }: MemberCardFrontBackViewProps) => {
    const contacts: MemberContactProps[] = [
        { contact: member.email, icon: <Email className="-ml-0.5 scale-75" /> },
        { contact: member.github, icon: <LinkIcon className="-ml-0.5 scale-75" /> },
        { contact: member.instagram, icon: <Instagram className="-ml-0.5 scale-75" /> },
    ]

    return (
        <Link$
            href={`/members/${member.name}`}
            className={`group absolute inset-0 z-0 flex h-full w-full flex-col items-start justify-between rounded-xl bg-[#EBEBEB] px-4 py-5 font-light transition duration-300 ease-in-out ${
                isFrontViewActive === false ? 'opacity-0 rotate-y-180' : 'z-10 opacity-100 rotate-y-0'
            }`}
        >
            <MemberRoleIcon role={member.role} />

            <section className="flex w-full flex-col items-start justify-between">
                <h1 className="font-kor text-lg text-black">{member.nickname}</h1>
                <div className="font-eng text-xs text-primary-purple">{member.position}</div>
                <hr className="mb-2 mt-1 h-1 w-full border-primary-whitegray" />
                <div className="font-kor text-xs text-black">{member.introduction}</div>
            </section>

            <section className="flex flex-col items-start justify-between gap-0.5">
                {contacts.map((contactProps) => (
                    <MemberContact {...contactProps} key={contactProps.contact}></MemberContact>
                ))}
            </section>
        </Link$>
    )
}

export { MemberCard }
