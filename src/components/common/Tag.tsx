import { TailwindComponent } from './tailwind'

interface TagProps extends TailwindComponent {
    isActive: boolean
    onClick?: () => void
}

export const Tag = ({ isActive, children, onClick, twClass }: React.PropsWithChildren<TagProps>) => {
    return (
        <button
            type="button"
            onClick={onClick}
            className={`${twClass} flex items-center justify-center rounded-full border px-4 py-1 font-eng text-base opacity-100 transition-colors duration-300 hover:border-primary-blue active:opacity-75 md:px-7 md:py-2 md:text-2xl ${
                isActive
                    ? 'border-primary-blue bg-primary-blue font-medium text-white'
                    : 'border-primary-whitegray bg-transparent font-light'
            }`}
        >
            {children}
        </button>
    )
}
