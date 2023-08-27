import { TailwindComponent } from '~/components/common/tailwind'
import { BenefitCardDescription } from './BenefitCardDescription'
import { BenefitCardHeader } from './BenefitCardHeader'

const tailwind = {
    flexDirection: {
        row: 'flex-row',
        col: 'flex-col',
    },
    rowAlign: {
        start: 'items-start',
        center: 'items-center',
        end: 'items-end',
    },
    colAlign: {
        start: 'justify-start',
        center: 'justify-center',
        end: 'justify-end',
        between: 'justify-between',
        around: 'justify-around',
    },
} as const

export interface BenefitCardProps extends TailwindComponent {
    white?: boolean
    rowAlign?: keyof (typeof tailwind)['rowAlign']
    colAlign?: keyof (typeof tailwind)['colAlign']
    flexDirection?: keyof (typeof tailwind)['flexDirection']
    zeroPadding?: boolean
}
export const BenefitCard = ({
    children,
    white = false,
    twClass,
    rowAlign = 'start',
    colAlign = 'between',
    flexDirection = 'col',
    zeroPadding = false,
}: React.PropsWithChildren<BenefitCardProps>) => {
    const flexLayout = `${tailwind.flexDirection[flexDirection]} ${tailwind.rowAlign[rowAlign]} ${tailwind.colAlign[colAlign]}`
    const cardStyle = `${twClass} ${flexLayout} ${zeroPadding ? 'p-0' : 'p-7'} ${white ? 'bg-white' : 'bg-black'}`

    return <div className={`${cardStyle} flex h-full w-full gap-2 rounded-xl`}>{children}</div>
}

BenefitCard.Header = BenefitCardHeader
BenefitCard.Description = BenefitCardDescription
