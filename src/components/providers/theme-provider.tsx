import { CssBaseline, Experimental_CssVarsProvider } from '@mui/material'
import { ReactNode, VFC } from 'react'
import { createTheme } from '../../core/theme'

type Props = {
  children: ReactNode
}
export const ThemeProvider: VFC<Props> = ({ children }) => {
  const theme = createTheme()

  return (
    <Experimental_CssVarsProvider theme={theme} defaultMode="system">
      <CssBaseline />
      {children}
    </Experimental_CssVarsProvider>
  )
}
