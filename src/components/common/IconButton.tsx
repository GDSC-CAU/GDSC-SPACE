import { TailwindComponent } from './tailwind'

interface IconButtonProps extends TailwindComponent {
    onClick?: () => void
    ariaLabel?: string
    disableScaleOnActive?: boolean
}
export const IconButton = ({
    children,
    onClick,
    twClass,
    disableScaleOnActive = false,
    ariaLabel = 'button',
}: React.PropsWithChildren<IconButtonProps>) => (
    <div
        onClick={onClick}
        aria-label={ariaLabel}
        className={`${twClass} flex items-center justify-center rounded-full bg-primary-whitegray stroke-black p-2 transition-opacity duration-300 scale-100 hover:opacity-75 ${
            disableScaleOnActive === false && 'active:scale-95 group-active:scale-95'
        }`}
    >
        {children}
    </div>
)
