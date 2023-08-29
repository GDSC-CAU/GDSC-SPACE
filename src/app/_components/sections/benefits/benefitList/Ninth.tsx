'use client'

import { BenefitCard } from '../benefitCard'

export const BenefitNinthSolutionChallenge = () => {
    return (
        <BenefitCard
            twClass="md:col-start-1 xl:col-start-2 md:col-end-4 md:row-auto"
            colAlign="center"
            rowAlign="center"
        >
            <BenefitCard.Description>
                <BenefitCard.Description.Eng twClass="text-center md:text-start">
                    Join the google solution challenge with us. Develop solutions to solve social problems presented by
                    the UN and win prizes.
                </BenefitCard.Description.Eng>
                <BenefitCard.Description.Kor twClass="text-center md:text-start">
                    Google solution challenge에 커뮤니티와 함께 참여하고, UN이 제시한 사회적 문제를 해결하는 솔루션을
                    통해 입상할 기회를 잡으세요.
                </BenefitCard.Description.Kor>
            </BenefitCard.Description>
        </BenefitCard>
    )
}
