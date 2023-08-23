'use client'

import { BenefitCard } from './benefitCard/BenefitCard'
import { BenefitModal } from './BenefitModal'

export const ModalHeader = () => {
    return (
        <BenefitModal>
            <BenefitModal.MainContent twClass="col-start-1 col-end-8 row-auto">
                <BenefitCard.Header>Next generation GDSC.</BenefitCard.Header>

                <BenefitCard.Description>
                    <BenefitCard.Description.Kor>
                        GDSC의 이벤트와 개발자 커뮤니티를 통해 GDE, 구글러, 취업 동문 등 현업 전문가를 만나고 멘토링을
                        받을 수 있어요
                    </BenefitCard.Description.Kor>

                    <BenefitCard.Description.Eng>
                        Our events and developer community allow you to meet and mentor working professionals, including
                        GDEs, Googlers, and working alumni.
                    </BenefitCard.Description.Eng>
                </BenefitCard.Description>
            </BenefitModal.MainContent>

            <BenefitModal.ModalContent>
                <BenefitCard.Description.Kor>
                    GDSC의 이벤트와 개발자 커뮤니티를 통해 GDE, 구글러, 취업 동문 등 현업 전문가를 만나고 멘토링을 받을
                    수 있어요.
                </BenefitCard.Description.Kor>
                <BenefitCard.Description.Eng>
                    Our events and developer community allow you to meet and mentor working professionals, including
                    GDEs, Googlers, and working alumni.
                </BenefitCard.Description.Eng>
            </BenefitModal.ModalContent>
        </BenefitModal>
    )
}

export const ModalFooter = () => {
    return (
        <BenefitModal>
            <BenefitModal.MainContent twClass="col-start-1 col-end-8 row-auto">
                <BenefitCard.Header>Next generation GDSC.</BenefitCard.Header>

                <BenefitCard.Description>
                    <BenefitCard.Description.Kor>
                        GDSC의 이벤트와 개발자 커뮤니티를 통해 GDE, 구글러, 취업 동문 등 현업 전문가를 만나고 멘토링을
                        받을 수 있어요. 하단 모달 창
                    </BenefitCard.Description.Kor>

                    <BenefitCard.Description.Eng>
                        Our events and developer community allow you to meet and mentor working professionals, including
                        GDEs, Googlers, and working alumni. bottom modal
                    </BenefitCard.Description.Eng>
                </BenefitCard.Description>
            </BenefitModal.MainContent>

            <BenefitModal.ModalContent>
                <BenefitCard.Description>
                    <BenefitCard.Description.Kor>
                        GDSC의 이벤트와 개발자 커뮤니티를 통해 GDE, 구글러, 취업 동문 등 현업 전문가를 만나고 멘토링을
                        받을 수 있어요 하단 모달 창
                    </BenefitCard.Description.Kor>
                    <BenefitCard.Description.Eng>
                        Our events and developer community allow you to meet and mentor working professionals, including
                        GDEs, Googlers, and working alumni. bottom modal
                    </BenefitCard.Description.Eng>
                </BenefitCard.Description>
            </BenefitModal.ModalContent>
        </BenefitModal>
    )
}
