import { FadeIn } from '~/src/components/common'
import { BenefitCard } from '../benefitCard'

export const BenefitSecondNetworking = () => {
    return (
        <BenefitCard colAlign="around" twClass="md:col-start-1 xl:col-start-2 md:col-end-4 md:row-auto">
            <FadeIn from="translate-y-1/2" to="translate-y-0">
                <BenefitCard.Header>
                    Make<br></br>Networking
                </BenefitCard.Header>
            </FadeIn>
            <BenefitCard.Description>
                <BenefitCard.Description.Eng>
                    You can get mentoring from field experts such as GDE, a Googleer, and a senior.
                </BenefitCard.Description.Eng>
                <BenefitCard.Description.Kor>
                    GDSC에서 이루어지는 다양한 커뮤니티 이벤트를 통해 GDE, 구글러, 취업 동문 등 현업 전문가를 만나고
                    멘토링을 받을 수 있어요.
                </BenefitCard.Description.Kor>
            </BenefitCard.Description>
        </BenefitCard>
    )
}
