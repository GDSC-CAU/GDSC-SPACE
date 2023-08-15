'use client'
import { useEffect, useState } from 'react'
import { MemberCard } from './_components/Membercard'

export type MemberData = {
    name: string
    nickname?: string
    role: 'lead' | 'core' | 'member'
    image: string
    position: string
    introduction: string
}

export default function MemberList() {
    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
    }, [])

    const members: MemberData = {
        name: '유용민',
        nickname: 'YYMIN',
        role: 'lead',
        image: '/GDSC_logo.png',
        position: 'Cloud Server / flutter',
        introduction: '안녕하세요, GDSC 3기 리더 유용민입니다. 잘 부탁드립니다:)',
    }

    return (
        <main className="flex h-full w-full flex-col items-center justify-between p-24">
            {isClient && <MemberCard member={members} />}
        </main>
    )
}
