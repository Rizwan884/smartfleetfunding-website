import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Why Smart Fleet | Smart Fleet',
  description:
    'Enjoy premium factoring services in North America with same-day payments, no penalties, and full transparency. Get your money in less than 12 hours. Call today!'
}

export default function FullFactLayout({
  children
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
