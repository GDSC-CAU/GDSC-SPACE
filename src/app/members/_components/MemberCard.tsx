'use client'

import { useState } from 'react'
import { Email, GDGoC, Instagram, Link as LinkIcon } from '~/components/icons'
import { MEMBER_DATA } from '~/src/interfaces/Common'
import { MemberAvatar } from './MemberAvatar'
import { MemberContact, MemberContactProps } from './MemberContact'
import { MemberRoleIcon } from './MemberRoleIcon'

interface MemberCardProps {
    member: MEMBER_DATA
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
            className={`relative h-48 w-32 min-w-[8rem] cursor-pointer transition-transform duration-300 perspective-500 transform-style-3d transform-gpu md:h-72 md:w-48 md:min-w-[12rem] md:hover:scale-105`}
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
        className={`relative inset-0 z-10 h-full w-full transition duration-300 ease-in-out ${
            isFrontViewActive ? 'opacity-0 -rotate-y-180' : 'opacity-100 rotate-y-0'
        }`}
    >
        <MemberAvatar MEMBER_GENDER={member.MEMBER_GENDER} MEMBER_IMAGE={member.MEMBER_IMAGE} />
        <MemberRoleIcon MEMBER_ROLE={member.MEMBER_ROLE} />

        <div
            className="absolute bottom-0 left-0 flex h-20 w-full flex-col items-end justify-between rounded-b-xl rounded-tl-[3.5rem] rounded-tr-none bg-white p-3 md:h-28"
            style={{
                boxShadow: '-1px -1px 10px rgba(32, 32, 32, 0.2)',
            }}
        >
            <div className="block md:hidden">
                <GDGoC width={20} height={20} className="scale-150" />
            </div>
            <div className="hidden md:block">
                <GDGoC width={40} height={40} className="scale-125" />
            </div>
            <h1 className="mt-1 font-kor text-sm text-black md:text-lg">{member.MEMBER_NAME}</h1>
            <p className="font-eng text-3xs font-light text-black md:text-xxs">{member.MEMBER_POSITION}</p>
        </div>
    </section>
)

const MemberCardBack = ({ member, isFrontViewActive }: MemberCardFrontBackViewProps) => {
    const contacts: MemberContactProps[] = [
        { contact: member.MEMBER_EMAIL, icon: <Email className="-ml-0.5  stroke-black scale-75" /> },
        { contact: member.MEMBER_LINK_GITHUB, icon: <LinkIcon className="-ml-0.5  stroke-black scale-75" /> },
        { contact: member.MEMBER_LINK_BEHANCE, icon: <Instagram className="-ml-0.5  stroke-black scale-75" /> },
        { contact: member.MEMBER_INSTAGRAM, icon: <Instagram className="-ml-0.5 stroke-black scale-75" /> },
    ]

    return (
        <section
            className={`group absolute inset-0 z-0 flex h-full w-full flex-col items-start justify-between rounded-xl bg-[#EBEBEB] px-2 py-3 font-light transition duration-300 ease-in-out md:px-4 md:py-5 ${
                isFrontViewActive === false ? 'opacity-0 rotate-y-180' : 'z-10 opacity-100 rotate-y-0'
            }`}
        >
            <MemberRoleIcon MEMBER_ROLE={member.MEMBER_ROLE} />

            <section className="flex h-full min-h-0 w-full flex-col items-start justify-between">
                <h1 className="font-kor text-sm text-black md:text-lg">{member.MEMBER_NICKNAME}</h1>
                <div className="font-eng text-xxs text-primary-purple md:text-xs">{member.MEMBER_POSITION}</div>
                <hr className="mb-2 mt-1 h-1 w-full border-primary-whitegray" />
                <div className="mb-1 h-0 min-h-0 grow overflow-y-auto font-kor text-xxs text-black scrollbar-hide md:text-xs">
                    {member.MEMBER_COMMENT}
                    <div className="visible mt-3 md:hidden">
                        {contacts.map((contactProps, index) => (
                            <MemberContact {...contactProps} key={`${contactProps.contact}-${index}`}></MemberContact>
                        ))}
                    </div>
                </div>
            </section>

            <section className="hidden flex-col items-start justify-between gap-0.5 md:visible md:flex">
                {contacts.map((contactProps, index) => (
                    <MemberContact {...contactProps} key={`${contactProps.contact}-${index}`}></MemberContact>
                ))}
            </section>
        </section>
    )
}

export { MemberCard }
