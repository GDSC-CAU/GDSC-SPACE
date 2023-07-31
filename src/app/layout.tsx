import '../styles/tailwind.css'
import { Inter } from 'next/font/google'
import localFont from 'next/font/local'
import { Gdsc } from '~/components/icons'
import { Link$, type LinkPath } from '../components'

const pretendard = localFont({
    src: [
        { path: '../styles/fonts/100.woff2', weight: '100', style: 'normal' },
        { path: '../styles/fonts/200.woff2', weight: '200', style: 'normal' },
        { path: '../styles/fonts/300.woff2', weight: '300', style: 'normal' },
        { path: '../styles/fonts/400.woff2', weight: '400', style: 'normal' },
        { path: '../styles/fonts/500.woff2', weight: '500', style: 'normal' },
        { path: '../styles/fonts/600.woff2', weight: '600', style: 'normal' },
        { path: '../styles/fonts/700.woff2', weight: '700', style: 'normal' },
        { path: '../styles/fonts/800.woff2', weight: '800', style: 'normal' },
        { path: '../styles/fonts/900.woff2', weight: '900', style: 'normal' },
    ],
    variable: '--pretendard',
})

//TODO: 영어 font 저녁에 바뀝니다
const googleSans = Inter({
    subsets: ['latin'],
    display: 'swap',
    variable: '--google-sans',
})

export const metadata = {
    title: 'GDSC Space',
    description: 'welcome to space',
}

const NavButton = ({
    href,
    children,
    disableUnderline = false,
}: {
    href: LinkPath
    children: React.ReactNode
    disableUnderline?: boolean
}) => {
    return (
        <Link$ className="group select-none text-xs md:text-sm" href={href}>
            <p className="transition-opacity group-hover:opacity-90">{children}</p>
            {!disableUnderline && (
                <div className="h-[0.75px] w-full scale-x-0 rounded bg-gray-200 transition-all duration-200 group-hover:scale-x-100 group-hover:opacity-90" />
            )}
        </Link$>
    )
}

const NavBar = () => {
    const iconSize = 55

    return (
        <nav className="sticky top-0 flex h-14 flex-row items-center justify-center gap-10 bg-neutral-600/5 py-4 backdrop-blur-2xl md:h-20 md:gap-28">
            <NavButton href="/" disableUnderline>
                <Gdsc width={iconSize} height={iconSize} className="scale-75 md:scale-100" />
            </NavButton>
            <NavButton href="/blog">Blog</NavButton>
            <NavButton href="/events">Events</NavButton>
            <NavButton href="/members">Members</NavButton>
        </nav>
    )
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="kr" className={`${googleSans.variable} ${pretendard.variable}`}>
            <body className="relative h-screen max-h-screen min-h-screen bg-background font-kor text-white">
                <NavBar />

                <main className="mx-auto h-full w-2/3">{children}</main>
            </body>
        </html>
    )
}
