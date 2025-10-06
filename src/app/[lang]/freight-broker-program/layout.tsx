import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Freight Broker Program in North America | Boost Profits',
  description:
    "Join Smart Fleet Funding's Freight Broker Program in North America. Get fast payouts, access to capital, and streamline your AR/AP cycle for improved profits."
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
