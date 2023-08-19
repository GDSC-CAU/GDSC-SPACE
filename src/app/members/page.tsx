'use client'

import React, { useRef, useState } from 'react'
import { MemberCard } from './_components/Membercard'

export type Member = {
    name: string
    gender: 'Male' | 'Female'
    nickname?: string
    role: 'Lead' | 'Core' | 'Member'
    imagesrc?: string
    year: '1st' | '2nd' | '3rd'
    position: string
    introduction: string
    github?: string
    email?: string
    instagram?: string
}

export default function MemberList() {
    const members: Member[] = [
        {
            name: '김여진',
            gender: 'Male',
            nickname: 'DEV.LR',
            role: 'Lead',
            year: '1st',
            position: 'Cloud Server / flutter',
            introduction: '안녕하세요, GDSC 3rd 리더 유용민입니다. 잘 부탁드립니다:)',
            github: 'github.com/yymin1022',
            email: 'yymin1022@gmail.com',
            instagram: '@useful_min',
        },
        {
            name: '김여진',
            gender: 'Male',
            nickname: 'DEV.LR',
            role: 'Lead',
            year: '2nd',
            position: 'Cloud Server / flutter',
            introduction: '안녕하세요, GDSC 3rd 리더 유용민입니다. 잘 부탁드립니다:)',
            github: 'github.com/yymin1022',
            email: 'yymin1022@gmail.com',
            instagram: '@useful_min',
        },
        {
            name: '유용민',
            gender: 'Male',
            nickname: 'DEV.LR',
            role: 'Lead',
            imagesrc: '/GDSC_logo.png',
            year: '2nd',
            position: 'Cloud Server / flutter',
            introduction: '안녕하세요, GDSC 3rd 리더 유용민입니다. 잘 부탁드립니다:)',
            github: 'github.com/yymin1022',
            email: 'yymin1022@gmail.com',
            instagram: '@useful_min',
        },
        {
            name: '장준성',
            gender: 'Male',
            nickname: '단팥초',
            role: 'Core',
            year: '2nd',
            position: 'Front-End',
            introduction: '안녕하세요~!~!',
            github: 'github.com/danpacho',
            email: 'danpa725@cau.ac.kr',
        },
        {
            name: '장준성',
            gender: 'Female',
            nickname: '단팥초',
            role: 'Core',
            year: '2nd',
            position: 'Front-End',
            introduction: '안녕하세요~!~!',
            github: 'github.com/danpacho',
            email: 'danpa725@cau.ac.kr',
        },
        {
            name: '장준성',
            gender: 'Male',
            nickname: '단팥초',
            role: 'Core',
            year: '2nd',
            position: 'Front-End',
            introduction: '안녕하세요~!~!',
            github: 'github.com/danpacho',
            email: 'danpa725@cau.ac.kr',
        },
        {
            name: '장준성',
            gender: 'Male',
            nickname: '단팥초',
            role: 'Core',
            year: '2nd',
            position: 'Front-End',
            introduction: '안녕하세요~!~!',
            github: 'github.com/danpacho',
            email: 'danpa725@cau.ac.kr',
        },
        {
            name: '장준성',
            gender: 'Female',
            nickname: '단팥초',
            role: 'Core',
            year: '2nd',
            position: 'Front-End',
            introduction: '안녕하세요~!~!',
            github: 'github.com/danpacho',
            email: 'danpa725@cau.ac.kr',
        },
        {
            name: '유용민',
            gender: 'Male',
            nickname: 'DEV.LR',
            role: 'Lead',
            imagesrc: '/GDSC_logo.png',
            year: '1st',
            position: 'Cloud Server / flutter',
            introduction: '안녕하세요, GDSC 3rd 리더 유용민입니다. 잘 부탁드립니다:)',
            github: 'github.com/yymin1022',
            email: 'yymin1022@gmail.com',
            instagram: '@useful_min',
        },
        {
            name: '유용민',
            gender: 'Male',
            nickname: 'DEV.LR',
            role: 'Lead',
            imagesrc: '/GDSC_logo.png',
            year: '3rd',
            position: 'Cloud Server / flutter',
            introduction: '안녕하세요, GDSC 3rd 리더 유용민입니다. 잘 부탁드립니다:)',
            github: 'github.com/yymin1022',
            email: 'yymin1022@gmail.com',
            instagram: '@useful_min',
        },
        {
            name: '유용민',
            gender: 'Male',
            nickname: 'DEV.LR',
            role: 'Lead',
            year: '2nd',
            position: 'Cloud Server / flutter',
            introduction: '안녕하세요, GDSC 3rd 리더 유용민입니다. 잘 부탁드립니다:)',
            github: 'github.com/yymin1022',
            email: 'yymin1022@gmail.com',
            instagram: '@useful_min',
        },
        {
            name: '박지우',
            gender: 'Female',
            role: 'Member',
            year: '2nd',
            position: 'Front-End',
            introduction: '안녕하세용!!',
            github: 'github.com/jujuredt',
            email: 'juju.0_0._',
        },
        {
            name: '박지우',
            gender: 'Female',
            role: 'Member',
            year: '2nd',
            position: 'Front-End',
            introduction: '안녕하세용!!',
            github: 'github.com/jujuredt',
            email: 'juju.0_0._',
        },
        {
            name: '박지우',
            gender: 'Female',
            role: 'Member',
            year: '2nd',
            position: 'Front-End',
            introduction: '안녕하세용!!',
            github: 'github.com/jujuredt',
            email: 'juju.0_0._',
        },
        {
            name: '박지우',
            gender: 'Female',
            role: 'Core',
            year: '2nd',
            position: 'Front-End',
            introduction: '안녕하세용!!',
            github: 'github.com/jujuredt',
            email: 'juju.0_0._',
        },
        {
            name: '박지우',
            gender: 'Male',
            role: 'Lead',
            year: '2nd',
            position: 'Front-End',
            introduction: '안녕하세용!!',
            github: 'github.com/jujuredt',
            email: 'juju.0_0._',
        },
        {
            name: '박지우',
            gender: 'Male',
            role: 'Member',
            year: '3rd',
            position: 'Front-End',
            introduction: '안녕하세용!!',
            github: 'github.com/jujuredt',
            email: 'juju.0_0._',
        },
        {
            name: '박지우',
            gender: 'Female',
            role: 'Member',
            year: '1st',
            position: 'Front-End',
            introduction: '안녕하세용!!',
            github: 'github.com/jujuredt',
            email: 'juju.0_0._',
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
            <div>
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
            </div>
        </main>
    )
}
