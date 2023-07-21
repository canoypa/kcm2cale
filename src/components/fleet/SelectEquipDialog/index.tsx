import { Dialog } from '@mui/material'
import dynamic from 'next/dynamic'
import { FC } from 'react'

const SelectEquip = dynamic(() => import('./SelectEquip'))

type Props = {
  open: boolean
  onSelect: (shipNoToSet: number) => void
  onClose: () => void
}
export const SelectEquipDialog: FC<Props> = ({ open, onSelect, onClose }) => {
  return (
    <Dialog fullScreen open={open} onClose={onClose}>
      <SelectEquip onSelect={onSelect} onClose={onClose} />
    </Dialog>
  )
}
