'use client'
import Banners from '@/components/banner'
import CardsFuel from '@/components/cards-fuel'
import FormFuelCard from '@/components/form-fuel-card'
import Road from '@/components/road'
import Footer from '../../../components/footer'
import FuelCardSections from '../../../components/fuel-card-section'
import Navbar from '../../../components/navbar'

export default function fuelCard() {
  const title = (
    <p className="font-montserrat">
      Over The Road <strong className="fw-bold">Fuel Card</strong>
    </p>
  )
  const titleMobile = (
    <p className="font-montserrat text-dark-blue">
      Over The Road <br />
      <strong className="fw-bold">Fuel Card</strong>
    </p>
  )
  const titleForm = 'Start Saving with the Smart Fleet Funding Fuel Card!'

  return (
    <>
      <Navbar />
      <Banners
        hideIcons
        title={title}
        titleMobile={titleMobile}
        backgroundImage="images/sff-fuel-card.webp"
        mobileBackgroundImage="images/sff-fuel-card-mobile.webp"
      />
      <Road />
      <CardsFuel />
      <FuelCardSections />
      <FormFuelCard titleForm={titleForm} />
      <Footer />
    </>
  )
}
