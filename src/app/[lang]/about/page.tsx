'use client'
import Banners from '@/components/banner'
import Footer from '../../../components/footer'
import Navbar from '../../../components/navbar'
import { useI18nProvider } from '@/context/I18nProvider'
import Know from '@/components/know'

export default function AboutUs() {
  const { t } = useI18nProvider()
  const title = (
    <p className="font-montserrat">
      {t.about.pagetitle} <strong className="fw-bold">{t.about.pagestrong}</strong>
    </p>
  )
  const titleMobile = (
    <p className="text-dark-blue">
      {t.about.pagetitle} <strong className="fw-bold">{t.about.pagestrong}</strong>
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
