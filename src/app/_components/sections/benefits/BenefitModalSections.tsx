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
                            rootMargin: '-100px 0px 0px 0px',
                        }}
                        twClass="w-full h-full"
                        from="-translate-y-1/2 scale-[2.5]"
                        to="translate-y-0 scale-[1]"
                        duration="1000"
                        animationTiming="ease-out"
                    >
                        <CircleGradientHeader
                            id="desktop"
                            twClass="md:block hidden bg-transparent transition-all w-full h-[350px]"
                            textClassName="font-eng text-base md:text-lg"
                            fontWeight={500}
                            yOffset={-8.5}
                            radius={168.5}
                            letterSpacing={0.5}
                        >
                            Show your ideas to the world.
                        </CircleGradientHeader>

                        <CircleGradientHeader
                            id="mobile"
                            twClass="md:hidden block bg-transparent transition-all w-full h-[300px]"
                            textClassName="font-eng text-[1.4rem]"
                            fontWeight={500}
                            yOffset={-30.5}
                            radius={50.5}
                            letterSpacing={0.5}
                        >
                            Show your ideas
                        </CircleGradientHeader>
                    </FadeIn>

                    <div className="absolute left-1/2 top-1/4 -translate-x-1/2">
                        <FadeIn
                            observerOption={{
                                rootMargin: '-100px 0px 0px 0px',
                            }}
                            twClass="w-full h-full"
                            duration="1000"
                            animationTiming="ease-out"
                            from="scale-0"
                            to="scale-100"
                        >
                            <Earth className="animate-spin-z-32 -translate-y-8 scale-[0.8] md:translate-y-0 md:scale-100" />
                            <EarthEye className="absolute bottom-56 right-28 -translate-y-8 scale-90 md:bottom-1/2 md:left-2/3 md:translate-y-0 md:scale-150" />
                        </FadeIn>
                    </div>
                </BenefitModal.MainContent>

                <BenefitModal.ModalContent>
                    <BenefitCard.Description>
                        <BenefitCard.Description.Eng twClass="text-start md:text-start">
                            In the GDSC community, We plan and execute events by our self. Develop your leadership,
                            cooperate with co-workers and show your gorgeous ideas.
                        </BenefitCard.Description.Eng>
                        <BenefitCard.Description.Kor twClass="text-start md:text-start">
                            GDSC 커뮤니티에서는 학생들이 스스로 행사를 기획하고 실행합니다. 팀워크와 리더십을 키우고,
                            자신의 아이디어를 함께 실현해보세요.
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
