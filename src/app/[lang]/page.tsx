'use client'

import SectionVideo from '@/components/section-video'
import Trustpilot from '@/components/trustpilot'
import CardsSections from '../../components/cards_sections'
import Footer from '../../components/footer'
import Navbar from '../../components/navbar'
import Slider from '../../components/slider'
export default function Home() {
  return (
    <>
      <Navbar />
      <Slider />
      <CardsSections />
      <SectionVideo />
      <Trustpilot />
      <Footer />
    </>
  )
}
