import { Link$ } from '~/src/components/common'
import { MEMBER_PAGE_PARAMS } from '~/src/interfaces'

interface YearButtonProps {
    year: string
    isYearActive: boolean
}
const YearButton = ({ year, isYearActive }: React.PropsWithChildren<YearButtonProps>) => {
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
            1st
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
        <main className="flex h-full w-full flex-col items-start justify-between gap-10">
            <div className="flex flex-row items-center justify-between gap-7 pb-10 pl-8">
                {yearList.map(({ year: yearNumber, title }) => (
                    <YearButton key={yearNumber} year={yearNumber} isYearActive={yearNumber === year}>
                        {title}
                    </YearButton>
                ))}
            </div>

            {children}
        </main>
    )
}
