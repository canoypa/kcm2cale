import { useCallback } from 'react'
import { useRecoilState } from 'recoil'
import { FleetPlace } from '~/models/ship'
import { FleetState } from '~/store/organize/info'
import { Equip, RiggingPlace } from '../../../../models/equip/types'

type UseSetEquip = () => (
  place: FleetPlace & RiggingPlace,
  equipNoToSet: number,
) => void
export const useSetEquip: UseSetEquip = () => {
  const [fleet, setFleet] = useRecoilState(FleetState)
  if (!fleet) throw new Error('編成が存在しない')

  const setEquip = useCallback(
    (place: FleetPlace & RiggingPlace, equipNoToSet: number) => {
      const { fleetNo, turnNo, slotNo } = place

      const updateShipIndex = fleet.ships.findIndex(
        (v) => v.fleetNo === fleetNo && v.turnNo === turnNo,
      )
      const updateEquipIndex = fleet.ships[
        updateShipIndex
      ].equipments.findIndex((v) => v.slotNo === slotNo)

      const newShips = [...fleet.ships]
      const newEquips = [...fleet.ships[updateShipIndex].equipments]

      if (updateEquipIndex !== -1) {
        newEquips[updateEquipIndex].no = equipNoToSet
      } else {
        const equip: Equip = {
          slotNo,
          no: equipNoToSet,
        }
        newEquips.push(equip)
      }
      newShips[updateShipIndex].equipments = newEquips

      setFleet({ ...fleet, ships: newShips })
    },
    [fleet, setFleet],
  )

  return setEquip
}
