'use client'

import { useRef, useState } from 'react'
import type { MEMBER_DATA } from '../../interfaces/common'
import { MemberCard } from './_components'

export default function MemberList() {
    const bulkMembers: Array<MEMBER_DATA> = [
        {
            MEMBER_INSTAGRAM: 'instagram',
            MEMBER_IMAGE: '',
            MEMBER_LINK_BEHANCE: '',
            MEMBER_NAME: '유용민',
            MEMBER_GENDER: 'Male',
            MEMBER_NICKNAME: 'DEV.LR',
            MEMBER_ROLE: 'Lead',
            MEMBER_YEAR: '2기',
            MEMBER_POSITION: 'Cloud Server / flutter',
            MEMBER_COMMENT: '안녕하세요, GDSC 3기 리더 유용민입니다. 잘 부탁드립니다:)',
            MEMBER_LINK_GITHUB: 'github.com/yymin1022',
            MEMBER_EMAIL: 'yymin1022@gmail.com',
        },
        {
            MEMBER_INSTAGRAM: 'instagram',
            MEMBER_IMAGE: '',
            MEMBER_LINK_BEHANCE: '',
            MEMBER_NAME: '장준성',
            MEMBER_GENDER: 'Male',
            MEMBER_NICKNAME: '단팥초',
            MEMBER_ROLE: 'Core',
            MEMBER_YEAR: '2기',
            MEMBER_POSITION: 'Front-End',
            MEMBER_COMMENT: '안녕하세요~!~!',
            MEMBER_LINK_GITHUB: 'github.com/danpachodanpachodanpacho',
            MEMBER_EMAIL: 'danpa725@cau.ac.kr',
        },
        {
            MEMBER_INSTAGRAM: 'instagram',
            MEMBER_IMAGE: '',
            MEMBER_LINK_BEHANCE: '',
            MEMBER_NAME: '박지우',
            MEMBER_GENDER: 'Female',
            MEMBER_ROLE: 'Member',
            MEMBER_YEAR: '3기',
            MEMBER_NICKNAME: 'Jiwoo',
            MEMBER_POSITION: 'Front-End',
            MEMBER_COMMENT: '안녕하세용!!',
            MEMBER_LINK_GITHUB: 'github.com/jujuredt',
            MEMBER_EMAIL: 'juju.0_0._',
        },
    ]

    const [selectedYear, setSelectedYear] = useState<string>('1st')

    const renderMembersByYear = (year: string) => {
        const filteredMembers = members.filter((member) => member.year === year)
        const chunkedMembers = chunkArray(filteredMembers, 6)
        return chunkedMembers.map((chunk, rowIndex) => (
            <div
                key={rowIndex}
                className="mb-10 pb-9 pl-2 pt-2 scrollbar-hide"
                style={{
                    display: 'flex',
                    overflowX: 'auto',
                    overflowY: 'hidden',
                }}
            >
                {chunk.map((member, index) => (
                    <div
                        key={index}
                        style={{
                            flex: '0 0 16.666%',
                            marginRight: '1rem',
                            height: '260px',
                        }}
                    >
                        <MemberCard member={member} key={`${member.name}-${member.position}`} />
                    </div>
                ))}
            </div>
        ))
    }
    /**
     <div className="flex h-full w-full flex-row items-center justify-between gap-10">
        {bulkMembers.map((member) => (
            <MemberCard member={member} key={`${member.MEMBER_NAME}-${member.MEMBER_POSITION}`} />
        ))}
    </div>
    */

    const chunkArray = (arr: any[], size: number) => {
        const chunkedArray = []
        for (let i = 0; i < arr.length; i += size) {
            chunkedArray.push(arr.slice(i, i + size))
        }
        return chunkedArray
    }

    const scrollContainerRef = useRef<HTMLDivElement | null>(null)

    const handleScroll = (event: React.WheelEvent<HTMLDivElement>) => {
        if (scrollContainerRef.current) {
            const delta = event.deltaY
            scrollContainerRef.current.scrollLeft += delta
            event.preventDefault()
        }
    }

    return (
        <main className="flex h-full w-full flex-col p-5">
            <div className="mb-10 flex">
                <button
                    onClick={() => setSelectedYear('1st')}
                    className={`mr-10 h-10 w-16 rounded-full bg-primary-blue p-2 font-bold text-white hover:underline`}
                >
                    1st
                </button>
                <button
                    onClick={() => setSelectedYear('2nd')}
                    className={`mr-10 h-10 w-16 rounded-full bg-primary-blue p-2 font-bold text-white hover:underline`}
                >
                    2nd
                </button>
                <button
                    onClick={() => setSelectedYear('3rd')}
                    className={`h-10 w-16 rounded-full bg-primary-blue p-2 font-bold text-white hover:underline`}
                >
                    3rd
                </button>
            </div>
            <div
                ref={scrollContainerRef}
                className="overflow-x-auto overflow-y-hidden"
                onWheel={handleScroll}
                style={{ display: 'flex', flexDirection: 'column' }}
            >
                {renderMembersByYear(selectedYear)}
            </div>
        </main>
    )
}
