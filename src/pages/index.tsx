import { Alert, AlertTitle, Box, Container, Grid } from '@mui/material'
import { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react'
import { useEffectOnce } from 'react-use'
import { TextLink } from '~/components/common/TextLink'
import { ExportFleetDialog } from '~/components/export/fleet_export_dialog'
import { ImportFleetDialog } from '~/components/import/fleet_import_dialog'
import { MainAppBar } from '../components/common/main-app-bar'
import { CreateNewFleet } from '../components/home/create-new-fleet'
import { FleetListArea } from '../components/home/fleet-list-area'
import { APP_NAME } from '../core/env'

const HomePage: NextPage = () => {
  const [isOldSite, setIsOldSite] = useState(false)
  useEffectOnce(() => {
    setIsOldSite(window.location.hostname !== 'kcm2cale.tepbyte.dev')
  })

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
            {isOldSite && (
              <Container maxWidth="md">
                <Alert severity="warning" variant="outlined">
                  <AlertTitle>
                    このアプリは{' '}
                    <TextLink ext href="https://kcm2cale.tepbyte.dev">
                      kcm2cale.tepbyte.dev
                    </TextLink>{' '}
                    に移転されます。
                  </AlertTitle>
                  今後は新しいサイトをご利用ください。このサイトで保存された編成は、右上のボタンからエクスポート/インポート出来ます。
                </Alert>
              </Container>
            )}

            <FleetListArea />
          </Box>
          <CreateNewFleet />

          <ExportFleetDialog />
          <ImportFleetDialog />
        </Grid>
      </main>
    </>
  )
}
export default HomePage
