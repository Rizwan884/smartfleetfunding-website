import { I18nProvider } from '@/context/I18nProvider'
import type { Metadata } from 'next'
import { ReCaptchaProvider } from 'next-recaptcha-v3'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import '../styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title:
    'Smart Fleet Funding Corp.: Freight Factoring to carriers in North America',
  icons: '/images/sff-icon.svg',
  description:
    'Smart Fleet Funding Corp. helps carriers with cash flow to improve small, medium and large Logistics and Transportation companies.',
  keywords: [
    'Smart Fleet Funding Corp.',
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
      'Smart Fleet Funding Corp.: Freight Factoring to carriers in North America',
    description:
      'Smart Fleet Funding Corp. helps carriers with cash flow to improve small, medium and large Logistics and Transportation companies.',
    url: 'https://www.smartfleetfunding.com',
    siteName: 'Smart Fleet Funding Corp.',
    images: [
      {
        url: '/images/sff-opengraph.png',
        width: 800,
        height: 600
      }
    ],
    locale: 'en_US',
    type: 'website'
  },
  verification: {
    google: 'Z8V9RZTsx5JzvzxM5QE4Fwm-XMCSVGxdKUtTNMG4_0I'
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
          <Script
            type="text/javascript"
            id="hs-script-loader"
            async
            defer
            src="//js-na1.hs-scripts.com/49277082.js"
          />
          <Script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-0XVT3QM87R"
          />
          <Script
            id="gtag-js"
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-0XVT3QM87R');
          `
            }}
          />
          <Script id="schema" type="application/ld+json">
            {`{
                "@context": "https://schema.org",
                "@graph": [
                  {
                    "@type": "Organization",
                    "@id": "https://www.smartfleetfunding.com/#organization",
                    "name": "Smart Fleet Funding Corp.",
                    "url": "https://www.smartfleetfunding.com/",
                    "logo": "https://www.smartfleetfunding.com/logo.png",
                    "contactPoint": {
                      "@type": "ContactPoint",
                      "telephone": "+1-830-209-7589",
                      "contactType": "Customer Service",
                      "areaServed": "US",
                      "availableLanguage": "English"
                    },
                    "sameAs": [
                      "https://www.facebook.com/SmartFleetFunding/",
                      "https://www.instagram.com/smartfleetfunding/",
                      "https://www.linkedin.com/company/smart-fleet-funding/"
                    ]
                  },
                  {
                    "@type": "Service",
                    "@id": "https://www.smartfleetfunding.com/full-fact",
                    "serviceType": "Freight Invoice Factoring",
                    "provider": {
                      "@id": "https://www.smartfleetfunding.com/#organization"
                    },
                    "areaServed": "US",
                    "audience": {
                      "@type": "Audience",
                      "audienceType": "Transportation and Trucking Companies"
                    },
                    "description": "Smart Fleet Funding offers freight invoice factoring services to help transportation companies maintain cash flow by converting unpaid invoices into immediate working capital.",
                    "offers": {
                      "@type": "Offer",
                      "url": "https://www.smartfleetfunding.com/full-fact",
                      "priceCurrency": "USD",
                      "eligibleRegion": "US",
                      "price": "Varies based on agreement",
                      "priceSpecification": {
                        "@type": "PriceSpecification",
                        "priceCurrency": "USD",
                        "price": "Varies",
                        "priceType": "Fee per invoice"
                      }
                    }
                  }
                ]
              }`}
          </Script>
          <body className={inter.className}>{children}</body>
        </html>
      </I18nProvider>
    </ReCaptchaProvider>
  )
}
