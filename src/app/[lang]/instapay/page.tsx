'use client'

import Banners from '@/components/banner'
import Benefits from '@/components/benefits'
import FormInstapay from '@/components/form-instapay'
import SectionAccordion from '@/components/section-accordion'
import Steps from '@/components/steps'
import Welcome from '@/components/welcome'
import { useI18nProvider } from '@/context/I18nProvider'
import Footer from '../../../components/footer'
import Navbar from '../../../components/navbar'

export default function Instapay() {
  const { t } = useI18nProvider()
  const title = (
    <p>
      {t.instapay.pagetittle}{' '}
      <strong className="fw-bold">{t.instapay.pagestrong}</strong>
    </p>
  )
  const titleMobile = (
    <p>
      {t.instapay.pagetittle}{' '}
      <strong className="fw-bold">{t.instapay.pagestrong}</strong>
    </p>
  )
  const accordionInstaItems = t.instapay.accordionItems

  return (
    <>
      <Navbar />
      <Banners
        hideIcons={true}
        title={title}
        titleMobile={titleMobile}
        backgroundImage="/images/sff-instapay.webp"
        mobileBackgroundImage="/images/sff-instapay-mobile.webp"
      />
      <Welcome />
      <Steps />
      <Benefits />
      <FormInstapay />
      <SectionAccordion
        items={accordionInstaItems}
        headTitle={t.instapay.accordiontittle}
      />
      <Footer />
    </>
  )
}
