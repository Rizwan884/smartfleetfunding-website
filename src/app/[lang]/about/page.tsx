'use client'

import Banners from '@/components/banner'
import Know from '@/components/know'
import { useI18nProvider } from '@/context/I18nProvider'
import Footer from '../../../components/footer'
import Navbar from '../../../components/navbar'

export default function AboutUs() {
  const { t } = useI18nProvider()
  const title = (
    <p className="font-montserrat">
      {t.about.pageTitle}{' '}
      <strong className="fw-bold">{t.about.pagestrong}</strong>
    </p>
  )
  const titleMobile = (
    <p className="text-dark-blue">
      {t.about.pageTitle}{' '}
      <strong className="fw-bold">{t.about.pagestrong}</strong>
    </p>
  )

  return (
    <>
      <Navbar />
      <Banners
        title={title}
        titleMobile={titleMobile}
        hideIcons
        mobileBackgroundImage="/images/sff-about-us-mobile.webp"
        backgroundImage="/images/sff-about-us.webp"
      />
      <Know />
      <Footer />
    </>
  )
}
