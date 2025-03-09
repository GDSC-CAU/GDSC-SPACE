'use client'

import { FadeInGradientHeader } from '~/src/components/common'
import { IntroIcon } from '~/src/components/icons'

export const IntroWhoAreWe = () => {
    return (
        <div className="relative flex w-full flex-col items-center justify-center pb-36 pt-20 md:pb-6">
            <div className="absolute left-1/2 top-32 h-56 w-56 rounded-full bg-primary-blue blur-3xl -translate-x-1/2 -translate-y-1/2 md:top-1/4 md:h-64 md:w-64 md:blur-3xl"></div>

            <FadeInGradientHeader id="about" twClass="mb-10 z-10">
                Who are we?
            </FadeInGradientHeader>

            <div className="z-10 flex flex-col items-start justify-center gap-20 px-10 md:flex-row md:px-40 lg:px-80">
                <div className="flex w-full flex-col items-center justify-center md:w-1/3 md:min-w-[40%] md:max-w-[50%] md:items-start">
                    <p className="mb-5 font-eng text-xl font-normal">Developer/ Designer/ Leader</p>
                    <p className="text-center font-eng text-sm font-light leading-loose md:text-start">
                        Google Developer Groups on Campus are university based community groups for students interested
                        in Google developer technologies. Students from all undergraduate or graduate programs with an
                        interest in growing as a developer or designer are welcome. By joining a GDSC, students grow
                        their knowledge in a peer-to-peer learning environment and build solutions for local businesses
                        and their community.
                    </p>
                </div>
                <div className="flex w-full flex-col items-center justify-center md:w-1/3 md:min-w-[40%] md:max-w-[50%] md:items-start">
                    <p className="mb-5 font-kor text-xl font-normal">개발자/ 디자이너/ 리더</p>
                    <p className="text-center font-kor text-sm font-light leading-loose md:text-start">
                        Google Developer Groups on Campus (GDGoC) 프로그램은 학생들이 개발 ∙ 디자인 ∙ 리더십 능력을 키울
                        수 있도록 지원하는 프로그램입니다. 기술적 성장을 위한 교육자료를 제공하고 리더십 개발을 위한
                        다양한 활동들을 지원합니다. 학생이 성장할 수 있도록 전세계의 학생 Lead들과의 교류 기회, Google의
                        이벤트 참여, 현업 엔지니어와의 만남 등 다양한 기회를 제공하고 쇼케이스와 워크샵을 통해 역량을
                        높일 수 있도록 돕습니다.
                    </p>
                </div>
            </div>

            <div className="mt-20 flex h-32 items-center justify-center md:mt-14">
                <IntroIcon />
            </div>
        </div>
    )
}
