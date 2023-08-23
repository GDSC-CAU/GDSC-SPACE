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
}
export const BenefitCard = ({
    children,
    white = false,
    twClass,
    rowAlign = 'start',
    colAlign = 'between',
    flexDirection = 'col',
}: React.PropsWithChildren<BenefitCardProps>) => {
    const flexLayout = `${tailwind.flexDirection[flexDirection]} ${tailwind.rowAlign[rowAlign]} ${tailwind.colAlign[colAlign]}`

    return (
        <div className={`${twClass} ${flexLayout} ${white ? 'bg-white' : 'bg-black'} flex gap-2 rounded-xl p-7`}>
            {children}
        </div>
    )
}

BenefitCard.Header = BenefitCardHeader
BenefitCard.Description = BenefitCardDescription
