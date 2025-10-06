/* eslint-disable @next/next/inline-script-id */
'use client'

import Banners from '@/components/banner'
import Benefits from '@/components/benefits'
import FormInstapay from '@/components/form-fespay'
import SectionAccordion from '@/components/section-accordion'
import Steps from '@/components/steps'
import Welcome from '@/components/welcome'
import { useI18nProvider } from '@/context/I18nProvider'
import Script from 'next/script'
import Footer from '../../../components/footer'
import Navbar from '../../../components/navbar'

export default function Instapay() {
  const { t } = useI18nProvider()
  const title = (
    <p>
      {t.fespay.pageTitle}{' '}
      <strong className="fw-bold">{t.fespay.pagestrong}</strong>
    </p>
  )
  const titleMobile = (
    <p>
      {t.fespay.pageTitle}{' '}
      <strong className="fw-bold">{t.fespay.pagestrong}</strong>
    </p>
  )
  const accordionInstaItems = t.fespay.accordionItems

  return (
    <>
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-0XVT3QM87R"
        ></Script>
        <Script
          dangerouslySetInnerHTML={{
            __html: `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-0XVT3QM87R');
  `
          }}
        />
      </head>
      <Navbar />
      <Banners
        hideIcons={true}
        title={title}
        titleMobile={titleMobile}
        backgroundImage="/images/sff-fespay.webp"
        mobileBackgroundImage="/images/sff-fespay-mobile.webp"
      />
      <Welcome />
      <Steps />
      <Benefits />
      <FormInstapay />
      <SectionAccordion
        items={accordionInstaItems}
        headTitle={t.fespay.accordionTitle}
      />
      <Footer />
    </>
  )
}
