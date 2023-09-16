import { tw } from '~/src/styles/util'
import { Divider } from './Divider'
import { GdscLogo } from './GdscLogo'
import { TailwindComponent } from './tailwind'

interface FooterProps extends TailwindComponent {
    main?: boolean
}

const footerData: Readonly<
    Array<{
        type: 'email' | 'copyright' | 'maker'
        content: React.ReactNode
    }>
> = [
    {
        type: 'email',
        content: 'gdsc.cau@gmail.com',
    },
    {
        type: 'maker',
        content: (
            <>
                Designed by Sohyun Kim, Serin Seong
                <br />
                Developed by Yeojin Kim, Jiwoo Park, Yujin Son, Yongmin Yoo, Junesung Jang
            </>
        ),
    },
    {
        type: 'copyright',
        content: (
            <>
                All contents of this website are the property of Google Developer Student Clubs Chung Ang University. No
                part of this site, including all text and images, may be reproduced in any form without the prior
                written consent of Google Developer Student Clubs Chung Ang University.
            </>
        ),
    },
] as const

export const Footer = ({ main = false, twClass }: FooterProps) => {
    const mainFooterStyle = `${
        main
            ? `items-center ${tw.fullScreen} h-fit gap-10 bg-gradient-to-t from-black to-primary-darkgray px-10 md:px-20`
            : 'items-start'
    }`

    return (
        <footer className={`${twClass} ${mainFooterStyle} flex w-full flex-col justify-center py-20`}>
            <Divider darkGray twClass="w-full" />
            <GdscLogo twClass={`${main ? 'mt-4 mb-5' : 'mt-6 mb-7'}`} />

            <ul className={`${main ? 'items-center' : 'items-start'} mt-4 flex flex-col gap-3`}>
                {footerData.map(({ content, type }, order) => {
                    if (main === false && type === 'copyright') return null

                    const shouldRenderDivider = order !== 0 && main
                    return (
                        <div key={type}>
                            {shouldRenderDivider && <Divider disableMargin darkGray twClass="w-2.5" />}
                            <li key={type} className="max-w-4xl">
                                <p
                                    className={`${
                                        main ? 'text-center' : 'text-left'
                                    } font-eng text-sm font-light text-primary-logo`}
                                >
                                    {content}
                                </p>
                            </li>
                        </div>
                    )
                })}
            </ul>
        </footer>
    )
}
