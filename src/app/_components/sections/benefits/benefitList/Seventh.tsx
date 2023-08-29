'use client'

import { FadeIn } from '~/src/components/common'
import { BenefitCard } from '../benefitCard'

export const BenefitSeventh36University = () => {
    return (
        <BenefitCard
            twClass="md:col-start-4 md:items-center md:col-end-8 xl:col-end-7 md:row-auto text-center"
            rowAlign="start"
            colAlign="center"
        >
            <FadeIn from="translate-y-1/2" to="translate-y-0" duration="1000">
                <BenefitCard.Header>
                    <div className="text-start text-5xl/tight font-bold md:text-center">36</div>
                    Universities
                </BenefitCard.Header>
            </FadeIn>
            <BenefitCard.Description>
                <BenefitCard.Description.Eng twClass="text-start md:text-center">
                    Become a better developer by interacting with 36 universities in Korea through the Google Developer
                    Student Clubs network.
                </BenefitCard.Description.Eng>

                <BenefitCard.Description.Kor twClass="text-start md:text-center">
                    국내 36개 대학의 Google Developer Student Clubs 네트워크를 통해 서로 교류하며 더욱 멋진 개발자로
                    성장해보세요.
                </BenefitCard.Description.Kor>
            </BenefitCard.Description>
        </BenefitCard>
    )
}
