'use client'

import { FadeIn } from '~/src/components/common'

export const IntroMotor = () => (
    <FadeIn from="translate-y-10" to="translate-y-0" duration="1250">
        <div className="flex flex-col items-center justify-center pb-80 pt-96 md:pb-72 md:pt-56">
            <h2 className="bg-gradient-to-b from-primary-hotpink from-15% to-white bg-clip-text text-center font-eng text-2xl/normal font-medium text-transparent md:text-4xl/normal">
                From what you see
                <br></br>
                to what we want to see.
            </h2>
        </div>
    </FadeIn>
)
