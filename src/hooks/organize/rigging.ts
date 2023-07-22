import { useRecoilValue } from 'recoil'
import { FleetState } from '~/store/organize/info'
import { Equip, RiggingPlace } from '../../models/equip'
import { FleetPlace, Ship } from '../../models/ship'

const DUMMY_SLOT_SIZE = 4

type Rigging = {
  shipEquips: Equip[]
  isCanAddNewEquip: boolean
  newEquipPlace: FleetPlace & RiggingPlace
}
export const useRigging = (fleetPlace: Ship): Rigging => {
  const shipSlotSize = DUMMY_SLOT_SIZE
  if (!shipSlotSize) throw new Error('Error: ship status が取得できない')

  const fleet = useRecoilValue(FleetState)

  const ship = fleet?.ships.find(
    (v) => v.fleetNo === fleetPlace.fleetNo && v.turnNo === fleetPlace.turnNo,
  )
  if (!ship) throw new Error('対象の艦船が存在しない')

  const shipEquips = ship.equipments.sort((a, b) => a.slotNo - b.slotNo)

  const equippedLength = shipEquips.length

  const isCanAddNewEquip = shipSlotSize > equippedLength
  const newEqSlotNo = equippedLength

  const newEquipPlace: FleetPlace & RiggingPlace = {
    ...fleetPlace,
    slotNo: newEqSlotNo,
  }

  return {
    shipEquips: shipEquips,
    isCanAddNewEquip: isCanAddNewEquip,
    newEquipPlace: newEquipPlace,
  }
}
