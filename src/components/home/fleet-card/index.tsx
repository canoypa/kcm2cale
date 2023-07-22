'use client'

import { MoreVert } from '@mui/icons-material'
import {
  Card,
  CardContent,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  Link as MuiLink,
  Typography,
} from '@mui/material'
import NextLink from 'next/link'
import { FC, MouseEvent, useRef, useState } from 'react'
import { LocalDatabase } from '~/core/persistence/local-database'
import { LocalFleetDataV1 } from '~/core/persistence/types'
import { LineClamp } from '../../common/clamp'

type Props = {
  fleetData: LocalFleetDataV1

  refresh: () => void
}
export const FleetCard: FC<Props> = ({ fleetData, refresh }) => {
  const [isMenuOpen, setMenuOpen] = useState(false)

  const menuAnchorEl = useRef<HTMLButtonElement>(null)

  const openMenu = (event: MouseEvent<HTMLButtonElement>) => {
    // openFleet の作動を抑制
    event.stopPropagation()
    event.preventDefault()

    setMenuOpen(true)
  }
  const closeMenu = () => {
    setMenuOpen(false)
  }

  const handlerDeleteFleet = async () => {
    closeMenu()
    await LocalDatabase.deleteFleet(fleetData.id)
    refresh()
  }

  return (
    <>
      <NextLink href={`/fleet/${fleetData.id}`} passHref>
        <MuiLink underline="none">
          <Card variant="outlined">
            <CardContent>
              <Grid container>
                <Grid item xs>
                  <Typography variant="overline" color="textSecondary">
                    {fleetData.updatedAt.toLocaleDateString()}
                  </Typography>

                  <Typography variant="h6">
                    <LineClamp count={1}>
                      {fleetData.title || '無題の編成'}
                    </LineClamp>
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    <LineClamp count={2}>{fleetData.description}</LineClamp>
                  </Typography>
                </Grid>
                <Grid item>
                  <IconButton
                    onClick={openMenu}
                    ref={menuAnchorEl}
                    aria-label="アクションメニュー"
                  >
                    <MoreVert />
                  </IconButton>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </MuiLink>
      </NextLink>

      <Menu
        open={isMenuOpen}
        onClose={closeMenu}
        anchorEl={menuAnchorEl.current}
      >
        <MenuItem onClick={handlerDeleteFleet}>削除</MenuItem>
      </Menu>
    </>
  )
}
