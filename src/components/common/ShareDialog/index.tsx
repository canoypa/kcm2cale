import { FileCopyOutlined } from '@mui/icons-material'
import {
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  InputAdornment,
  OutlinedInput,
  Tooltip,
} from '@mui/material'
import { FC, useCallback } from 'react'

type Props = {
  open: boolean
  onClose: () => void
  title: string
  url: string
}
export const ShareDialog: FC<Props> = ({ open, onClose, title, url }) => {
  const copyUrl = useCallback(() => {
    window.navigator.clipboard.writeText(url)
  }, [url])

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="xs">
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <Box mt={1}>
          <OutlinedInput
            value={url}
            readOnly
            fullWidth
            endAdornment={
              <InputAdornment position="end">
                <Tooltip title="URL をコピー">
                  <IconButton onClick={copyUrl} aria-label="URL をコピー">
                    <FileCopyOutlined />
                  </IconButton>
                </Tooltip>
              </InputAdornment>
            }
          />
        </Box>
      </DialogContent>
    </Dialog>
  )
}
