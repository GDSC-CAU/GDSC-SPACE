import { NavigationButton } from '~/src/components/common'
import type { API_BLOG_DETAIL } from '~/src/interfaces'

export const BlogNavigationButtons = (props: API_BLOG_DETAIL) => {
    return (
        <div className="flex w-full flex-row items-center justify-between">
            {props.BLOG_PREV_LINK?.LINK_ID ? (
                <NavigationButton href={`/blog/Design/${props.BLOG_PREV_LINK?.LINK_ID}`} left>
                    {props.BLOG_PREV_LINK.LINK_TEXT}
                </NavigationButton>
            ) : (
                <div></div>
            )}
            {props.BLOG_NEXT_LINK?.LINK_ID ? (
                <NavigationButton href={`/blog/Design/${props.BLOG_NEXT_LINK.LINK_ID}`}>
                    {props.BLOG_NEXT_LINK.LINK_TEXT}
                </NavigationButton>
            ) : (
                <div></div>
            )}
        </div>
    )
}
