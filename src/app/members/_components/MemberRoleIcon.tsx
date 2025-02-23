import { Core, Lead, Organizer, TeamMember } from '~/components/icons'
import { MEMBER_DATA } from '~/src/interfaces/Common'

export const MemberRoleIcon = ({ MEMBER_ROLE }: Pick<MEMBER_DATA, 'MEMBER_ROLE'>) => (
    <>
        {MEMBER_ROLE === 'Lead' && (
            <Lead className="absolute right-[-0.5rem] top-[1.15rem] scale-125 md:right-[-0.6rem] md:top-7" />
        )}
        {MEMBER_ROLE === 'Organizer' && (
            <Organizer className="absolute right-[-0.5rem] top-[1.15rem] scale-125 md:right-[-0.6rem] md:top-7" />
        )}
        {MEMBER_ROLE === 'Core' && (
            <Core className="absolute right-[-0.5rem] top-[1.15rem] scale-125 md:right-[-0.6rem] md:top-7" />
        )}
        {MEMBER_ROLE === 'Team Member' && (
            <TeamMember className="absolute right-[-0.5rem] top-[1.15rem] scale-125 md:right-[-0.6rem] md:top-7" />
        )}
    </>
)
