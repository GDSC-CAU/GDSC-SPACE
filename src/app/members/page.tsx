import { redirect } from 'next/navigation'
import { getLatestYear } from '~/src/utils/generateYearList'

const LATEST_YEAR = getLatestYear()

export default function MemberRedirection() {
    redirect(`/members/${LATEST_YEAR}`)
}
