import { TailwindComponent } from '~/components/common/tailwind'

export const BenefitCardDescription = ({ twClass, children }: React.PropsWithChildren<TailwindComponent>) => {
    return <div className={`${twClass} flex flex-col gap-2`}>{children}</div>
}
const Kor = ({ children, twClass }: React.PropsWithChildren<TailwindComponent>) => (
    <p className={`${twClass} font-kor font-light`}>{children}</p>
)
const Eng = ({ children, twClass }: React.PropsWithChildren<TailwindComponent>) => (
    <p className={`${twClass} font-eng font-light`}>{children}</p>
)

BenefitCardDescription.Kor = Kor
BenefitCardDescription.Eng = Eng
