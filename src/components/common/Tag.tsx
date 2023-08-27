import { TailwindComponent } from './tailwind'

interface TagProps extends TailwindComponent {
    onClick: () => void
    isActive: boolean
}

export const Tag = ({ isActive, onClick, children, twClass }: React.PropsWithChildren<TagProps>) => {
    return (
        <button
            type="button"
            onClick={onClick}
            className={`${twClass} flex items-center justify-center rounded-full border px-7 py-1 font-eng text-3xl opacity-100 transition-colors duration-300 hover:border-primary-blue active:opacity-75 ${
                isActive
                    ? 'border-primary-blue bg-primary-blue font-medium text-white'
                    : 'border-primary-whitegray bg-transparent font-normal'
            }`}
        >
            {children}
        </button>
    )
}
