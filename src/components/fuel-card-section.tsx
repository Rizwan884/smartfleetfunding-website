import { useI18nProvider } from '@/context/I18nProvider'
import SectionAccordion from './section-accordion'
export default function fuelCardSections() {
  const { t } = useI18nProvider()
  const accordionItems = t.fuelcard.fuelCardSection

  return (
    <>
      <div className="container font-montserrat mt-5 text-center text-md-start ">
        <p className="fw-600 fs-4 pt-3 mb-n5">
          {t.fuelcard.fuelCardSectionTitle}
        </p>
        <SectionAccordion items={accordionItems} width={35} height={35} />
        <p className=" container fw-600 fs-6 mt-n5 ">
          {t.fuelcard.fuelCardSectionDescription}
        </p>
      </div>
    </>
  )
}
