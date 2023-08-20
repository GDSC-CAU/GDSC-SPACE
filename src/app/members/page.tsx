import { MEMBER_DATA } from '../../interfaces/common'
import { MemberCard } from './_components'

export default function MemberList() {
    const bulkMembers: Array<MEMBER_DATA> = [
        {
            MEMBER_INSTAGRAM: 'instagram',
            MEMBER_IMAGE: '',
            MEMBER_LINK_BEHANCE: '',
            MEMBER_NAME: '유용민',
            MEMBER_GENDER: 'Male',
            MEMBER_NICKNAME: 'DEV.LR',
            MEMBER_ROLE: 'Lead',
            MEMBER_YEAR: '2기',
            MEMBER_POSITION: 'Cloud Server / flutter',
            MEMBER_COMMENT: '안녕하세요, GDSC 3기 리더 유용민입니다. 잘 부탁드립니다:)',
            MEMBER_LINK_GITHUB: 'github.com/yymin1022',
            MEMBER_EMAIL: 'yymin1022@gmail.com',
        },
        {
            MEMBER_INSTAGRAM: 'instagram',
            MEMBER_IMAGE: '',
            MEMBER_LINK_BEHANCE: '',
            MEMBER_NAME: '장준성',
            MEMBER_GENDER: 'Male',
            MEMBER_NICKNAME: '단팥초',
            MEMBER_ROLE: 'Core',
            MEMBER_YEAR: '2기',
            MEMBER_POSITION: 'Front-End',
            MEMBER_COMMENT: '안녕하세요~!~!',
            MEMBER_LINK_GITHUB: 'github.com/danpachodanpachodanpacho',
            MEMBER_EMAIL: 'danpa725@cau.ac.kr',
        },
        {
            MEMBER_INSTAGRAM: 'instagram',
            MEMBER_IMAGE: '',
            MEMBER_LINK_BEHANCE: '',
            MEMBER_NAME: '박지우',
            MEMBER_GENDER: 'Female',
            MEMBER_ROLE: 'Member',
            MEMBER_YEAR: '3기',
            MEMBER_NICKNAME: 'Jiwoo',
            MEMBER_POSITION: 'Front-End',
            MEMBER_COMMENT: '안녕하세용!!',
            MEMBER_LINK_GITHUB: 'github.com/jujuredt',
            MEMBER_EMAIL: 'juju.0_0._',
        },
    ]

    return (
        <main className="flex h-full w-full flex-row items-center justify-between gap-10">
            {bulkMembers.map((member) => (
                <MemberCard member={member} key={`${member.MEMBER_NAME}-${member.MEMBER_POSITION}`} />
            ))}
        </main>
    )
}
