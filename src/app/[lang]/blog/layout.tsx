import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Smart Fleet Funding Blog – Insights for Brokers & Carriers',
  description:
    'Explore our blog for tips, and insights on factoring, payment solutions, and business growth at Smart Fleet Funding. Stay informed on industry trends.'
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
