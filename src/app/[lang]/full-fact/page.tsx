'use client'

import Banners from '@/components/banner'
import Help from '@/components/help'
import Ideas from '@/components/ideas'
import { useI18nProvider } from '@/context/I18nProvider'
import Footer from '../../../components/footer'
import SectionForm from '../../../components/form'
import Navbar from '../../../components/navbar'
import SectionAccordion from '../../../components/section-accordion'
import TestimonialCarousel from '../../../components/testimonial'

export default function fullFact() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { t } = useI18nProvider()
  const title = (
    <p className="font-montserrat">
      {t.fullcard.pagetittle}{' '}
      <strong className="fw-bold">{t.fullcard.pagestrong}</strong>
    </p>
  )
  const titleMobile = (
    <p className="font-montserrat text-dark-blue">
      {t.fullcard.pagetittle}{' '}
      <strong className="fw-600">{t.fullcard.pagestrong}</strong>
    </p>
  )

  const titleForm = t.fullcard.titleform

  const accordionItems = t.fullcard.accordionItems

  return (
    <>
      <Navbar />
      <Banners
        title={title}
        titleMobile={titleMobile}
        backgroundImage="/images/sff-full-facts.webp"
        mobileBackgroundImage="/images/sff-full-facts-mobile.webp"
      />
      <Ideas />
      <Help />
      <SectionForm titleForm={titleForm} />
      <TestimonialCarousel />
      <SectionAccordion
        items={accordionItems}
        showIcons
        width={35}
        height={34}
      />
      <Footer />
    </>
  )
}
