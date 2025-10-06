import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Fast, Easy & Secure Payment | FES Pay in North America',
  description:
    'Get faster, secure payments with FES Pay in North America. Receive your funds in just 12 hours with no hidden fees. Enjoy financial flexibility and support.'
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
