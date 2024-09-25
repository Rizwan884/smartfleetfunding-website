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
      <head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-0XVT3QM87R"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-0XVT3QM87R');
  `
          }}
        />
      </head>
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
