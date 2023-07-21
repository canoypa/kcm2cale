import { Link as MuiLink, Tab, Tabs, useTheme } from '@mui/material'
import { useRouter } from 'next/router'
import { FC, SyntheticEvent, useCallback } from 'react'

export const TabList: FC = () => {
  const router = useRouter()
  const theme = useTheme()

  const onChangeTab = useCallback(
    (_: SyntheticEvent, value: string) => {
      router.push(value)
    },
    [router],
  )

  return (
    <Tabs variant="scrollable" value={router.pathname} onChange={onChangeTab}>
      <MuiLink
        component={Tab}
        value="/about"
        label="About"
        color={theme.palette.text.secondary}
        underline="none"
      />
      <MuiLink
        component={Tab}
        value="/faq"
        label="FAQ"
        color={theme.palette.text.secondary}
        underline="none"
      />
      <MuiLink
        component={Tab}
        value="/privacy-and-terms"
        label="Privacy And Terms"
        color={theme.palette.text.secondary}
        underline="none"
      />
    </Tabs>
  )
}
