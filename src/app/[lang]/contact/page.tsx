'use client'

import Footer from '../../../components/footer'
import Navbar from '../../../components/navbar'

import Contact from '@/components/contact'
import FormContact from '@/components/form-contact'

export default function AboutUs() {
  const titleForm = "Let's get started!"
  return (
    <>
      <Navbar />
      <Contact />
      <FormContact
        titleForm={titleForm}
        backgroundImage="images/sff-contact.svg"
      />

      <Footer />
    </>
  )
}
