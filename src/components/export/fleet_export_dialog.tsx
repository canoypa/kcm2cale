import { ContentCopyOutlined } from '@mui/icons-material'
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  OutlinedInput,
  Tooltip,
} from '@mui/material'
import { FC, useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import { LocalDatabase } from '~/core/persistence/local-database'
import { FleetExportDialogStateAtom } from './state'

export const ExportFleetDialog: FC = () => {
  const [exportFleetDialogState, setExportFleetDialogState] = useRecoilState(
    FleetExportDialogStateAtom,
  )

  const [exportData, setExportData] = useState('')

  const open = exportFleetDialogState !== null

  const onClose = () => {
    setExportFleetDialogState(null)
  }

  useEffect(() => {
    const get = async () => {
      if (exportFleetDialogState === null) {
        return
      }

      if (exportFleetDialogState.mode === 'all') {
        setExportData(
          JSON.stringify(
            (await LocalDatabase.getAllFleet()).map((v) => {
              const { id: _, ...other } = v
              return other
            }),
          ),
        )
      }
    }
    get()
  }, [exportFleetDialogState])

  return (
    <Dialog fullWidth maxWidth="sm" open={open} onClose={onClose}>
      <DialogTitle>エクスポート</DialogTitle>
      <DialogContent>
        <OutlinedInput
          fullWidth
          endAdornment={
            <Tooltip title="コピー">
              <IconButton
                onClick={() => navigator.clipboard.writeText(exportData)}
              >
                <ContentCopyOutlined />
              </IconButton>
            </Tooltip>
          }
          inputProps={{ readOnly: true }}
          value={exportData}
        />
      </DialogContent>
      <DialogActions>
        <Button variant="outlined" onClick={onClose}>
          とじる
        </Button>
      </DialogActions>
    </Dialog>
  )
}
