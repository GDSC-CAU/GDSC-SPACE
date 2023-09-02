import { API_BLOG_DETAIL } from '~/src/interfaces'
import { Notion } from './NotionRenderer'

export const ProjectPostDetailView = async (props: API_BLOG_DETAIL) => {
    return (
        <div className="relative flex w-full flex-col items-center justify-center gap-10">
            <section className="flex w-full flex-col items-center justify-center gap-10">
                <h1 className="flex w-full items-center justify-center p-4 text-4xl font-bold md:text-5xl">
                    {props.BLOG_TITLE}
                </h1>
                <ul className="flex w-full flex-row items-center justify-between">
                    <li className="flex w-full items-center justify-center p-2 font-eng text-base md:text-base">
                        {props.BLOG_AUTHOR}
                    </li>
                    <li className="flex w-full items-center justify-center p-2 font-eng text-base md:text-base">
                        {props.BLOG_UPDATED_AT}
                    </li>
                </ul>
            </section>

            <Notion recordMap={props.BLOG_CONTENT} />
        </div>
    )
}
