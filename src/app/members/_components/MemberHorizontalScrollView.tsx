import type { MEMBER_DATA } from '~/src/interfaces/Common'
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
        className={`absolute z-10 h-[20rem] w-[5rem] ${
            rowIndex % 2 === 0
                ? 'right-0 bg-gradient-to-l from-primary-darkgray to-transparent'
                : 'left-0 bg-gradient-to-r from-primary-darkgray to-transparent'
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
            <GradientBackground rowIndex={rowIndex} />
            <div
                className={`flex flex-row gap-8 overflow-x-auto overflow-y-hidden px-4 py-7 scrollbar-hide ${
                    rowIndex % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
            >
                {memberChunk.map((member) => (
                    <MemberCard key={`${member.MEMBER_NAME}-${member.MEMBER_POSITION}`} member={member} />
                ))}
            </div>
        </div>
    ))
}
