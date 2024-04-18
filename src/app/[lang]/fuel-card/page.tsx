'use client'
import Banners from '@/components/banner'
import FormFuelCard from '@/components/form-fuel-card'
import Road from '@/components/road'
import { useI18nProvider } from '@/context/I18nProvider'
import Footer from '../../../components/footer'
import Navbar from '../../../components/navbar'

export default function fuelCard() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { t } = useI18nProvider()
  const title = (
    <p className="font-montserrat">
      {t.fuelcard.pageTitle}{' '}
      <strong className="fw-bold">{t.fuelcard.pagetitleStrong}</strong>
    </p>
  )
  const titleMobile = (
    <p className="font-montserrat text-dark-blue">
      {t.fuelcard.pageTitle} <br />
      <strong className="fw-bold">{t.fuelcard.pagetitleStrong}</strong>
    </p>
  )
  const titleForm = t.fuelcard.formTitle

  return (
    <>
      <Navbar />
      <Banners
        hideIcons
        title={title}
        titleMobile={titleMobile}
        backgroundImage="/images/sff-fuel-card.webp"
        mobileBackgroundImage="/images/sff-fuel-card-mobile.webp"
      />
      <Road />
      <cardsFuel />
      <fuelCardSections />
      <FormFuelCard titleForm={titleForm} />
      <Footer />
    </>
  )
}
