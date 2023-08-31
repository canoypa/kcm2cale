import { ToggleButton, ToggleButtonGroup } from '@mui/material'
import { FC, MouseEvent } from 'react'
import { FleetNo } from '../../../../../models/ship'

type Props = {
  value: FleetNo
  onChange: (fleetNo: FleetNo) => void
}
export const ToggleFleet: FC<Props> = ({ value, onChange }) => {
  const handlerOnSelect = (_: MouseEvent, fleetNo: FleetNo) => {
    if (fleetNo !== null) {
      onChange(fleetNo)
    }
  }

  return (
    <ToggleButtonGroup
      value={value}
      exclusive
      fullWidth
      size="small"
      color="primary"
      onChange={handlerOnSelect}
    >
      <ToggleButton value={0}>第一艦隊</ToggleButton>
      <ToggleButton value={1}>第二艦隊</ToggleButton>
    </ToggleButtonGroup>
  )
}
