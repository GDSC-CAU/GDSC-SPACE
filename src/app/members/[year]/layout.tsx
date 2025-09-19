import { Link$ } from '~/src/components/common'
import { MEMBER_PAGE_PARAMS } from '~/src/interfaces'
import { generateYearList } from '~/src/utils/generateYearList'

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

export default function MembersLayout({ children, params: { year } }: React.PropsWithChildren<MEMBER_PAGE_PARAMS>) {
    const yearList = generateYearList()
    return (
        <main className="my-10 flex h-full w-full flex-col items-center md:items-start md:gap-5 2xl:px-[200px]">
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
