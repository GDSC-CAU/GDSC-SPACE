'use client'

import { useState } from 'react'
import type { MEMBER_DATA } from '../../interfaces/common'
import { MemberHorizontalScrollView } from './_components'

const generateBulkMembers = (count: number): Array<MEMBER_DATA> => {
    const bulkMembers: Array<MEMBER_DATA> = Array.from(
        {
            length: count,
        },
        (_, i) =>
            ({
                MEMBER_INSTAGRAM: 'instagram',
                MEMBER_IMAGE: '',
                MEMBER_LINK_BEHANCE: '',
                MEMBER_NAME: `유용민${i}`,
                MEMBER_GENDER: 'Male',
                MEMBER_NICKNAME: 'DEV.LR',
                MEMBER_ROLE: 'Lead',
                MEMBER_YEAR: `${Math.floor(Math.random() * 3) + 1}기` as MEMBER_DATA['MEMBER_YEAR'],
                MEMBER_POSITION: 'Cloud Server / flutter',
                MEMBER_COMMENT: '안녕하세요, GDSC 3기 리더 유용민입니다. 잘 부탁드립니다:)',
                MEMBER_LINK_GITHUB: 'github.com/yymin1022',
                MEMBER_EMAIL: 'yymin1022@gmail.com',
            } as MEMBER_DATA)
    )
    return bulkMembers
}

const bulkMembers: Array<MEMBER_DATA> = generateBulkMembers(300)

export default function MemberList() {
    const [selectedYear, setSelectedYear] = useState<MEMBER_DATA['MEMBER_YEAR']>('1기')
    const targetMemberList = bulkMembers.filter(({ MEMBER_YEAR }) => selectedYear === MEMBER_YEAR)

    return (
        <main className="flex h-full w-full flex-col p-5">
            <div className="mb-10 flex">
                <button
                    type="button"
                    aria-label="1st year members"
                    onClick={() => setSelectedYear('1기')}
                    className={`mr-10 h-10 w-16 rounded-full bg-primary-blue p-2 font-bold text-white hover:underline`}
                >
                    1st
                </button>
                <button
                    type="button"
                    aria-label="2nd year members"
                    onClick={() => setSelectedYear('2기')}
                    className={`mr-10 h-10 w-16 rounded-full bg-primary-blue p-2 font-bold text-white hover:underline`}
                >
                    2nd
                </button>
                <button
                    type="button"
                    aria-label="3rd year members"
                    onClick={() => setSelectedYear('3기')}
                    className={`h-10 w-16 rounded-full bg-primary-blue p-2 font-bold text-white hover:underline`}
                >
                    3rd
                </button>
            </div>

            <div className="flex flex-col py-4">
                <MemberHorizontalScrollView members={targetMemberList} />
            </div>
        </main>
    )
}
