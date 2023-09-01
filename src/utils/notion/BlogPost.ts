/* eslint-disable @typescript-eslint/no-non-null-assertion */
import type { BLOG_POST_META } from '~/src/interfaces'
import { type NotionBlockManager } from './BlockManager'
import { type NotionDbManager } from './DbManager'

interface NotionBlogPostConstructor {
    notionDbManager: NotionDbManager
    notionPageManager: NotionBlockManager
}

export class NotionBlogPost {
    private $db: NotionDbManager
    private $block: NotionBlockManager

    public label?: string
    private fetchedResults: Map<
        string,
        Awaited<ReturnType<NotionDbManager['$notion']['databases']['query']>>['results']
    > = new Map()

    public constructor({ notionDbManager, notionPageManager }: NotionBlogPostConstructor) {
        this.$db = notionDbManager
        this.$block = notionPageManager
    }

    private isValidMetaData(key: string): boolean {
        const validMetaKeys = ['tags', 'published', 'description', 'thumbnail', 'author', 'category', 'title']
        return validMetaKeys.includes(key)
    }

    public async getPostCategories(dbId: string): Promise<Array<string>> {
        const databaseField = await this.$db.retrieveDatabase(dbId)

        if (
            'category' in databaseField.properties &&
            databaseField.properties.category.type === 'multi_select' &&
            databaseField.properties.category.multi_select
        ) {
            const allPostCategories = databaseField.properties.category.multi_select.options.map(
                (option) => option.name
            )
            return allPostCategories
        }

        throw Error(`Can not find blog post category at ${this.label}`)
    }

    private async getPublishedPost(dbId: string) {
        return await this.$db.queryDatabase(dbId, {
            filter: {
                property: 'published',
                checkbox: {
                    equals: true,
                },
            },
        })
    }

    public async getAllPostMeta<Meta extends BLOG_POST_META>(
        dbId: string
    ): Promise<{ success: boolean; response: Array<Meta> }> {
        const newPost = await this.getPublishedPost(dbId)
        this.fetchedResults.set(dbId, newPost)

        const isFetchFailed = !newPost
        if (isFetchFailed)
            return {
                success: false,
                response: [],
            }

        const allPostMeta = newPost.reduce<Array<Meta>>((acc, post) => {
            const isAllMetaIncluded =
                'properties' in post && Object.keys(post.properties).every((key) => this.isValidMetaData(key))
            const isValidPost = post.object === 'page' && isAllMetaIncluded

            if (isValidPost) {
                const { id: postId, last_edited_time: updatedAt } = post
                const author =
                    post.properties.author && post.properties.author.type === 'rich_text'
                        ? post.properties.author.rich_text[0]?.plain_text ?? 'ERROR'
                        : 'ERROR'

                const title =
                    post.properties.title && post.properties.title.type === 'title'
                        ? post.properties.title.title[0]?.plain_text ?? 'ERROR'
                        : 'ERROR'

                const description =
                    post.properties.description && post.properties.description.type === 'rich_text'
                        ? post.properties.description.rich_text[0]?.plain_text
                        : 'ERROR'

                const tags =
                    post.properties.tags && post.properties.tags.type === 'rich_text'
                        ? post.properties.tags.rich_text[0]?.plain_text.split(',').map((tag) => tag.trim()) ?? []
                        : []

                const category =
                    post.properties.category && 'select' in post.properties.category
                        ? post.properties.category.select?.name ?? 'ERROR'
                        : 'ERROR'

                const formattedDate = new Date(updatedAt).toLocaleDateString('ko-KR', {
                    dateStyle: 'medium',
                })

                const thumbnail =
                    post.cover?.type === 'external' ? post.cover.external.url : post.cover?.file.url ?? undefined

                const postMeta: BLOG_POST_META = {
                    BLOG_PAGE_ID: postId,
                    BLOG_TITLE: title,
                    BLOG_DESCRIPTION: description,
                    BLOG_AUTHOR: author,
                    BLOG_CATEGORY: category,
                    BLOG_TAGS: tags,
                    BLOG_THUMBNAIL: thumbnail,
                    BLOG_UPDATED_AT: formattedDate,
                }

                acc.push(postMeta as Meta)
                return acc
            }
            return acc
        }, [])

        return {
            success: true,
            response: allPostMeta,
        }
    }

    public async getPostBlocks(postId: string) {
        const pageBlocks = await this.$block.retrieveBlock(postId)

        return pageBlocks.results
    }
}
