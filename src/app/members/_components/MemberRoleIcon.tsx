import { Core, Lead } from '~/components/icons'
import { Member } from '../page'

export const MemberRoleIcon = ({ role }: Pick<Member, 'role'>) => (
    <>
        {role === 'Lead' && <Lead className="absolute right-[-0.6rem] top-7 scale-125" />}
        {role === 'Core' && <Core className="absolute right-[-0.6rem] top-7 scale-125" />}
    </>
)
