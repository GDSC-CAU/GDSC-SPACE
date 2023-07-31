import '../styles/tailwind.css'
import { Inter } from 'next/font/google'
import localFont from 'next/font/local'
import Link from 'next/link'

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

const Links = () => {
    return (
        <div className="flex flex-row items-center justify-center gap-32">
            <Link href="/blog">Blog</Link>
            <Link href="/events">Events</Link>
            <Link href="/members">Members</Link>
            <Link href="/projects">Projects</Link>
        </div>
    )
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="kr" className={`${googleSans.variable} ${pretendard.variable}`}>
            <body className="h-screen max-h-screen min-h-screen bg-background font-kor">
                <Links />
                <>{children}</>
            </body>
        </html>
    )
}
