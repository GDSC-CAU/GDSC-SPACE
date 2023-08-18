import '../styles/tailwind.css'
import { Poppins } from 'next/font/google'
import localFont from 'next/font/local'
import { NavBar } from './_components'

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
    title: 'GDSC Space',
    description: 'welcome to space',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="kr" className={`${poppins.variable} ${pretendard.variable}`}>
            <body className="relative h-fit min-h-screen bg-theme-background font-kor text-theme-font">
                <NavBar />
                <div id="modal-root" />
                <main className="mx-auto h-full w-full px-52">{children}</main>
            </body>
        </html>
    )
}
