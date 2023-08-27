import { TailwindComponent } from './tailwind'

interface DividerProps extends TailwindComponent {
    disableMargin?: boolean
    darkGray?: boolean
}
export const Divider = ({ disableMargin = false, darkGray = false, twClass }: DividerProps) => (
    <span
        className={`${twClass} ${disableMargin === false && 'mb-7 mt-12'} ${
            darkGray ? 'bg-[#656C73]' : 'bg-[#D9D9D9]'
        } h-[0.5px]`}
    />
)
