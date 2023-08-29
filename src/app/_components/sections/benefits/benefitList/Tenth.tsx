import Image from 'next/image'
import { BenefitCard } from '../benefitCard'
import { BenefitModal } from '../BenefitModal'

export const BenefitTenthOpportunity = () => {
    return (
        <BenefitModal>
            <BenefitModal.MainContent
                iconButtonProps={{
                    gray: true,
                }}
                white
                flexDirection="col"
                rowAlign="center"
                colAlign="around"
                twClass="md:flex-row-reverse md:col-start-1 xl:col-start-2 md:gap-8 md:col-end-8 xl:col-end-7"
            >
                <Image
                    src="/opportunity.png"
                    width={350 * 0.75}
                    height={368.98 * 0.75}
                    className="mt-6 pb-0 scale-90 md:mt-0 md:pb-10 md:scale-100"
                    alt="get opportunity"
                />

                <BenefitCard.Header twClass="mt-6 md:mt-0" center>
                    Take the opportunity to grow.
                </BenefitCard.Header>
            </BenefitModal.MainContent>

            <BenefitModal.ModalContent>
                <BenefitCard.Description>
                    <BenefitCard.Description.Eng twClass="text-start md:text-start">
                        You will participate collaboration events such as GDSC Job fair and Programming Contest. Find
                        great opportunities and gain various experiences.
                    </BenefitCard.Description.Eng>
                    <BenefitCard.Description.Kor twClass="text-start md:text-start">
                        GDSC Job fair, Programming Contest와 같은 콜라보레이션 이벤트가 진행 될 수 있습니다. 멋진 기회를
                        찾고 다양한 경험을 쌓아보세요.
                    </BenefitCard.Description.Kor>
                </BenefitCard.Description>
            </BenefitModal.ModalContent>
        </BenefitModal>
    )
}
