import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'FAQs | Smart Fleet Funding | Factoring & Payment Solutions',
  description:
    'Find FAQs about factoring services, payment solutions, and more at Smart Fleet Funding. Learn how we can help your business grow in North America.'
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
