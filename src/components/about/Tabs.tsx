import { Link as MuiLink, Tab, Tabs, useTheme } from '@mui/material'
import { useRouter } from 'next/router'
import { FC, SyntheticEvent, useCallback } from 'react'

// TODO: ctrl+click とかに対応する
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
      <Tab
        LinkComponent={MuiLink}
        href="/about"
        value="/about"
        label="About"
        onClick={(e) => e.preventDefault()}
      />
      <Tab
        component={MuiLink}
        href="/faq"
        value="/faq"
        label="FAQ"
        onClick={(e) => e.preventDefault()}
      />
      <Tab
        component={MuiLink}
        href="/privacy-and-terms"
        value="/privacy-and-terms"
        label="Privacy And Terms"
        onClick={(e) => e.preventDefault()}
      />
    </Tabs>
  )
}
