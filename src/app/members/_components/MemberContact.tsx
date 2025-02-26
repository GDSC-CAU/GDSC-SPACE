export interface MemberContactProps {
    contact?: string
    icon: React.ReactNode
}
export const MemberContact = ({ contact, icon }: MemberContactProps) => {
    if (!contact || contact.trim() === '') return

    return (
        <div className="z-20 flex w-full flex-row gap-1">
            {icon}
            <p className="w-24 truncate text-left font-eng text-3xs text-black md:w-36 md:text-xs">{contact}</p>
        </div>
    )
}
