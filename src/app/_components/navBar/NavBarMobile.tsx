'use client'

import { useState } from 'react'
import { Gdsc } from '~/components/icons'
import { Link$, LinkPath } from '~/src/components/common'
import { NavButton } from './NavButton'

const HamburgerIcon = ({ isOpened, onClick }: { isOpened: boolean; onClick: () => void }) => {
    const center = 'left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'
    return (
        <div className="h-fit w-fit p-2.5" onClick={onClick}>
            <div className="relative h-3 w-5">
                <div
                    className={`${
                        isOpened ? `${center} rotate-45` : 'left-1/2 top-0 -translate-x-1/2 rotate-0'
                    } absolute h-[1.25px] w-full origin-center rounded-full bg-white transition-transform`}
                />
                <div
                    className={`${
                        isOpened ? 'opacity-0' : 'opacity-100'
                    } ${center} absolute h-[1.25px] w-full rounded-full bg-white transition-opacity`}
                />
                <div
                    className={`${
                        isOpened
                            ? `${center} -rotate-45`
                            : 'left-1/2 top-full -translate-x-1/2 -translate-y-1/2 rotate-0'
                    } absolute h-[1.5px] w-full origin-center rounded-full bg-white transition-transform`}
                />
            </div>
        </div>
    )
}
interface NavBarProps {
    iconSize?: number
}
export const NavBarMobile = ({ iconSize = 45 }: NavBarProps) => {
    const [isOpened, setIsOpened] = useState(false)
    const close = () => setIsOpened(false)

    return (
        <>
            <nav className="sticky top-0 z-50 flex h-14 flex-row items-center justify-between gap-2 bg-theme-background/5 px-2.5 py-4 backdrop-blur-lg md:hidden md:gap-16">
                <Link$ href="/">
                    <Gdsc
                        width={iconSize}
                        height={iconSize}
                        className={`${isOpened ? 'opacity-100' : 'opacity-0'} ml-2.5 transition-opacity scale-75`}
                        onClick={close}
                    />
                </Link$>
                <HamburgerIcon isOpened={isOpened} onClick={() => setIsOpened((prev) => !prev)} />
            </nav>

            <div
                onClick={close}
                className={`${
                    isOpened ? 'pointer-events-auto translate-x-0' : 'pointer-events-none -translate-x-full'
                } fixed top-14 z-50 flex h-screen w-screen flex-col items-start justify-start gap-4 bg-black/5 px-7 py-12 backdrop-blur-3xl transition-all duration-700 ease-in-out md:hidden`}
            >
                <h1 className="font-eng text-5xl font-bold">Discover us</h1>

                <>
                    <NavButton type="scroll" href="/#about" onClick={close}>
                        About us
                    </NavButton>
                    <NavButton type="link" href="/blog/Project" onClick={close}>
                        Projects
                    </NavButton>

                    <NavButton type="link" href="/blog/Development" onClick={close}>
                        Blog
                    </NavButton>
                    <NavButton type="link" href="/events" onClick={close}>
                        Events
                    </NavButton>
                    <NavButton type="link" href="/members/3" onClick={close}>
                        Members
                    </NavButton>
                    {/* 
                    <NavButton type="link" href={(process.env.NEXT_PUBLIC_RECRUIT_FORM_URL as LinkPath) ?? '/'}>
                        <div className="font-bold">Recruiting</div>
                    </NavButton> */}
                </>
            </div>
        </>
    )
}
