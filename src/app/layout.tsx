import { Metadata } from 'next'
import { PropsWithChildren } from 'react'
import { RecoilRoot } from 'recoil'
import { APP_NAME } from '~/core/env'
import ThemeRegistry from './theme_registry'

export const metadata: Metadata = {
  title: {
    template: `%s - ${APP_NAME}`,
    default: APP_NAME!,
  },

  colorScheme: 'light dark',
}

type Props = PropsWithChildren
export default function RootLayout({ children }: Props) {
  return (
    <html lang="ja">
      <body>
        <RecoilRoot>
          <ThemeRegistry>{children}</ThemeRegistry>
        </RecoilRoot>
      </body>
    </html>
  )
}
