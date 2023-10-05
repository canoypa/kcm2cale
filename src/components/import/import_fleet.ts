import type * as zod from 'zod'
import { LocalDatabase } from '~/core/persistence/local-database'
import { ExportedFleetListSchema } from '~/core/persistence/schema'
import { generateFleetId } from '~/core/util/generate-id'

export const importFleet = async (
  fleetList: zod.infer<typeof ExportedFleetListSchema>,
) => {
  await Promise.all(
    fleetList.map((v) => {
      const id = generateFleetId()
      const fleet = { ...v, id }

      return LocalDatabase.setFleet(id, fleet)
    }),
  )
}
