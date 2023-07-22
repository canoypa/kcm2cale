import { Metadata } from 'next'
import { PrivacyAndTerms } from '~/components/about/PrivacyAndTerms'

export const metadata: Metadata = {
  title: 'Privacy And Terms',
}

export default function PrivacyAndTermsPage() {
  return <PrivacyAndTerms />
}
