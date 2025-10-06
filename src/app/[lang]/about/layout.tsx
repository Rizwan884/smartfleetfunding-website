import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Smart Fleet Funding | Factoring & Payment Solutions',
  description:
    'About Smart Fleet Funding, with over 30 years of experience in North America. We offer innovative, transparent financing solutions for businesses to thrive.'
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
