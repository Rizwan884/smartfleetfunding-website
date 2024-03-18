'use client'

import CardsSections from '../../components/cards_sections'
import Footer from '../../components/footer'
import Navbar from '../../components/navbar'
import SectionVideo from '../../components/section-video'
import Slider from '../../components/slider'
export default function Home() {
  return (
    <>
      <Navbar />
      <Slider />
      <CardsSections />
      <SectionVideo />
      <Footer />
    </>
  )
}
