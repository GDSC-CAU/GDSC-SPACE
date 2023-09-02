import type { API_BLOG_DETAIL } from '~/src/interfaces'
import { Notion } from './NotionRenderer'

export const DevDesignPostDetailView = async (props: API_BLOG_DETAIL) => {
    return (
        <div className="relative flex w-full flex-col items-center justify-center gap-7">
            <section className="mt-10 flex w-full flex-col items-center justify-center md:mt-12">
                <h1 className="flex w-full items-center justify-center border-x-[0.5px] border-b-0 border-t-[0.5px] border-primary-whitegray p-4 text-lg font-bold md:text-xl">
                    {props.BLOG_TITLE}
                </h1>
                <ul className="flex w-full flex-row items-center justify-center">
                    <li className="flex w-full items-center justify-center text-ellipsis whitespace-nowrap break-normal border-y-[0.5px] border-l-[0.5px] border-primary-whitegray p-2 font-eng text-sm md:text-base">
                        {props.BLOG_TAGS.map((tag) => `#${tag}  `).join('')}
                    </li>
                    <li className="flex w-full items-center justify-center whitespace-nowrap border-[0.5px] border-primary-whitegray p-2 font-eng text-sm md:text-base">
                        {props.BLOG_AUTHOR}
                    </li>
                    <li className="flex w-full items-center justify-center whitespace-nowrap border-y-[0.5px] border-r-[0.5px] border-primary-whitegray p-2 font-eng text-sm md:text-base">
                        {props.BLOG_UPDATED_AT}
                    </li>
                </ul>
            </section>

            <Notion recordMap={props.BLOG_CONTENT} />
        </div>
    )
}
