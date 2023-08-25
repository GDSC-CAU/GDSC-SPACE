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

const GradientBackground = ({ rowIndex }: { rowIndex: number }) => (
    <div
        className={`z-10 px-52${
            rowIndex % 2 === 0
                ? 'absolute right-0 h-[18rem] w-[4rem] bg-gradient-to-l from-primary-hotpink to-transparent'
                : 'absolute left-0 h-[18rem] w-[4rem] bg-gradient-to-r from-primary-blue to-transparent'
        }`}
    />
)

interface RenderMemberByYearProps {
    members: MEMBER_DATA[]
}

export const MemberHorizontalScrollView = ({ members }: RenderMemberByYearProps) => {
    const dividedMembers = divideArrayIntoChunk(members, 6)

    return dividedMembers.map((memberChunk, rowIndex) => (
        <div key={rowIndex} className="relative">
            <div
                className={`flex flex-row gap-8 overflow-x-auto overflow-y-hidden px-4 py-7 scrollbar-hide ${
                    rowIndex % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
            >
                {memberChunk.map((member) => (
                    <MemberCard key={`${member.MEMBER_NAME}-${member.MEMBER_POSITION}`} member={member} />
                ))}
            </div>
            <GradientBackground rowIndex={rowIndex} />
        </div>
    ))
}
