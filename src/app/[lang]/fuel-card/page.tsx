'use client'

import Banners from '@/components/banner'
import CardsFuel from '@/components/cards-fuel'
import FormFuelCard from '@/components/form-fuel-card'
import FuelCardSections from '@/components/fuel-card-section'
import Road from '@/components/road'
import { useI18nProvider } from '@/context/I18nProvider'
import Footer from '../../../components/footer'
import Navbar from '../../../components/navbar'

export default function FuelCard() {
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
      <CardsFuel />
      <FuelCardSections />
      <FormFuelCard titleForm={titleForm} />
      <Footer />
    </>
  )
}
