import { redirect } from 'next/navigation'

const LATEST_YEAR = 3

export default function MemberRedirection() {
    redirect(`/members/${LATEST_YEAR}`)
}
