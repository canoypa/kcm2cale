import { experimental_extendTheme as extendTheme } from '@mui/material'
import type {} from '@mui/material/themeCssVarsAugmentation'
import { DarkPalette, LightPalette } from './palette'

export const createTheme = () =>
  extendTheme({
    colorSchemes: {
      light: { palette: LightPalette },
      dark: { palette: DarkPalette },
    },

    typography: {
      button: {
        textTransform: 'none',
      },
    },

    components: {
      MuiCssBaseline: {
        styleOverrides: {
          html: {
            WebkitTapHighlightColor: 'transparent',
          },
        },
      },
    },
  })
