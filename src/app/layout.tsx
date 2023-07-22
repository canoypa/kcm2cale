import { Metadata } from 'next'
import { PropsWithChildren } from 'react'
import { APP_NAME } from '~/core/env'

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
      <body>{children}</body>
    </html>
  )
}
