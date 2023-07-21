import { createTheme as createMuiTheme, PaletteMode } from '@mui/material'
import { DarkPalette, LightPalette } from './palette'

export const createTheme = (mode: PaletteMode) =>
  createMuiTheme({
    palette: mode === 'dark' ? DarkPalette : LightPalette,

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
