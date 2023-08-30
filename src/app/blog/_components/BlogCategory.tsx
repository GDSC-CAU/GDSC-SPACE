import { TailwindComponent } from '~/src/components/common/tailwind'

interface BlogCategoryProps extends TailwindComponent {
    onClick: () => void
    isActive: boolean
}

export const BlogCategory = ({ isActive, onClick, children, twClass }: React.PropsWithChildren<BlogCategoryProps>) => {
    return (
        <button type="button" onClick={onClick} className={`${twClass} group`}>
            {isActive ? (
                <div className="w-full whitespace-nowrap break-words">
                    <p className="text-base font-semibold">{children}</p>
                    <div className="h-[0.75px] w-full min-w-full rounded bg-theme-font" />
                </div>
            ) : (
                <div className="w-full whitespace-nowrap break-words">
                    <p className="text-base">{children}</p>
                    <div className="h-[0.75px] w-full min-w-full rounded bg-theme-font transition-all duration-200 scale-x-0 group-hover:opacity-90 group-hover:scale-x-100" />
                </div>
            )}
        </button>
    )
}
