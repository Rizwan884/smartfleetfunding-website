'use client'
import Banners from '@/components/banner'
import CardsFuel from '@/components/cards-fuel'
import FormFuelCard from '@/components/form-fuel-card'
import Road from '@/components/road'
import Footer from '../../../components/footer'
import FuelCardSections from '../../../components/fuel-card-section'
import Navbar from '../../../components/navbar'
import { useI18nProvider } from '@/context/I18nProvider'

export default function fuelCard() {
  const { t } = useI18nProvider()
  const title = (
    <p className="font-montserrat">
      {t.fuelcard.pagetittle} <strong className="fw-bold">{t.fuelcard.pagetittlestrong}</strong>
    </p>
  )
  const titleMobile = (
    <p className="font-montserrat text-dark-blue">
      {t.fuelcard.pagetittle} <br />
      <strong className="fw-bold">{t.fuelcard.pagetittlestrong}</strong>
    </p>
  )
  const titleForm = t.fuelcard.formtitle;

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
