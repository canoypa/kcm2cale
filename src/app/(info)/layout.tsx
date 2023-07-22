import { Container } from '@mui/material'
import { PropsWithChildren } from 'react'
import { Header } from '~/components/about/Header'
import { MarkdownStyle } from '~/components/about/MarkdownStyle'

type Props = PropsWithChildren
export default function InfoLayout({ children }: Props) {
  return (
    <main>
      <Header />
      <Container maxWidth="md">
        <MarkdownStyle>{children}</MarkdownStyle>
      </Container>
    </main>
  )
}
