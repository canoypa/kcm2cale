import { Metadata } from 'next'
import { About } from '~/components/about/About'

export const metadata: Metadata = {
  title: 'About',
}

export default function AboutPage() {
  return <About />
}
