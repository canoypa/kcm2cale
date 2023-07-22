import { Button, Typography } from '@mui/material'
import { Metadata } from 'next'
import Link from 'next/link'
import { Error, ErrorActions, ErrorContent } from '~/components/Error'

export const metadata: Metadata = {
  title: '404 Not Found',
}

export default function NotFoundPage() {
  return (
    <Error>
      <ErrorContent>
        <Typography>
          リクエストされたページはこのサイトに存在しません。
        </Typography>
      </ErrorContent>
      <ErrorActions>
        <Button LinkComponent={Link} href="/" variant="outlined">
          トップページに戻る
        </Button>
      </ErrorActions>
    </Error>
  )
}
