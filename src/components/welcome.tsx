import { useI18nProvider } from '@/context/I18nProvider'
export default function Welcome() {
  const { t } = useI18nProvider()
  return (
    <div className="container font-montserrat pt-5 pb-5">
      <div className="m-4 mb-5 text-center text-md-start">
        <h2 className="fw-600">{t.instapay.welcometittle}</h2>
        <p className="fs-5 fw-500 text-gray-dark">
          {t.instapay.welcomedescripcion}
        </p>
      </div>
    </div>
  )
}
