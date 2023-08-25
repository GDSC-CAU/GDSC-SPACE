import type { MEMBER_DATA } from 'src/interfaces/common'
import { MemberCard } from './MemberCard'

function divideArrayIntoChunk<T>(arr: T[], chunkSize: number) {
    const dividedArray = []
    for (let i = 0; i < arr.length; i += chunkSize) {
        const chunkedArray = arr.slice(i, i + chunkSize)
        dividedArray.push(chunkedArray)
    }
    return dividedArray
}

interface RenderMemberByYearProps {
    members: MEMBER_DATA[]
}

export const MemberHorizontalScrollView = ({ members }: RenderMemberByYearProps) => {
    const dividedMembers = divideArrayIntoChunk(members, 6)

    return dividedMembers.map((memberChunk, rowIndex) => (
        <div
            key={rowIndex}
            className={`flex flex-row gap-8 overflow-x-auto overflow-y-hidden px-4 py-7 scrollbar-hide ${
                rowIndex % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
            }`}
        >
            {memberChunk.map((member) => (
                <MemberCard key={`${member.MEMBER_NAME}-${member.MEMBER_POSITION}`} member={member} />
            ))}
        </div>
    ))
}
