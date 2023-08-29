export * from './fetcher'
import * as stringUtil from './string'
export const util = { ...stringUtil } as const
