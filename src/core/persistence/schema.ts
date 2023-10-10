import type * as zod from 'zod'
import {
  NEVER,
  any,
  array,
  coerce,
  literal,
  number,
  object,
  string,
  union,
} from 'zod'

// util
const coerceJson = union([
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

export const FleetSchema = object({
  id: string().length(16),
  version: literal(1),
  type: union([
    literal('Normal'),
    literal('Carrier'),
    literal('Surface'),
    literal('Transport'),
    literal('StrikingForce'),
  ]),
  title: string(),
  description: string(),
  createdAt: coerce.date(),
  updatedAt: coerce.date(),

  ships: array(
    object({
      fleetNo: number(),
      turnNo: number(),
      no: string(),
      equipments: array(
        object({
          slotNo: number(),
          no: number(),
        }),
      ),
    }),
  ),
})
export type FleetSchema = zod.infer<typeof FleetSchema>

export const ExportedFleetSchema = coerceJson.pipe(
  FleetSchema.omit({ id: true }),
)

export const ExportedFleetListSchema = coerceJson.pipe(
  array(ExportedFleetSchema),
)
