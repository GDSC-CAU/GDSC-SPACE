import { tw } from '~/src/styles/util'
import { IntroBanner } from './Banner'
import { IntroMotor } from './Motor'
import { IntroWhoAreWe } from './WhoAreWe'

export const IntroductionSection = () => {
    return (
        <section
            className={`${tw.fullScreen} -mt-14 flex select-none flex-col items-center justify-center bg-black md:-mt-20`}
        >
            <IntroBanner />

            <div className="flex h-full w-full flex-col items-center justify-center gap-10 bg-gradient-to-b from-black to-primary-darkgray">
                <IntroMotor />
                <IntroWhoAreWe />
            </div>
        </section>
    )
}
