import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Open Contract | Smart Fleet',
  description: "Learn about Smart Fleet Funding's open contract policy."
}

export default function OpenContractLayout({
  children
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
