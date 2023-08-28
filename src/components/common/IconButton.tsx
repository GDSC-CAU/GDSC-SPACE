import { TailwindComponent } from './tailwind'

export interface IconButtonProps extends TailwindComponent {
    onClick?: () => void
    ariaLabel?: string
    disableScaleOnActive?: boolean
    gray?: boolean
    mobile?: boolean
}
export const IconButton = ({
    children,
    onClick,
    twClass,
    disableScaleOnActive = false,
    ariaLabel = 'button',
    gray = false,
}: React.PropsWithChildren<IconButtonProps>) => (
    <div
        onClick={onClick}
        aria-label={ariaLabel}
        className={`${twClass} ${gray ? 'bg-primary-whitegray' : 'bg-white'} ${
            disableScaleOnActive === false && 'active:scale-95 group-active:scale-95'
        } flex items-center justify-center rounded-full stroke-black
         p-1.5 transition-opacity duration-300 scale-100 hover:opacity-75 `}
    >
        {children}
    </div>
)
