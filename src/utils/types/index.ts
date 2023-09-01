/* eslint-disable @typescript-eslint/no-explicit-any */
export type Arguments<Func extends (...args: any[]) => any> = Func extends (...args: infer Args) => any ? Args : never
