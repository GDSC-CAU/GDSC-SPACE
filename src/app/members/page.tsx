import { MemberCard } from './_components/Membercard'

export type Member = {
    name: string
    gender: 'Male' | 'Female'
    nickname?: string
    role: 'Lead' | 'Core' | 'Member'
    imageSrc?: string
    year: '1기' | '2기' | '3기'
    position: string
    introduction: string
    github?: string
    email?: string
    instagram?: string
}

export default function MemberList() {
    const members: Member[] = [
        {
            name: '유용민',
            gender: 'Male',
            nickname: 'DEV.LR',
            role: 'Lead',
            imageSrc: '/GDSC_logo.png',
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
            github: 'github.com/danpacho',
            email: 'danpa725@cau.ac.kr',
        },
        {
            name: '박지우',
            gender: 'Female',
            role: 'Member',
            year: '3기',
            position: 'Front-End',
            introduction: '안녕하세용!!',
            github: 'github.com/jujuredt',
            email: 'juju.0_0._',
        },
    ]

    return (
        <main className="flex-raw flex h-full w-full items-center justify-between p-24">
            {members.map((member) => (
                <MemberCard member={member} key={`${member.name}-${member.position}`} />
            ))}
        </main>
    )
}
