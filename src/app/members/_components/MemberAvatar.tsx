'use client'

import Image from 'next/image'
import { useMemo } from 'react'
import { Boy, Girl } from '~/components/icons'
import { MEMBER_DATA } from '../../../interfaces/common'

export const MemberAvatar = ({ MEMBER_GENDER, MEMBER_IMAGE }: Pick<MEMBER_DATA, 'MEMBER_GENDER' | 'MEMBER_IMAGE'>) => {
    const randomBackgroundColor = useMemo(() => {
        const colors = [
            'bg-primary-hotpink',
            'bg-primary-yellow',
            'bg-primary-teal',
            'bg-primary-blue',
            'bg-primary-purple',
        ] as const

        const randomNumber = Math.floor(Math.random() * colors.length)

        return colors[randomNumber]
    }, [])

    if (MEMBER_IMAGE) {
        return (
            <Image fill style={{ objectFit: 'cover' }} alt="member_image" className="rounded-xl" src={MEMBER_IMAGE} />
        )
    }

    return (
        <div
            suppressHydrationWarning
            className={`flex h-full w-full items-center justify-center ${randomBackgroundColor} rounded-xl`}
        >
            {MEMBER_GENDER === 'Male' && <Boy className="mb-20 scale-[1.4]" />}
            {MEMBER_GENDER === 'Female' && <Girl className="mb-20 scale-[1.4]" />}
        </div>
    )
}
