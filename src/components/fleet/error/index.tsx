import { Button, Typography } from '@mui/material'
import Head from 'next/head'
import Link from 'next/link'
import { FC } from 'react'
import { Error, ErrorActions, ErrorContent } from '~/components/Error'
import { APP_NAME } from '../../../core/env'

export const FleetError: FC = () => {
  return (
    <>
      <Head>
        <title>{APP_NAME}</title>
      </Head>

      <Error>
        <ErrorContent>
          <Typography>リクエストされた編成は存在しません。</Typography>
        </ErrorContent>
        <ErrorActions>
          <Button LinkComponent={Link} href="/" variant="outlined">
            トップページに戻る
          </Button>
        </ErrorActions>
      </Error>
    </>
  )
}
