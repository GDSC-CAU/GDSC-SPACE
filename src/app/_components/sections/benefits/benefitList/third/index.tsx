'use client'

import { Mentor } from '~/src/components/icons'
import { BenefitCard } from '../../benefitCard'
import { useTilt } from './useTilt'

export const BenefitThirdMentor = () => {
    const { listeners, setTiltRef, style } = useTilt<HTMLDivElement>({
        shadowBlurLevel: 4.5,
        shadowColor: 'rgba(0, 0, 0, 0.2)',
        shadowTiltLevel: 1,
    })

    return (
        <div ref={setTiltRef} {...listeners} className="col-start-4  col-end-8 row-auto xl:col-end-7">
            <BenefitCard white colAlign="around" rowAlign="center">
                <BenefitCard.Header>Get</BenefitCard.Header>
                <div style={style}>
                    <Mentor className="transition-transform duration-500 scale-75 hover:scale-90" />
                </div>
                <BenefitCard.Header>a mentor.</BenefitCard.Header>
            </BenefitCard>
        </div>
    )
}
