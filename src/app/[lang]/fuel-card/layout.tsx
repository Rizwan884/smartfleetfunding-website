import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Over The Road Fuel Card in North America | Fuel Savings',
  description:
    "Save on fuel and maintenance with Smart Fleet Funding's Over The Road Fuel Card in North America. Get discounts at 14,000+ locations and low transaction fees."
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
