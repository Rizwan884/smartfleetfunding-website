'use client'

import Banners from '@/components/banner'
import FormFreight from '@/components/form-freight'
import HelpYou from '@/components/help-you'
import Needs from '@/components/need'
import Programs from '@/components/program'
import Provides from '@/components/provide'
import Footer from '../../../components/footer'
import Navbar from '../../../components/navbar'
import { useI18nProvider } from '@/context/I18nProvider'

export default function Freight() {
  const { t } = useI18nProvider()
  const title = (
    <p className="font-montserrat">
      {t.freightbroker.pagetitle} <strong className="fw-bold">{t.freightbroker.titlestrong}</strong>
    </p>
  )
  const titleMobile = (
    <p className="font-montserrat text-dark-blue">
      {t.freightbroker.pagetitle} <strong className="fw-bold">{t.freightbroker.titlestrong}</strong>
    </p>
  )
  const titleForm = t.freightbroker.titleform

  return (
    <>
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
