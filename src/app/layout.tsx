import '../styles/tailwind.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

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
        <html lang="kr">
            <body className={`${inter.className} h-screen max-h-screen min-h-screen`}>
                <Links />
                <>{children}</>
            </body>
        </html>
    )
}
