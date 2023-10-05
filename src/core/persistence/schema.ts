import { array, coerce, literal, number, object, string, union } from 'zod'

export const FleetSchema = object({
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
