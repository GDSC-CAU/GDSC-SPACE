import Image from 'next/image'
import { GradientHeader } from '~/components/common'
import { BenefitCard } from './benefitCard/BenefitCard'
import { ModalFooter, ModalHeader } from './BenefitModalSections'
import { Mentor } from './mentor'

export const Benefits = () => {
    return (
        <div className="flex flex-col items-center justify-center py-20">
            <GradientHeader twClass="text-center mb-5">
                Even more
                <br />
                member benefits.
            </GradientHeader>

            <section className="grid grid-flow-col grid-cols-7 grid-rows-6 gap-5">
                <ModalHeader />

                <BenefitCard twClass="col-start-2 col-end-4 row-auto">
                    <BenefitCard.Header>
                        Make<br></br>Networking
                    </BenefitCard.Header>
                    <BenefitCard.Description>
                        <BenefitCard.Description.Eng>
                            You can get mentoring from field experts such as GDE, a Googleer, and a senior.
                        </BenefitCard.Description.Eng>

                        <BenefitCard.Description.Kor>
                            GDSC에서 이루어지는 ???을 통해 GDE, 구글러, 취업 동문 등 현업 전문가를 만나고 멘토링을 받을
                            수 있어요.
                        </BenefitCard.Description.Kor>
                    </BenefitCard.Description>
                </BenefitCard>

                <Mentor />

                <BenefitCard twClass="col-start-2 col-end-5 row-auto">
                    <BenefitCard.Header>open events.</BenefitCard.Header>
                </BenefitCard>

                <BenefitCard twClass="col-start-5 col-end-7 row-auto">
                    <BenefitCard.Description>
                        <BenefitCard.Description.Eng>
                            We hold various events such as Hands on Workshop, Study Group, and Hackathon. Let’s learn
                            new skills together and improve your expertise!
                        </BenefitCard.Description.Eng>

                        <BenefitCard.Description.Kor>
                            우리는 Hands on workshop, Study Group, Hackathon 등 다양한 이벤트를 진행합니다. 새로운
                            기술을 함께 배우고 실습하면서 전문성을 길러보세요!
                        </BenefitCard.Description.Kor>
                    </BenefitCard.Description>
                </BenefitCard>

                <BenefitCard twClass="col-start-2 col-end-4 row-auto">
                    <BenefitCard.Header>
                        Interact<br></br>with us.
                    </BenefitCard.Header>
                </BenefitCard>

                <BenefitCard twClass="col-start-4 col-end-7 row-auto">
                    <div className="absolute justify-center">
                        <BenefitCard.Header>
                            32
                            <br />
                            Universities
                        </BenefitCard.Header>

                        <BenefitCard.Description>
                            <BenefitCard.Description.Eng>
                                Become a better developer by interacting with 32 universities in Korea through the
                                Google Developer Student Clubs network.
                            </BenefitCard.Description.Eng>

                            <BenefitCard.Description.Kor>
                                국내 32개 대학의 Google Developer Student Clubs 네트워크를 통해 서로 교류하며 더욱 멋진
                                개발자로 성장해보세요!
                            </BenefitCard.Description.Kor>
                        </BenefitCard.Description>
                    </div>
                </BenefitCard>

                <BenefitCard twClass="col-start-2 col-end-5 row-auto">
                    <BenefitCard.Description>
                        <BenefitCard.Description.Eng>
                            Join the solution challenge with us! Develop solutions to solve social problems presented by
                            the UN and win prizes!
                        </BenefitCard.Description.Eng>

                        <BenefitCard.Description.Kor>
                            Solution Challenge에 GDSC 커뮤니티와 함께 참여하세요! UN이 제시한 사회적 문제를 해결하는
                            솔루션을 개발하고 입상할 기회를 잡으세요!
                        </BenefitCard.Description.Kor>
                    </BenefitCard.Description>
                </BenefitCard>

                <BenefitCard
                    colAlign="center"
                    rowAlign="center"
                    twClass="relative col-start-5 col-end-7 row-auto gap-y-7 overflow-hidden"
                >
                    <div className="absolute left-1/2 top-1/3 h-48 w-48 select-none bg-white/30 blur-4xl transition-all duration-700 -translate-x-1/2 -translate-y-1/2" />
                    <Image
                        src="/un-logo.png"
                        alt="solution challenge"
                        className="select-none"
                        width={250 * 0.75}
                        height={212.39 * 0.75}
                    />

                    <BenefitCard.Header center>
                        Solve a problem
                        <br />
                        with your ideas
                    </BenefitCard.Header>
                </BenefitCard>

                <ModalFooter />
            </section>
        </div>
    )
}
