import { Metadata } from 'next'
import { FAQ } from '~/components/about/FAQ'

export const metadata: Metadata = {
  title: 'FAQ',
}

export default function FaqPage() {
  return <FAQ />
}
