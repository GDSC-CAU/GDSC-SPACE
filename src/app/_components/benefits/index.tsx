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

                <BenefitCard twClass="col-start-1 col-end-4 row-auto">
                    <BenefitCard.Header>
                        Make<br></br>Networking
                    </BenefitCard.Header>
                    <BenefitCard.Description>
                        <BenefitCard.Description.Kor>
                            GDSC의 이벤트와 개발자 커뮤니티를 통해 GDE, 구글러, 취업 동문 등 현업 전문가를 만나고
                            멘토링을 받을 수 있어요
                        </BenefitCard.Description.Kor>

                        <BenefitCard.Description.Eng>
                            Our events and developer community allow you to meet and mentor working professionals,
                            including GDEs, Googlers, and working alumni.
                        </BenefitCard.Description.Eng>
                    </BenefitCard.Description>
                </BenefitCard>

                <Mentor />

                <BenefitCard twClass="col-start-1 col-end-5 row-auto">
                    <BenefitCard.Header>
                        Make<br></br>Networking
                    </BenefitCard.Header>

                    <BenefitCard.Description>
                        <BenefitCard.Description.Kor>
                            GDSC의 이벤트와 개발자 커뮤니티를 통해 GDE, 구글러, 취업 동문 등 현업 전문가를 만나고
                            멘토링을 받을 수 있어요
                        </BenefitCard.Description.Kor>

                        <BenefitCard.Description.Eng>
                            Our events and developer community allow you to meet and mentor working professionals,
                            including GDEs, Googlers, and working alumni.
                        </BenefitCard.Description.Eng>
                    </BenefitCard.Description>
                </BenefitCard>

                <BenefitCard twClass="col-start-5 col-end-8 row-auto">
                    <BenefitCard.Header>
                        Make<br></br>Networking
                    </BenefitCard.Header>

                    <BenefitCard.Description>
                        <BenefitCard.Description.Kor>
                            GDSC의 이벤트와 개발자 커뮤니티를 통해 GDE, 구글러, 취업 동문 등 현업 전문가를 만나고
                            멘토링을 받을 수 있어요
                        </BenefitCard.Description.Kor>

                        <BenefitCard.Description.Eng>
                            Our events and developer community allow you to meet and mentor working professionals,
                            including GDEs, Googlers, and working alumni.
                        </BenefitCard.Description.Eng>
                    </BenefitCard.Description>
                </BenefitCard>

                <BenefitCard twClass="col-start-1 col-end-4 row-auto">
                    <BenefitCard.Header>
                        Make<br></br>Networking
                    </BenefitCard.Header>

                    <BenefitCard.Description>
                        <BenefitCard.Description.Kor>
                            GDSC의 이벤트와 개발자 커뮤니티를 통해 GDE, 구글러, 취업 동문 등 현업 전문가를 만나고
                            멘토링을 받을 수 있어요
                        </BenefitCard.Description.Kor>

                        <BenefitCard.Description.Eng>
                            Our events and developer community allow you to meet and mentor working professionals,
                            including GDEs, Googlers, and working alumni.
                        </BenefitCard.Description.Eng>
                    </BenefitCard.Description>
                </BenefitCard>

                <BenefitCard
                    colAlign="center"
                    rowAlign="center"
                    twClass="relative col-start-4 col-end-8 row-auto gap-y-7 overflow-hidden"
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
