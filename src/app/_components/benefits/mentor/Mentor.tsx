'use client'

import { Mentor as MentorIcon } from '~/components/icons'
import { BenefitCard } from '../benefitCard'
import { useTilt } from './useTilt'

export const Mentor = () => {
    const { listeners, setTiltRef, style } = useTilt<HTMLDivElement>({
        shadowBlurLevel: 4.5,
        shadowColor: 'rgba(0, 0, 0, 0.2)',
        shadowTiltLevel: 1,
    })

    return (
        <div ref={setTiltRef} {...listeners} className="col-start-4 col-end-7 row-auto">
            <BenefitCard white colAlign="around" rowAlign="center">
                <BenefitCard.Header>Get</BenefitCard.Header>
                <div style={style}>
                    <MentorIcon className="transition-transform duration-500 scale-75 hover:scale-90" />
                </div>
                <BenefitCard.Header>a mentor.</BenefitCard.Header>
            </BenefitCard>
        </div>
    )
}
