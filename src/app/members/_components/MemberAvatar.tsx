'use client'

import Image from 'next/image'
import { useMemo } from 'react'
import { Boy, Girl } from '~/components/icons'
import { Member } from '../page'

export const MemberAvatar = ({ gender, imageSrc }: Pick<Member, 'gender' | 'imageSrc'>) => {
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

    if (imageSrc) {
        return <Image fill style={{ objectFit: 'cover' }} alt="member_image" className="rounded-xl" src={imageSrc} />
    }

    return (
        <div
            suppressHydrationWarning
            className={`flex h-full w-full items-center justify-center ${randomBackgroundColor} rounded-xl`}
        >
            {gender === 'Male' && <Boy className="mb-20 scale-[1.4]" />}
            {gender === 'Female' && <Girl className="mb-20 scale-[1.4]" />}
        </div>
    )
}
