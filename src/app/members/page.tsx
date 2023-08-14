//import Link from 'next/link'
import { MemberCard } from './_components/Membercard'

export type memberData = {
    id: string
    name: string
    role: string
    image: string
}

export default function MemberList() {
    const members: memberData = {
        id: '1',
        name: '유용민',
        role: 'Leader/Developer',
        image: '/yymin1022.png',
    }

    return (
        <main className="flex h-full w-full flex-col items-center justify-between p-24">
            <p>Member List</p>
            <MemberCard member={members} />
        </main>
    )
}
