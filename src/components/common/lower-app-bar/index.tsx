import { NavigateBefore } from '@mui/icons-material'
import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  useScrollTrigger,
} from '@mui/material'
import { FC } from 'react'

type Props = {
  title?: string
  onNavClick: () => void
}
export const LowerAppBar: FC<Props> = ({ title, onNavClick }) => {
  const elevateTrigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  })

  return (
    <>
      <AppBar color="inherit" elevation={elevateTrigger ? 4 : 0}>
        <Toolbar>
          <IconButton edge="start" onClick={onNavClick} aria-label="戻る">
            <NavigateBefore />
          </IconButton>
          {title && <Typography variant="h6">{title}</Typography>}
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  )
}
