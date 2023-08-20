import { Core, Lead } from '~/components/icons'
import { MEMBER_DATA } from '../../../interfaces/common'

export const MemberRoleIcon = ({ MEMBER_ROLE }: Pick<MEMBER_DATA, 'MEMBER_ROLE'>) => (
    <>
        {MEMBER_ROLE === 'Lead' && <Lead className="absolute right-[-0.6rem] top-7 scale-125" />}
        {MEMBER_ROLE === 'Core' && <Core className="absolute right-[-0.6rem] top-7 scale-125" />}
    </>
)
