import { useCallback } from 'react'
import { useRecoilState } from 'recoil'
import { FleetState } from '~/store/organize/info'
import { FleetShip, Ship } from '../../../../models/ship'

type UseSetShip = () => (place: FleetShip, ship: string) => void
export const useSetShip: UseSetShip = () => {
  const [fleet, setFleet] = useRecoilState(FleetState)
  if (!fleet) throw new Error('編成が存在しない')

  const setShip = useCallback(
    (place: FleetShip, shipNoToSet: string) => {
      const { fleetNo, turnNo } = place

      const newShips = [...fleet.ships]

      const updateIndex = fleet.ships.findIndex(
        (v) => v.fleetNo === fleetNo && v.turnNo === turnNo,
      )

      if (updateIndex !== -1) {
        newShips[updateIndex].no = shipNoToSet
      } else {
        const ship: Ship = {
          fleetNo,
          turnNo,
          no: shipNoToSet,
          equipments: [],
        }
        newShips.push(ship)
      }

      setFleet({ ...fleet, ships: newShips })
    },
    [fleet, setFleet],
  )

  return setShip
}
