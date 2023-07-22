import { Box, Fab } from '@mui/material'
import { Add } from '@mui/icons-material'
import Link from 'next/link'
import { FC } from 'react'

export const CreateNewFleet: FC = () => {
  return (
    <Box
      position="sticky"
      bottom={0}
      display="flex"
      justifyContent={{ xs: 'center', lg: 'flex-end' }}
      padding={{ xs: 2, sm: 3 }}
    >
      <Link href="/new" passHref>
        <Fab variant="extended" color="primary">
          <Add sx={{ mr: 1 }} />
          編成を作成
        </Fab>
      </Link>
    </Box>
  )
}
