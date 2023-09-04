import { Core, Lead } from '~/components/icons'
import { MEMBER_DATA } from '~/src/interfaces/Common'

export const MemberRoleIcon = ({ MEMBER_ROLE }: Pick<MEMBER_DATA, 'MEMBER_ROLE'>) => (
    <>
        {MEMBER_ROLE === 'Lead' && (
            <Lead className="absolute right-[-0.5rem] top-[1.15rem] scale-125 md:right-[-0.6rem] md:top-7" />
        )}
        {MEMBER_ROLE === 'Core' && (
            <Core className="absolute right-[-0.5rem] top-[1.15rem] scale-125 md:right-[-0.6rem] md:top-7" />
        )}
    </>
)
