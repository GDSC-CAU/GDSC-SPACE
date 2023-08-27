import { TailwindComponent } from './tailwind'

interface DividerProps extends TailwindComponent {
    disableMargin?: boolean
    darkGray?: boolean
}
export const Divider = ({ disableMargin = false, darkGray = false, twClass }: DividerProps) => (
    <span
        className={`${twClass} ${disableMargin === false && 'mb-7 mt-12'} ${
            darkGray ? 'bg-primary-logo' : 'bg-primary-whitegray'
        } h-[0.5px]`}
    />
)
