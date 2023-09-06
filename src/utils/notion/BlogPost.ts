/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { type NotionAPI as NotionXClient } from 'notion-client'
import type { BLOG_POST_META } from '~/src/interfaces'
import { type NotionBlockManager } from './BlockManager'
import { type NotionDbManager } from './DbManager'
import type { NotionBlockError, NotionDbError } from './NotionError'
import { type NotionPageManager } from './PageManager'

type BlogPostApiResponse<Response> =
    | {
          success: true
          response: Response
      }
    | {
          success: false
          response: null
          error: NotionDbError | NotionBlockError | string
      }

interface NotionBlogPostConstructor {
    notionDbManager: NotionDbManager
    notionBlockManager: NotionBlockManager
    notionPageManager: NotionPageManager
    notionXClient: NotionXClient
}

export class NotionBlogPost {
    private $db: NotionDbManager
    private $page: NotionPageManager
    private $block: NotionBlockManager
    private $notionX: NotionXClient

    public label?: string

    public constructor({
        notionDbManager,
        notionBlockManager,
        notionPageManager,
        notionXClient,
    }: NotionBlogPostConstructor) {
        this.$db = notionDbManager
        this.$page = notionPageManager
        this.$block = notionBlockManager
        this.$notionX = notionXClient
    }

    private isValidMetaData(key: string): boolean {
        const validMetaKeys = ['tags', 'published', 'description', 'thumbnail', 'author', 'category', 'title']
        return validMetaKeys.includes(key)
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

    private getSortedPostMetaByDate(postList: Array<BLOG_POST_META>): Array<BLOG_POST_META> {
        postList.sort((a, b) => {
            const aDate = new Date(a.BLOG_UPDATED_AT).getTime()
            const bDate = new Date(b.BLOG_UPDATED_AT).getTime()

            return bDate - aDate
        })

        return postList
    }

    private getValidatedMeta(
        rawNotionPostData: Awaited<ReturnType<(typeof this.$db)['queryDatabase']>>[number]
    ): BLOG_POST_META | null {
        const isAllMetaIncluded =
            'properties' in rawNotionPostData &&
            Object.keys(rawNotionPostData.properties).every((key) => this.isValidMetaData(key))
        const isValidPost = rawNotionPostData.object === 'page' && isAllMetaIncluded

        if (isValidPost) {
            const { id: postId, last_edited_time: updatedAt } = rawNotionPostData
            const author =
                rawNotionPostData.properties.author && rawNotionPostData.properties.author.type === 'rich_text'
                    ? rawNotionPostData.properties.author.rich_text[0]?.plain_text ?? 'ERROR'
                    : 'ERROR'

            const title =
                rawNotionPostData.properties.title && rawNotionPostData.properties.title.type === 'title'
                    ? rawNotionPostData.properties.title.title[0]?.plain_text ?? 'ERROR'
                    : 'ERROR'

            const description =
                rawNotionPostData.properties.description &&
                rawNotionPostData.properties.description.type === 'rich_text'
                    ? rawNotionPostData.properties.description.rich_text[0]?.plain_text
                    : 'ERROR'

            const tags =
                rawNotionPostData.properties.tags && rawNotionPostData.properties.tags.type === 'rich_text'
                    ? rawNotionPostData.properties.tags.rich_text[0]?.plain_text.split(',').map((tag) => tag.trim()) ??
                      []
                    : []

            const category =
                rawNotionPostData.properties.category && 'select' in rawNotionPostData.properties.category
                    ? rawNotionPostData.properties.category.select?.name ?? 'ERROR'
                    : 'ERROR'

            const formattedDate = new Date(updatedAt).toLocaleDateString('ko-KR', {
                dateStyle: 'medium',
            })

            const thumbnail =
                rawNotionPostData.cover?.type === 'external'
                    ? rawNotionPostData.cover.external.url
                    : rawNotionPostData.cover?.file.url ?? undefined

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

            if (Object.values(postMeta).includes('ERROR')) return null

            return postMeta
        } else {
            return null
        }
    }

    public async getSinglePostMeta(postId: string): Promise<BlogPostApiResponse<BLOG_POST_META>> {
        try {
            const fetchedPageData = await this.$page.retrievePage(postId)
            const postMeta = this.getValidatedMeta(fetchedPageData)

            if (postMeta === null) {
                return {
                    success: false,
                    response: null,
                    error: `Can't fetch blog post meta data from ${postId}`,
                }
            }

            return {
                success: true,
                response: postMeta,
            }
        } catch (e) {
            return {
                success: false,
                response: null,
                error: `Can't fetch blog post meta data from ${postId}`,
            }
        }
    }

    public async getAllPostMeta(dbId: string): Promise<BlogPostApiResponse<Array<BLOG_POST_META>>> {
        const newPost = await this.getPublishedPost(dbId)

        const isFetchFailed = !newPost
        if (isFetchFailed)
            return {
                success: false,
                response: null,
                error: "Can't fetch blog post meta data",
            }

        const allPostMeta = newPost.reduce<Array<BLOG_POST_META>>((acc, post) => {
            const postMeta = this.getValidatedMeta(post)
            if (postMeta === null) return acc

            acc.push(postMeta)
            return acc
        }, [])

        const allPostMetaWithNavigation = allPostMeta.map((post, index, tot) => {
            const withNavigation: BLOG_POST_META = {
                ...post,
                BLOG_PREV_LINK: {
                    LINK_ID: tot[index + 1]?.BLOG_PAGE_ID ?? '',
                    LINK_TEXT: tot[index + 1]?.BLOG_TITLE ?? '',
                },
                BLOG_NEXT_LINK: {
                    LINK_ID: tot[index - 1]?.BLOG_PAGE_ID ?? '',
                    LINK_TEXT: tot[index - 1]?.BLOG_TITLE ?? '',
                },
            }
            return withNavigation
        })

        const sortedPost = this.getSortedPostMetaByDate(allPostMetaWithNavigation)

        return {
            success: true,
            response: sortedPost,
        }
    }

    public async getPostBlocks(postId: string) {
        const pageBlocks = await this.$block.retrieveBlock(postId)
        return pageBlocks.results
    }

    public async getPostRecordMap(
        postId: string
    ): Promise<BlogPostApiResponse<Awaited<ReturnType<typeof this.$notionX.getPage>>>> {
        try {
            const postRecordMap = await this.$notionX.getPage(postId)
            return {
                success: true,
                response: postRecordMap,
            }
        } catch (e) {
            return {
                success: false,
                response: null,
                error: `Can't fetch blog post record map from ${postId}\n${JSON.stringify(e)}}`,
            }
        }
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
}
