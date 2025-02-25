import { redirect } from 'next/navigation'

const LATEST_YEAR = 4

export default function MemberRedirection() {
    redirect(`/members/${LATEST_YEAR}`)
}
