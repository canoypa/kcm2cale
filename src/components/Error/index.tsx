import { Box, Container, Typography } from '@mui/material'
import { FC, PropsWithChildren } from 'react'

export const Error: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Container maxWidth="md">
      <Box
        display="flex"
        flexDirection="column"
        height="100vh"
        alignItems="center"
        justifyContent="center"
      >
        <Box>
          <Typography variant="h3" p={2}>
            Oops! :(
          </Typography>

          {children}
        </Box>
      </Box>
    </Container>
  )
}

export const ErrorContent: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Box p={2} pt={0}>
      {children}
    </Box>
  )
}

export const ErrorActions: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      flexWrap="wrap"
      columnGap={1}
      rowGap={1}
      p={1}
    >
      {children}
    </Box>
  )
}
