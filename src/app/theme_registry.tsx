/*! https://mui.com/material-ui/guides/next-js-app-router/#using-material-ui-with-a-custom-theme */

'use client'

import createEmotionCache from '@emotion/cache'
import { CacheProvider } from '@emotion/react'
import { useMediaQuery } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import { useServerInsertedHTML } from 'next/navigation'
import { PropsWithChildren, useMemo, useState } from 'react'
import { createTheme } from '~/core/theme'

type Props = PropsWithChildren
export default function ThemeRegistry({ children }: Props) {
  const isDark = useMediaQuery('(prefers-color-scheme:dark)')
  const resolvedMode = useMemo(() => (isDark ? 'dark' : 'light'), [isDark])
  const theme = useMemo(() => createTheme(resolvedMode), [resolvedMode])

  const [{ cache, flush }] = useState(() => {
    const cache = createEmotionCache({
      key: 'css',
    })
    cache.compat = true

    let inserted: string[] = []

    const prevInsert = cache.insert
    cache.insert = (...args) => {
      const serialized = args[1]
      if (cache.inserted[serialized.name] === undefined) {
        inserted.push(serialized.name)
      }
      return prevInsert(...args)
    }

    const flush = () => {
      const prevInserted = inserted
      inserted = []
      return prevInserted
    }
    return { cache, flush }
  })

  useServerInsertedHTML(() => {
    const names = flush()
    if (names.length === 0) {
      return null
    }

    let styles = ''
    for (const name of names) {
      styles += cache.inserted[name]
    }

    return (
      <style
        key={cache.key}
        data-emotion={`${cache.key} ${names.join(' ')}`}
        dangerouslySetInnerHTML={{
          __html: `@layer emotion {${styles}}`,
        }}
      />
    )
  })

  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </CacheProvider>
  )
}
