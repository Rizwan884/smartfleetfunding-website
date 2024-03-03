'use client'

import Banners from '@/components/banner'
import FormFreight from '@/components/form-freight'
import HelpYou from '@/components/help-you'
import Needs from '@/components/need'
import Programs from '@/components/program'
import Provides from '@/components/provide'
import Footer from '../../../components/footer'
import Navbar from '../../../components/navbar'

export default function Freight() {
  const title = (
    <p className="font-montserrat">
      Freight <strong className="fw-bold">Broker Program</strong>
    </p>
  )
  const titleMobile = (
    <p className="font-montserrat text-dark-blue">
      Freight <strong className="fw-bold">Broker Program</strong>
    </p>
  )
  const titleForm = 'Drive Profits, Enhance Operations Get Started!'

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
