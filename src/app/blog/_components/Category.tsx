import { TailwindComponent } from '~/src/components/common/tailwind'

interface TagProps extends TailwindComponent {
    onClick: () => void
    isActive: boolean
}

export const Category = ({ isActive, onClick, children, twClass }: React.PropsWithChildren<TagProps>) => {
    return (
        <button type="button" onClick={onClick} className={`${twClass} group`}>
            {isActive ? (
                <div>
                    <p className="text-xl font-semibold">{children}</p>
                    <div className="h-[0.75px] w-full rounded bg-theme-font" />
                </div>
            ) : (
                <div>
                    <p className="text-xl">{children}</p>
                    <div className="h-[0.75px] w-full rounded bg-theme-font transition-all duration-200 scale-x-0 group-hover:opacity-90 group-hover:scale-x-100" />
                </div>
            )}
        </button>
    )
}
