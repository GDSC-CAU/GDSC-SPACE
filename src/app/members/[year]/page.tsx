/* eslint-disable @typescript-eslint/no-non-null-assertion */
import type { API_MEMBER_LIST } from '~/interfaces/Common'
import { MEMBER_PAGE_PARAMS } from '~/src/interfaces'
import { Fetcher } from '~/src/utils'
import { MemberHorizontalScrollView } from '../_components'

const fetcher = new Fetcher({
    baseUrl: 'http://localhost:3000',
})

export default async function MemberPage({ params: { year } }: MEMBER_PAGE_PARAMS) {
    const members = await fetcher.get<API_MEMBER_LIST>(`/members/getList/${year}`)
    const isMemberExist = members.MEMBER_LIST?.length !== 0

    return (
        <>
            {isMemberExist ? (
                <div className="flex flex-col py-4">
                    <MemberHorizontalScrollView members={members.MEMBER_LIST!} />
                </div>
            ) : (
                <div className="flex flex-col py-4">
                    <p className="font-serif text-3xl">Member {year} is not exists</p>
                </div>
            )}
        </>
    )
}
