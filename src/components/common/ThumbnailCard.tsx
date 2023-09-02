import { FillImage, Link$, LinkPath } from '~/components/common'
import { TailwindComponent } from './tailwind'

interface ThumbnailCardProps<ThumbnailMeta> extends TailwindComponent {
    href: LinkPath
    meta: ThumbnailMeta
    style?: React.CSSProperties
    transformer: (originalMeta: ThumbnailMeta) => {
        title: string
        description: string
        imageSrc: string
        cardType: string
        date: string
    }
}
export function ThumbnailCard<ThumbnailMeta>({
    href,
    meta,
    transformer,
    twClass,
    style,
}: ThumbnailCardProps<ThumbnailMeta>) {
    const thumbnailMeta = transformer(meta)

    return (
        <Link$
            href={href}
            style={style}
            className={`${twClass} group flex w-full flex-col gap-0 rounded-2xl border-2 border-transparent bg-transparent transition-colors duration-300 hover:border-primary-blue md:w-64 md:rounded-[0.65rem]`}
        >
            <FillImage
                containerClass="flex h-[12rem] w-full items-center justify-end rounded-t-2xl overflow-hidden md:rounded-t-lg "
                imageClass="h-full w-full duration-300 scale-110 brightness-100 transition-all group-hover:brightness-110 ease-in-out group-hover:scale-105 transform-gpu"
                src={thumbnailMeta.imageSrc}
                alt={`${thumbnailMeta.title}-image`}
                sizes="(max-width: 768px) 500px, (max-width: 1200px) 750px, 900px"
                quality={75}
                priority
            />

            <section className="flex h-44 w-full flex-col items-start justify-between overflow-y-hidden rounded-b-2xl bg-black p-5 md:rounded-b-lg">
                <div>
                    <ul className="flex flex-row gap-0 pb-2 font-kor text-xs font-light">
                        <li className="max-w-[6rem] truncate">{thumbnailMeta.cardType}</li>
                        <li>﹒</li>
                        <li className="max-w-[6rem] truncate">{thumbnailMeta.date}</li>
                    </ul>

                    <h1 className="max-w-[13rem] truncate font-eng text-xl">{thumbnailMeta.title}</h1>
                </div>
                <p className="line-clamp-4 font-kor text-xs font-light">{thumbnailMeta.description}</p>
            </section>
        </Link$>
    )
}
