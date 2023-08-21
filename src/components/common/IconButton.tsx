import { TailwindComponent } from './tailwind'

interface IconButtonProps extends TailwindComponent {
    onClick: () => void
    ariaLabel?: string
}
export const IconButton = ({ children, onClick, twClass }: React.PropsWithChildren<IconButtonProps>) => (
    <button
        type="button"
        onClick={onClick}
        className={`${twClass} flex items-center justify-center rounded-full bg-primary-whitegray stroke-black p-2 transition-opacity duration-300 scale-100 hover:opacity-75 active:scale-95`}
    >
        {children}
    </button>
)
