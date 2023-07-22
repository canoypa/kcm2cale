'use client'

import { NavigateBefore } from '@mui/icons-material'
import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Tooltip,
  useScrollTrigger,
} from '@mui/material'
import { useRouter } from 'next/router'
import { FC, useCallback } from 'react'
import { TabList } from './Tabs'

export const Header: FC = () => {
  const router = useRouter()

  const elevateTrigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  })

  const onBack = useCallback(() => {
    router.push('/')
  }, [router])

  return (
    <AppBar
      position="sticky"
      color="inherit"
      elevation={elevateTrigger ? 4 : 0}
    >
      <Toolbar>
        <Tooltip title="戻る">
          <IconButton edge="start" onClick={onBack} aria-label="戻る">
            <NavigateBefore />
          </IconButton>
        </Tooltip>
      </Toolbar>
      <Toolbar sx={{ alignItems: 'flex-end' }}>
        <Box flexGrow={1} />
        <TabList />
        <Box flexGrow={1} />
      </Toolbar>
    </AppBar>
  )
}
