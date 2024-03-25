'use client'
import Banners from '@/components/banner'
import Footer from '../../../components/footer'
import Navbar from '../../../components/navbar'

import Know from '@/components/know'

export default function AboutUs() {
  const title = (
    <p className="font-montserrat">
      About <strong className="fw-bold">Us</strong>
    </p>
  )
  const titleMobile = (
    <p className="text-dark-blue">
      About <strong className="fw-bold">Us</strong>
    </p>
  )

  return (
    <>
      <Navbar />
      <Banners
        title={title}
        titleMobile={titleMobile}
        hideIcons
        mobileBackgroundImage="images/sff-about-us-mobile.webp"
        backgroundImage="images/sff-about-us.webp"
      />
      <Know />
      <Footer />
    </>
  )
}
