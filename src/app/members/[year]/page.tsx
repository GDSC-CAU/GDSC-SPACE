/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Footer } from '~/src/components/common'
import type { API_RESPONSE, MEMBER_PAGE_PARAMS } from '~/src/interfaces'
import type { API_MEMBER_LIST } from '~/src/interfaces/Common'
import { Fetcher } from '~/src/utils'
import { MemberHorizontalScrollView } from '../_components'

const fetcher = new Fetcher({
    baseUrl: 'http://localhost:3000',
})

export default async function MemberPage({ params: { year } }: MEMBER_PAGE_PARAMS) {
    const members = await fetcher.get<API_RESPONSE<API_MEMBER_LIST>>(`/members/getList/${year}`)
    const isMemberExist = members.RESULT_DATA.MEMBER_LIST?.length !== 0

    return (
        <>
            {isMemberExist ? (
                <div className="flex w-full flex-col py-2">
                    <MemberHorizontalScrollView members={members.RESULT_DATA.MEMBER_LIST} />
                </div>
            ) : (
                <div className="flex flex-col py-2">
                    <p className="font-eng text-3xl">Member {year} is not exists</p>
                </div>
            )}
            <Footer />
        </>
    )
}
