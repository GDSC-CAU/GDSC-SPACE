'use client'

import Image from 'next/image'
import { Earth, EarthEye } from '~/components/icons'
import { FadeIn } from '~/src/components/common'
import { BenefitCard } from './benefitCard/BenefitCard'
import { BenefitModal } from './BenefitModal'
import { CircleGradientHeader } from './CircleGradientHeader'

export const ModalHeader = () => {
    return (
        <>
            <BenefitModal>
                <BenefitModal.MainContent twClass="group col-start-1 xl:col-start-2 col-end-8 xl:col-end-7 row-auto overflow-hidden">
                    <FadeIn
                        observerOption={{
                            rootMargin: '-500px 0px 0px 0px',
                        }}
                        twClass="w-full h-full"
                        from="-translate-y-1/2 scale-[2.5]"
                        to="translate-y-0 scale-[1]"
                        duration="1000"
                        animationTiming="ease-out"
                    >
                        <CircleGradientHeader
                            twClass="bg-transparent transition-all w-full h-[350px]"
                            fontSize={1.4}
                            fontWeight={500}
                            yOffset={-8.5}
                            radius={168.5}
                            letterSpacing={0.5}
                        >
                            Show your ideas to the world.
                        </CircleGradientHeader>
                    </FadeIn>
                    <div className="absolute left-1/2 top-1/4 -translate-x-1/2">
                        <FadeIn
                            observerOption={{
                                rootMargin: '-500px 0px 0px 0px',
                            }}
                            twClass="w-full h-full"
                            duration="1000"
                            animationTiming="ease-out"
                            from="scale-0"
                            to="scale-100"
                        >
                            <Earth className="animate-spin-z-32" />
                            <EarthEye className="absolute bottom-1/2 left-2/3 scale-150" />
                        </FadeIn>
                    </div>
                </BenefitModal.MainContent>

                <BenefitModal.ModalContent>
                    <BenefitCard.Description>
                        <BenefitCard.Description.Eng>
                            In the GDSC community, We plan and execute events by our self. Develop your leadership,
                            cooperate with co-workers and show your gorgeous ideas!
                        </BenefitCard.Description.Eng>
                        <BenefitCard.Description.Kor>
                            GDSC 커뮤니티에서는 학생들이 스스로 행사를 기획하고 실행합니다. 팀워크와 리더십을 키우고,
                            자신의 아이디어를 함께 실현해보세요!
                        </BenefitCard.Description.Kor>
                    </BenefitCard.Description>
                </BenefitModal.ModalContent>
            </BenefitModal>
        </>
    )
}

export const ModalFooter = () => {
    return (
        <BenefitModal>
            <BenefitModal.MainContent
                iconButtonProps={{
                    gray: true,
                }}
                white
                flexDirection="row"
                rowAlign="center"
                colAlign="around"
                twClass="col-start-1 xl:col-start-2 gap-8 col-end-8 xl:col-end-7 row-auto"
            >
                <BenefitCard.Header>Take the opportunity to grow.</BenefitCard.Header>

                <Image src="/opportunity.png" width={350 * 0.75} height={368.98 * 0.75} alt="get opportunity" />
            </BenefitModal.MainContent>

            <BenefitModal.ModalContent>
                <BenefitCard.Description>
                    <BenefitCard.Description.Eng>
                        You will participate collaboration events such as GDSC Job fair and Programming Contest! Find
                        great opportunities and gain various experiences!
                    </BenefitCard.Description.Eng>
                    <BenefitCard.Description.Kor>
                        GDSC Job fair, Programming Contest와 같은 콜라보레이션 이벤트가 진행 될 수 있어요! 멋진 기회를
                        찾고 다양한 경험을 쌓아보세요!
                    </BenefitCard.Description.Kor>
                </BenefitCard.Description>
            </BenefitModal.ModalContent>
        </BenefitModal>
    )
}
