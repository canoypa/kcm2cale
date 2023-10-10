import { NEVER, any, string, union } from 'zod'

// util
export const coerceJson = union([
  // 文字列なら json としてパースする
  string().transform((str, ctx) => {
    try {
      return JSON.parse(str)
    } catch (e) {
      ctx.addIssue({ code: 'custom', message: 'Invalid JSON' })
      return NEVER
    }
  }),
  any(),
])
