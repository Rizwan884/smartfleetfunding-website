'use client'

import Contact from '@/components/contact'
import FormContact from '@/components/form-contact'
import { useI18nProvider } from '@/context/I18nProvider'
import Footer from '../../../components/footer'
import Navbar from '../../../components/navbar'

export default function AboutUs() {
  const { t } = useI18nProvider()
  const titleForm = t.contact.titleForm
  return (
    <>
      <Navbar />
      <Contact />
      <FormContact
        titleForm={titleForm}
        backgroundImage="/images/sff-contact.svg"
      />

      <Footer />
    </>
  )
}
