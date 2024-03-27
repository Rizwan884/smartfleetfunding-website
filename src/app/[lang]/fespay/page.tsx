'use client'

import Banners from '@/components/banner'
import Benefits from '@/components/benefits'
import FormInstapay from '@/components/form-fespay'
import SectionAccordion from '@/components/section-accordion'
import Steps from '@/components/steps'
import Welcome from '@/components/welcome'
import Footer from '../../../components/footer'
import Navbar from '../../../components/navbar'
import { useI18nProvider } from '@/context/I18nProvider'

export default function Instapay() {
  const { t } = useI18nProvider()
  const title = (
    <p>
      {t.fespay.pagetittle}{' '}
      <strong className="fw-bold">{t.fespay.pagestrong}</strong>
    </p>
  )
  const titleMobile = (
    <p>
      {t.fespay.pagetittle}{' '}
      <strong className="fw-bold">{t.fespay.pagestrong}</strong>
    </p>
  )
  const accordionInstaItems = t.fespay.accordionItems

  return (
    <>
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
        headTitle={t.fespay.accordiontittle}
      />
      <Footer />
    </>
  )
}
