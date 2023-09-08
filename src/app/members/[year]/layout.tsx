import { Link$ } from '~/src/components/common'
import { MEMBER_PAGE_PARAMS } from '~/src/interfaces'

interface YearButtonProps {
    year: string
    isYearActive: boolean
    children: React.ReactNode
}

const YearButton = ({ year, isYearActive, children }: React.PropsWithChildren<YearButtonProps>) => {
    return (
        <Link$
            type="button"
            aria-label={`${year}year members`}
            href={`/members/${year}`}
            className={`rounded-full px-4 py-1 font-eng text-base text-white hover:underline ${
                isYearActive
                    ? 'border-primary-blue bg-primary-blue font-semibold'
                    : 'border-primary-whitegray bg-transparent font-normal'
            }`}
        >
            {children}
        </Link$>
    )
}

const yearList = [
    {
        year: '1',
        title: '1st',
    },
    {
        year: '2',
        title: '2nd',
    },
    {
        year: '3',
        title: '3rd',
    },
] as const

export default function MembersLayout({ children, params: { year } }: React.PropsWithChildren<MEMBER_PAGE_PARAMS>) {
    return (
        <main className="flex h-full w-full flex-col items-center md:items-start md:gap-10 md:px-[200px]">
            <div className="flex flex-row items-center justify-between gap-3 pl-1.5 md:gap-7 md:pb-5 md:pt-10">
                {yearList.map(({ year: yearNumber, title }) => (
                    <YearButton key={yearNumber} year={yearNumber} isYearActive={yearNumber === year}>
                        {title}
                    </YearButton>
                ))}
            </div>
            <div className="md:w-full md:items-center md:justify-center">{children}</div>
        </main>
    )
}
