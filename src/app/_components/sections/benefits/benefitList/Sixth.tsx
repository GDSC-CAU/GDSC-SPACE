'use client'

import { FillImage } from '~/src/components/common'
import { BenefitCard } from '../benefitCard'

export const BenefitSixthShowInteractWithUs = () => {
    return (
        <BenefitCard
            white
            colAlign="center"
            rowAlign="center"
            twClass="w-full h-96 md:h-full relative md:col-start-1 xl:col-start-2 md:col-end-4 md:row-auto group"
            zeroPadding
        >
            <FillImage
                src="/hand.png"
                alt="solution challenge"
                containerClass="w-full h-96 md:h-full inset-0 select-none rounded-xl overflow-hidden"
                imageClass="group-hover:scale-105 group-hover:brightness-110 ease-in-out transition-all duration-500"
            />
            <BenefitCard.Header
                center
                twClass="absolute group-hover:scale-125 group-hover:brightness-95 ease-in-out transition-all duration-500"
            >
                Interact
                <br />
                with us.
            </BenefitCard.Header>
        </BenefitCard>
    )
}
