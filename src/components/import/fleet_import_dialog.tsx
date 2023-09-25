import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  OutlinedInput,
} from '@mui/material'
import { ChangeEvent, FC, useCallback, useState } from 'react'
import { useRecoilState } from 'recoil'
import { FleetImportDialogStateAtom } from './state'

export const ImportFleetDialog: FC = () => {
  const [importFleetDialogState, setImportFleetDialogState] = useRecoilState(
    FleetImportDialogStateAtom,
  )

  const [value, setValue] = useState('')
  const onInputChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }, [])

  const open = importFleetDialogState

  const onClose = () => {
    setImportFleetDialogState(false)
  }

  return (
    <Dialog fullWidth maxWidth="sm" open={open} onClose={onClose}>
      <DialogTitle>インポート</DialogTitle>
      <DialogContent>
        <OutlinedInput fullWidth value={value} onChange={onInputChange} />
      </DialogContent>
      <DialogActions>
        <Button variant="text" onClick={onClose}>
          キャンセル
        </Button>
        <Button variant="outlined" onClick={onClose}>
          インポートする
        </Button>
      </DialogActions>
    </Dialog>
  )
}
