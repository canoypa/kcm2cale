import { PaletteMode } from '@mui/material'

export type ThemeModeSetting = PaletteMode | 'system'

export type AppSettingsScheme = {
  theme: ThemeModeSetting
}
