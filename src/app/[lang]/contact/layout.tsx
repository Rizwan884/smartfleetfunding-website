import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Smart Fleet Funding',
  description:
    'Contact Smart Fleet Funding for personalized factoring solutions in North America. Our team is ready to assist you with any questions or needs. Contact us today'
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
