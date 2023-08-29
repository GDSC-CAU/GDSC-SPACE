import { BenefitCard } from '../benefitCard'

export const BenefitFifthHackathonAndWorkshop = () => {
    return (
        <BenefitCard twClass="md:col-start-5 md:col-end-8 xl:col-end-7 md:row-auto" colAlign="center" rowAlign="center">
            <BenefitCard.Description>
                <BenefitCard.Description.Eng twClass="text-center md:text-start">
                    We hold various events such as Hands on Workshop, Study Group, and Hackathon. Let’s learn new skills
                    together and improve your expertise.
                </BenefitCard.Description.Eng>
                <BenefitCard.Description.Kor twClass="text-center md:text-start">
                    우리는 Hands on workshop, Study Group, Hackathon 등 다양한 이벤트를 진행합니다. 새로운 기술을 함께
                    배우고 실습하면서 전문성을 길러보세요.
                </BenefitCard.Description.Kor>
            </BenefitCard.Description>
        </BenefitCard>
    )
}
