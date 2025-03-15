import '../styles/tailwind.css'
import { Poppins } from 'next/font/google'
import localFont from 'next/font/local'
import { NavBar } from './_components'
import 'react-notion-x/src/styles.css'
import '../styles/nord.css'

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

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    display: 'swap',
    variable: '--poppins',
})

export const metadata = {
    title: 'GDGoC Space',
    description: 'welcome to space',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="kr" className={`${poppins.variable} ${pretendard.variable}`}>
            <head>
                <link rel="icon" href="/favicon.svg" />
                <link rel="apple-touch-icon" href="/favicon.svg" />
                <title>GDGoC CAU</title>
            </head>
            <body className="relative h-fit min-h-screen overflow-x-hidden bg-theme-background font-kor text-theme-font">
                <NavBar />
                <div id="modal-root" />
                <main className="mx-auto h-full w-full px-10 md:px-28 lg:px-52">{children}</main>
            </body>
        </html>
    )
}
