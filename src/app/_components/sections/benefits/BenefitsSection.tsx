import {
    BenefitEighthUNImage,
    BenefitFifthHackathonAndWorkshop,
    BenefitFirstEarth,
    BenefitFourthOpenEvents,
    BenefitNinthSolutionChallenge,
    BenefitSecondNetworking,
    BenefitSeventh36University,
    BenefitSixthShowInteractWithUs,
    BenefitTenthOpportunity,
    BenefitThirdMentor,
} from './benefitList'
import { BenefitHeader } from './Header'

export const BenefitsSection = () => {
    return (
        <section className="flex flex-col items-center justify-center py-20">
            <BenefitHeader />

            <div className="flex flex-col gap-7 md:grid md:grid-flow-col md:grid-cols-7 md:grid-rows-6 md:gap-5">
                <BenefitFirstEarth />

                <BenefitSecondNetworking />

                <BenefitThirdMentor />

                <BenefitFourthOpenEvents />

                <BenefitFifthHackathonAndWorkshop />

                <BenefitSixthShowInteractWithUs />

                <BenefitSeventh36University />

                <BenefitEighthUNImage />

                <BenefitNinthSolutionChallenge />

                <BenefitTenthOpportunity />
            </div>
        </section>
    )
}
