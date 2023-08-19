import { Member } from '../../interfaces/common'
import { MemberCard } from './_components'

export default function MemberList() {
    const bulkMembers: Array<Member> = [
        {
            name: '유용민',
            gender: 'Male',
            nickname: 'DEV.LR',
            role: 'Lead',
            year: '2기',
            position: 'Cloud Server / flutter',
            introduction: '안녕하세요, GDSC 3기 리더 유용민입니다. 잘 부탁드립니다:)',
            github: 'github.com/yymin1022',
            email: 'yymin1022@gmail.com',
            instagram: '@useful_min',
        },
        {
            name: '장준성',
            gender: 'Male',
            nickname: '단팥초',
            role: 'Core',
            year: '2기',
            position: 'Front-End',
            introduction: '안녕하세요~!~!',
            github: 'github.com/danpachodanpachodanpacho',
            email: 'danpa725@cau.ac.kr',
        },
        {
            name: '박지우',
            gender: 'Female',
            role: 'Member',
            year: '3기',
            nickname: 'Jiwoo',
            position: 'Front-End',
            introduction: '안녕하세용!!',
            github: 'github.com/jujuredt',
            email: 'juju.0_0._',
        },
    ]

    return (
        <main className="flex h-full w-full flex-row items-center justify-between gap-10">
            {bulkMembers.map((member) => (
                <MemberCard member={member} key={`${member.name}-${member.position}`} />
            ))}
        </main>
    )
}
