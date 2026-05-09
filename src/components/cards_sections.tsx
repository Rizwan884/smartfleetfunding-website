import { useI18nProvider } from '@/context/I18nProvider'
import Cards from './cards'
import ImgInfo from './section-info'
export default function CardsSections() {
  const { t } = useI18nProvider()
  return (
    <>
      <div className="gray-section font-montserrat">
        <div className="fs-3 mb-4 text-center fw-bold">{t.home.cardsTitle}</div>
      </div>
      <Cards />
      <ImgInfo />
    </>
  )
}
