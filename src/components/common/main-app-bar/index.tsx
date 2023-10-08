import { FileDownloadOutlined, FileUploadOutlined } from '@mui/icons-material'
import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Tooltip,
  useScrollTrigger,
} from '@mui/material'
import { FC, useState } from 'react'
import { useExportFleet } from '~/components/export/hooks'
import { useImportFleet } from '~/components/import/hooks'
import { UserIconButton } from '../user-icon'
import { MainMenuDialog } from './account-dialog'

export const MainAppBar: FC = () => {
  const elevateTrigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  })

  const [isMainMenuOpen, setMainMenuOpen] = useState(false)
  const openMainMenu = () => setMainMenuOpen(true)
  const closeMainMenu = () => setMainMenuOpen(false)

  const requestExportFleet = useExportFleet()
  const requestImportFleet = useImportFleet()

  return (
    <>
      <AppBar
        position="sticky"
        color="inherit"
        elevation={elevateTrigger ? 4 : 0}
      >
        <Toolbar>
          <Box flexGrow={1} />

          <Box display="flex" columnGap={1}>
            <Button
              startIcon={<FileUploadOutlined />}
              onClick={() => requestImportFleet()}
            >
              編成をインポート
            </Button>

            <Button
              startIcon={<FileDownloadOutlined />}
              onClick={() => requestExportFleet({ mode: 'all' })}
            >
              編成をエクスポート
            </Button>

          <UserIconButton
            edge="end"
            onClick={openMainMenu}
            aria-label="アカウントメニュー"
          />
          </Box>
        </Toolbar>
      </AppBar>

      <MainMenuDialog open={isMainMenuOpen} onClose={closeMainMenu} />
    </>
  )
}
