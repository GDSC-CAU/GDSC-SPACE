import { Divider } from './Divider'
import { TailwindComponent } from './tailwind'

interface PageHeaderProps extends TailwindComponent {
    heading: string
}
export const PageHeader = ({ twClass, heading }: PageHeaderProps) => {
    return (
        <div className={`flex w-full flex-row items-center justify-between gap-12 ${twClass}`}>
            <Divider disableMargin />
            <h1 className="font-eng text-4xl font-medium">{heading}</h1>
            <Divider disableMargin />
        </div>
    )
}
