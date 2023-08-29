import Image from 'next/image'
import { FadeIn } from '~/src/components/common'
import { BenefitCard } from '../benefitCard'

export const BenefitEighthUNImage = () => {
    return (
        <BenefitCard
            colAlign="center"
            rowAlign="center"
            twClass="relative md:col-start-4 md:col-end-8 md:row-auto xl:col-end-7 md:gap-y-7 overflow-hidden"
        >
            <div className="absolute left-1/2 top-1/3 h-48 w-48 select-none bg-white/10 blur-2xl transition-all duration-700 -translate-x-1/2 -translate-y-1/2 md:bg-white/30 md:blur-4xl" />
            <Image
                src="/un-logo.png"
                alt="solution challenge"
                className="select-none scale-75 md:scale-100"
                width={250 * 0.75}
                height={212.39 * 0.75}
            />

            <FadeIn
                observerOption={{
                    rootMargin: '-100px 0px 0px 0px',
                }}
                from="translate-y-full"
                to="translate-y-0"
                duration="1000"
            >
                <BenefitCard.Header center>
                    Solve a problem
                    <br />
                    with your ideas
                </BenefitCard.Header>
            </FadeIn>
        </BenefitCard>
    )
}
