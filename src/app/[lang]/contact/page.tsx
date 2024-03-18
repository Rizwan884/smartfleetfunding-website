'use client'

import Footer from '../../../components/footer'
import Navbar from '../../../components/navbar'
import { useI18nProvider } from '@/context/I18nProvider'
import Contact from '@/components/contact'
import FormContact from '@/components/form-contact'

export default function AboutUs() {
  const { t } = useI18nProvider()
  const titleForm = t.contact.titleform;
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
