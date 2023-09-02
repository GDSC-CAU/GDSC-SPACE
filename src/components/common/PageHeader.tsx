import { Divider } from './Divider'
import { TailwindComponent } from './tailwind'

interface PageHeaderProps extends TailwindComponent {
    heading: string
}
export const PageHeader = ({ twClass, heading }: PageHeaderProps) => {
    return (
        <div className={`flex w-full flex-row items-center justify-center gap-12 ${twClass}`}>
            <Divider disableMargin twClass="w-full hidden md:block" />
            <h1 className="text-center font-eng text-4xl font-medium">{heading}</h1>
            <Divider disableMargin twClass="w-full hidden md:block" />
        </div>
    )
}
