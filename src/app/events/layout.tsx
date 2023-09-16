import { EventRound } from '~/src/components/icons'

export default function EventLayout({ children }: React.PropsWithChildren) {
    return (
        <main className="relative flex min-w-[50%] flex-col items-center justify-center">
            <EventRound className="pointer-events-none absolute -top-96 left-1/2 -z-50 -translate-x-1/2 scale-[0.575]" />
            {children}
        </main>
    )
}
