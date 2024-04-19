import { I18nProvider } from '@/context/I18nProvider'
import type { Metadata } from 'next'
import { ReCaptchaProvider } from 'next-recaptcha-v3'
import { Inter } from 'next/font/google'
import '../styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Smart Fleet Funding: Freight Factoring to carriers in North America',
  icons: '/images/sff-icon.svg',
  description:
    'Smart Fleet Funding helps carriers with cash flow to improve small, medium and large Logistics and Transportation companies.',
  keywords: [
    'Smart Fleet Funding',
    'freight factoring',
    'North America',
    'Freight cash flow',
    'Factoring',
    'Owner-operators',
    'Fleets',
    'Trucks',
    'list of freight factoring companies',
    'what is the truck factoring rates',
    'best freight factoring companies for small trucking businesses',
    'compare freight factoring rates for flatbed trailers',
    'top 5 invoice factoring companies for freight brokers',
    'find a factoring company that finances fuel tax advances',
    'same day funding for freight invoices with factoring'
  ],
  openGraph: {
    title:
      'Smart Fleet Funding: Freight Factoring to carriers in North America',
    description:
      'Smart Fleet Funding helps carriers with cash flow to improve small, medium and large Logistics and Transportation companies.',
    url: 'https://www.smartfleetfunding.com',
    siteName: 'Smart Fleet Funding',
    images: [
      {
        url: '/images/sff-opengraph.png',
        width: 800,
        height: 600
      }
    ],
    locale: 'en_US',
    type: 'website'
  }
}

export default function RootLayout({
  children,
  params: { lang }
}: {
  children: React.ReactNode
  params: { lang: string }
}) {
  return (
    <ReCaptchaProvider
      reCaptchaKey="6LduTr0pAAAAAGe99haSZO2u-x-zHCBic61DyjX2"
      language="en"
    >
      <I18nProvider lang={lang}>
        <html lang={lang}>
          <body className={inter.className}>{children}</body>
        </html>
      </I18nProvider>
    </ReCaptchaProvider>
  )
}
