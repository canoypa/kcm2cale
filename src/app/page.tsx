import { Box, Grid } from '@mui/material'
import { Metadata } from 'next'
import { MainAppBar } from '../components/common/main-app-bar'
import { CreateNewFleet } from '../components/home/create-new-fleet'
import { FleetListArea } from '../components/home/fleet-list-area'
import { APP_NAME } from '../core/env'

export const metadata: Metadata = {
  description: '艦隊これくしょん向けの編成管理アプリ',

  openGraph: {
    type: 'website',
    url: 'https://kcm2cale.web.app',
    title: APP_NAME!,
    description: '艦隊これくしょん向けの編成管理アプリ',
  },

  twitter: {
    card: 'summary',
  },
}

export default function Page() {
  return (
    <main>
      <Grid container direction="column" wrap="nowrap" height="100vh">
        <MainAppBar />
        <Box flexGrow={1}>
          <FleetListArea />
        </Box>
        <CreateNewFleet />
      </Grid>
    </main>
  )
}
