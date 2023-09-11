import { Box, Grid } from '@mui/material'
import { NextPage } from 'next'
import Head from 'next/head'
import { ExportFleetDialog } from '~/components/export/fleet_export_dialog'
import { MainAppBar } from '../components/common/main-app-bar'
import { CreateNewFleet } from '../components/home/create-new-fleet'
import { FleetListArea } from '../components/home/fleet-list-area'
import { APP_NAME } from '../core/env'

const HomePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>{APP_NAME}</title>
        <meta
          name="description"
          content="艦隊これくしょん向けの編成管理アプリ"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://kcm2cale.web.app" />
        <meta property="og:title" content="Kcm2Cale" />
        <meta
          property="og:description"
          content="艦隊これくしょん向けの編成管理アプリ"
        />
        <meta name="twitter:card" content="summary" />
      </Head>

      <main>
        <Grid container direction="column" wrap="nowrap" height="100vh">
          <MainAppBar />
          <Box flexGrow={1}>
            <FleetListArea />
          </Box>
          <CreateNewFleet />

          <ExportFleetDialog />
        </Grid>
      </main>
    </>
  )
}
export default HomePage
