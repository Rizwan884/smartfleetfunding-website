/* eslint-disable @next/next/inline-script-id */
'use client'

import Banners from '@/components/banner'
import FormFreight from '@/components/form-freight'
import HelpYou from '@/components/help-you'
import Needs from '@/components/need'
import Programs from '@/components/program'
import Provides from '@/components/provide'
import { useI18nProvider } from '@/context/I18nProvider'
import Script from 'next/script'
import Footer from '../../../components/footer'
import Navbar from '../../../components/navbar'

export default function Freight() {
  const { t } = useI18nProvider()
  const title = (
    <p className="font-montserrat">
      {t.freightbroker.pageTitle}{' '}
      <strong className="fw-bold">{t.freightbroker.titleStrong}</strong>
    </p>
  )
  const titleMobile = (
    <p className="font-montserrat text-dark-blue">
      {t.freightbroker.pageTitle}{' '}
      <strong className="fw-bold">{t.freightbroker.titleStrong}</strong>
    </p>
  )
  const titleForm = t.freightbroker.titleForm

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
        title={title}
        titleMobile={titleMobile}
        hideIcons
        backgroundImage="/images/sff-freight.webp"
        mobileBackgroundImage="/images/sff-freight-mobile.webp"
      />
      <Needs />
      <Programs />
      <Provides />
      <HelpYou />
      <FormFreight titleForm={titleForm} />
      <Footer />
    </>
  )
}
