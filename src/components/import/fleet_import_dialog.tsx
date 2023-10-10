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
import { ExportedFleetListSchema } from '~/core/persistence/schema'
import { importFleet } from './import_fleet'
import { FleetImportDialogStateAtom } from './state'

export const ImportFleetDialog: FC = () => {
  const [importFleetDialogState, setImportFleetDialogState] = useRecoilState(
    FleetImportDialogStateAtom,
  )

  const [value, setValue] = useState('')
  const onInputChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }, [])

  const [hasError, setHasError] = useState(false)

  const open = importFleetDialogState

  const onClose = () => {
    setImportFleetDialogState(false)
  }

  const processImport = async () => {
    const parseResult = ExportedFleetListSchema.safeParse(value)

    if (parseResult.success) {
      await importFleet(parseResult.data)

      setHasError(false)
      onClose()
    } else {
      setHasError(true)
    }
  }

  return (
    <Dialog fullWidth maxWidth="sm" open={open} onClose={onClose}>
      <DialogTitle>インポート</DialogTitle>
      <DialogContent>
        <OutlinedInput
          fullWidth
          value={value}
          onChange={onInputChange}
          error={hasError}
        />
      </DialogContent>
      <DialogActions>
        <Button variant="text" onClick={onClose}>
          キャンセル
        </Button>
        <Button variant="outlined" onClick={processImport}>
          インポートする
        </Button>
      </DialogActions>
    </Dialog>
  )
}
