import { array, coerce, literal, number, object, string, union } from 'zod'

export const FleetSchema = object({
  version: literal(1),
  id: string().length(16),
  type: union([
    literal('normal'),
    literal('carrier'),
    literal('surface'),
    literal('transport'),
    literal('striking'),
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
