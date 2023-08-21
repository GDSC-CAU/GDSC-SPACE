import { TailwindComponent } from './tailwind'

interface DividerProps extends TailwindComponent {
    disableMargin?: boolean
}
export const Divider = ({ disableMargin = false, twClass }: DividerProps) => (
    <span className={`${twClass} ${disableMargin === false && 'mb-7 mt-12'} h-[0.5px] w-full bg-[#D9D9D9]`} />
)
