export interface MemberContactProps {
    contact?: string
    icon: React.ReactNode
}
export const MemberContact = ({ contact, icon }: MemberContactProps) => {
    if (!contact) return

    return (
        <div className="z-20 flex w-full flex-row gap-1">
            {icon}
            <p className="w-[9rem] truncate text-left font-eng text-xs text-black">{contact}</p>
        </div>
    )
}
