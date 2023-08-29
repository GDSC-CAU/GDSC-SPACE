import Image from 'next/image'
import { FadeIn } from '~/src/components/common'

const IntroHeader = ({ fromLeft = true, children }: React.PropsWithChildren<{ fromLeft: boolean }>) => (
    <FadeIn
        from={`${fromLeft ? '-translate-x-full' : 'translate-x-full'} scale-75`}
        to="translate-x-0 scale-100"
        duration="1250"
        observerOption={{
            rootMargin: '100px 100px 100px 100px',
        }}
    >
        <h1 className="font-eng text-5xl font-semibold text-white md:text-7xl">{children}</h1>
    </FadeIn>
)

export const IntroBanner = () => (
    <div className="relative h-fit w-full overflow-hidden py-64 md:py-40 lg:py-20">
        <Image
            src="/banner.png"
            className="scale-[4] sm:scale-[2] md:scale-[2] lg:scale-125"
            alt="GDSC CAU banner"
            width={1920}
            height={1070}
            quality={100}
            priority
        />

        <div className="absolute inset-0 h-full w-full bg-gradient-to-b from-black/60 to-white/0 scale-[2.5] md:scale-100" />

        <div className="absolute left-1/2 top-1/2 flex flex-col items-center justify-center gap-1 -translate-x-1/2 -translate-y-1/2 md:gap-8">
            <IntroHeader fromLeft>Google</IntroHeader>
            <IntroHeader fromLeft={false}>Developer</IntroHeader>
            <IntroHeader fromLeft>Student</IntroHeader>
            <IntroHeader fromLeft={false}>Club</IntroHeader>

            <FadeIn duration="1250">
                <p className="pt-4 text-base font-light md:pt-10 md:text-xl">Chung-Ang University</p>
            </FadeIn>
        </div>
    </div>
)
