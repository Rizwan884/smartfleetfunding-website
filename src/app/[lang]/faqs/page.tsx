'use client'
import { useI18nProvider } from '@/context/I18nProvider'
import { useState } from 'react'
import FaqAccordion from '../../../components/faq-accordion'
import Footer from '../../../components/footer'
import Navbar from '../../../components/navbar'
import Search from '../../../components/search'

export default function Faqs() {
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearch = (term: string) => {
    setSearchTerm(term)
  }
  const { t } = useI18nProvider()
  const accordionInstaItems = t.faqs.accordionInstaItems

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
      <Search onSearch={handleSearch} />
      <FaqAccordion
        items={accordionInstaItems}
        headTitle={t.faqs.faqTitle}
        showIcons
        width={16}
        height={28}
        searchTerm={searchTerm}
        onSearch={handleSearch}
      />
      <Footer />
    </>
  )
}
