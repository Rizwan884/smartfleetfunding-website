import { useI18nProvider } from '@/context/I18nProvider'
import Cards from './cards'
import CardsInfo from './cards-info'
import ImgInfo from './section-info'
export default function CardsSections() {
  const { t } = useI18nProvider()
  return (
    <>
      <div className="gray-section font-montserrat">
        <div className="fs-3 mb-4 text-center fw-bold">{t.home.cardsTitle}</div>
      </div>
      <Cards />
      <div className="white-section">
        <CardsInfo />
      </div>
      <ImgInfo />
    </>
  )
}
