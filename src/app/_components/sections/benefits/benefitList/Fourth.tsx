'use client'

import { FillImage, Link$ } from '~/src/components/common'
import { BenefitCard } from '../benefitCard'

export const BenefitFourthOpenEvents = () => {
    return (
        <BenefitCard
            rowAlign="center"
            twClass="md:col-start-1 xl:col-start-2 md:col-end-5 md:row-auto w-full h-full"
            colAlign="center"
            zeroPadding
        >
            <Link$ href="/events" className="relative h-96 w-full md:h-full md:w-full">
                <FillImage
                    src="/events.png"
                    alt="solution challenge"
                    containerClass="w-full h-full inset-0 select-none rounded-xl overflow-hidden"
                    imageClass="hover:opacity-75 hover:scale-[1.01] ease-in-out transition-all duration-500"
                />
                <BenefitCard.Header white center twClass="w-full absolute left-1/2 top-8 -translate-x-1/2">
                    Open events.
                </BenefitCard.Header>
            </Link$>
        </BenefitCard>
    )
}
