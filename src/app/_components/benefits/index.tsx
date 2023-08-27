import Image from 'next/image'
import { FadeInGradientHeader, FillImage, Link$ } from '~/components/common'
import { FadeIn } from '~/components/common/fadeIn'
import { BenefitCard } from './benefitCard/BenefitCard'
import { ModalFooter, ModalHeader } from './BenefitModalSections'
import { Mentor } from './mentor'

export const Benefits = () => {
    return (
        <div className="flex flex-col items-center justify-center py-20">
            <FadeInGradientHeader twClass="text-center mb-5">
                Even more
                <br />
                member benefits.
            </FadeInGradientHeader>

            <section className="grid grid-flow-col grid-cols-7 grid-rows-6 gap-5">
                <ModalHeader />

                <BenefitCard twClass="col-start-1 xl:col-start-2 col-end-4 row-auto">
                    <FadeIn from="translate-y-1/2" to="translate-y-0" twClass="mt-5 font-semibold">
                        <BenefitCard.Header>
                            Make<br></br>Networking
                        </BenefitCard.Header>
                    </FadeIn>
                    <BenefitCard.Description twClass="leading-loose mb-5">
                        <BenefitCard.Description.Eng>
                            You can get mentoring from field experts such as GDE, a Googleer, and a senior.
                        </BenefitCard.Description.Eng>

                        <BenefitCard.Description.Kor>
                            GDSC에서 이루어지는 다양한 커뮤니티 이벤트를 통해 GDE, 구글러, 취업 동문 등 현업 전문가를
                            만나고 멘토링을 받을 수 있어요.
                        </BenefitCard.Description.Kor>
                    </BenefitCard.Description>
                </BenefitCard>

                <Mentor />

                <BenefitCard
                    rowAlign="center"
                    twClass="col-start-1 xl:col-start-2 col-end-5 row-auto w-full h-full"
                    colAlign="center"
                    zeroPadding
                >
                    <Link$ href="/events" className="relative h-full w-full">
                        <FillImage
                            src="/events.png"
                            alt="solution challenge"
                            containerClass="w-full h-full inset-0 select-none rounded-xl overflow-hidden"
                            imageClass="hover:opacity-75 hover:scale-[1.01] ease-in-out transition-all duration-500"
                        />
                        <BenefitCard.Header white center twClass="w-full absolute left-1/2 top-8 -translate-x-1/2">
                            Open events.
                        </BenefitCard.Header>
                    </Link$>
                </BenefitCard>

                <BenefitCard twClass="col-start-5 col-end-8 xl:col-end-7 row-auto" colAlign="center" rowAlign="center">
                    <BenefitCard.Description twClass="leading-loose mt-5">
                        <BenefitCard.Description.Eng>
                            We hold various events such as Hands on Workshop, Study Group, and Hackathon. Let’s learn
                            new skills together and improve your expertise.
                        </BenefitCard.Description.Eng>

                        <BenefitCard.Description.Kor twClass="mt-5">
                            우리는 Hands on workshop, Study Group, Hackathon 등 다양한 이벤트를 진행합니다. 새로운
                            기술을 함께 배우고 실습하면서 전문성을 길러보세요.
                        </BenefitCard.Description.Kor>
                    </BenefitCard.Description>
                </BenefitCard>

                <BenefitCard
                    white
                    colAlign="center"
                    rowAlign="center"
                    twClass="relative col-start-1 xl:col-start-2 col-end-4 row-auto group"
                    zeroPadding
                >
                    <FillImage
                        src="/hand.png"
                        alt="solution challenge"
                        containerClass="w-full h-full inset-0 select-none rounded-xl overflow-hidden"
                        imageClass="group-hover:scale-105 group-hover:brightness-110 ease-in-out transition-all duration-500"
                    />
                    <BenefitCard.Header
                        center
                        twClass="absolute group-hover:scale-125 group-hover:brightness-95 ease-in-out transition-all duration-500"
                    >
                        Interact
                        <br />
                        with us.
                    </BenefitCard.Header>
                </BenefitCard>

                <BenefitCard
                    twClass="col-start-4 col-end-8 xl:col-end-7 row-auto text-center"
                    rowAlign="center"
                    colAlign="center"
                >
                    <FadeIn from="translate-y-1/2" to="translate-y-0" duration="1000">
                        <BenefitCard.Header>
                            <div className="text-6xl font-bold">36</div>
                            Universities
                        </BenefitCard.Header>
                    </FadeIn>
                    <BenefitCard.Description twClass="leading-loose">
                        <BenefitCard.Description.Eng>
                            Become a better developer by interacting with 36 universities in Korea through the Google
                            Developer Student Clubs network.
                        </BenefitCard.Description.Eng>

                        <BenefitCard.Description.Kor>
                            국내 36개 대학의 Google Developer Student Clubs 네트워크를 통해 서로 교류하며 더욱 멋진
                            개발자로 성장해보세요.
                        </BenefitCard.Description.Kor>
                    </BenefitCard.Description>
                </BenefitCard>

                <BenefitCard
                    twClass="col-start-1 xl:col-start-2 col-end-4 row-auto"
                    colAlign="center"
                    rowAlign="center"
                >
                    <BenefitCard.Description twClass="leading-loose mt-10">
                        <BenefitCard.Description.Eng>
                            Join the google solution challenge with us. Develop solutions to solve social problems
                            presented by the UN and win prizes.
                        </BenefitCard.Description.Eng>

                        <BenefitCard.Description.Kor twClass="mt-5">
                            Google solution challenge에 커뮤니티와 함께 참여하고, UN이 제시한 사회적 문제를 해결하는
                            솔루션을 통해 입상할 기회를 잡으세요.
                        </BenefitCard.Description.Kor>
                    </BenefitCard.Description>
                </BenefitCard>

                <BenefitCard
                    colAlign="center"
                    rowAlign="center"
                    twClass="relative col-start-4 col-end-8 row-auto xl:col-end-7 gap-y-7 overflow-hidden"
                >
                    <div className="absolute left-1/2 top-1/3 h-48 w-48 select-none bg-white/30 blur-4xl transition-all duration-700 -translate-x-1/2 -translate-y-1/2" />
                    <Image
                        src="/un-logo.png"
                        alt="solution challenge"
                        className="select-none"
                        width={250 * 0.75}
                        height={212.39 * 0.75}
                    />

                    <FadeIn from="translate-y-full" to="translate-y-0" duration="1000">
                        <BenefitCard.Header center>
                            Solve a problem
                            <br />
                            with your ideas
                        </BenefitCard.Header>
                    </FadeIn>
                </BenefitCard>

                <ModalFooter />
            </section>
        </div>
    )
}
