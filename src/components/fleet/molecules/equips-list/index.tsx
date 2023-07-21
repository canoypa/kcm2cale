import { Chip } from '@mui/material'
import { FC } from 'react'
import { FleetPlace } from '~/models/ship'
import { EquipsData } from '../../../../data/equip'
import { Equip, RiggingPlace } from '../../../../models/equip'
import { CharClamp } from '../../../common/clamp'

type Props = {
  fleetPlace: FleetPlace
  shipEquips: Equip[]
  swapEquip: (equip: FleetPlace & RiggingPlace) => void
}
export const EquipList: FC<Props> = ({ fleetPlace, shipEquips, swapEquip }) => {
  const handlerEquipClick = (preEq: FleetPlace & RiggingPlace) => {
    swapEquip(preEq)
  }

  const items = shipEquips.map((eq) => {
    const equip = EquipsData.find((v) => v.no === eq.no)
    if (!equip) throw new Error('Error: 装備が見つからない')

    return {
      value: eq,
      label: <CharClamp count={20}>{equip.name}</CharClamp>,
    }
  })

  return (
    <>
      {items.map((v) => {
        const _handlerEquipClick = () =>
          handlerEquipClick({ ...fleetPlace, slotNo: v.value.slotNo })
        return (
          <Chip
            key={v.value.slotNo}
            variant="outlined"
            label={v.label}
            onClick={_handlerEquipClick}
          />
        )
      })}
    </>
  )
}
