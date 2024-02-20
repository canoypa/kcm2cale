import { Box, Button, Dialog, Divider } from '@mui/material'
import Link from 'next/link'
import { FC } from 'react'
import { APP_NAME } from '../../../../core/env'
import { UserIcon } from '../../user-icon'

const MainMenuHeader: FC = () => {
  return (
    <div>
      <Box display="flex" alignItems="center" columnGap={2}>
        <UserIcon />
        <span>サインインしていません</span>
      </Box>
    </div>
  )
}

type Props = {
  open: boolean
  onClose: () => void
}
export const MainMenuDialog: FC<Props> = ({ open, onClose }) => {
  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="xs">
      <Box padding={2}>
        <MainMenuHeader />
      </Box>
      <Divider variant="middle" />
      <Box paddingY={1} paddingX={2}>
        <Button LinkComponent={Link} href="/about" size="small">
          <Box component="span" color="text.secondary">
            {APP_NAME} について
          </Box>
        </Button>
        <Button LinkComponent={Link} href="/privacy-and-terms" size="small">
          <Box component="span" color="text.secondary">
            プライバシーと規約
          </Box>
        </Button>
      </Box>
    </Dialog>
  )
}
