import { useCallback } from 'react'
import { useRecoilCallback } from 'recoil'
import { LocalFleetDataV1 } from '~/core/persistence/types'
import { generateFleetId } from '~/core/util/generate-id'
import { FleetState } from '~/store/organize/info'
import { FleetType } from '../../models/fleet'

const createNewFleetData = (id: string): LocalFleetDataV1 => ({
  version: 1,

  id: id,

  type: FleetType.Normal,
  title: '',
  description: '',

  createdAt: new Date(),
  updatedAt: new Date(),

  ships: [],
})

export const useCreateNewFleet = () => {
  const updateFleet = useRecoilCallback(
    ({ set }) =>
      (fleet: LocalFleetDataV1) => {
        set(FleetState, fleet)
      },
  )

  return useCallback(async () => {
    const fleetId = generateFleetId()

    const newFleetData = createNewFleetData(fleetId)
    updateFleet(newFleetData)

    return fleetId
  }, [updateFleet])
}
