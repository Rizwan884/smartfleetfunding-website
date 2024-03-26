import { useI18nProvider } from '@/context/I18nProvider'
export default function Contact() {
  const { t } = useI18nProvider()
  return (
    <>
      <div className="p-md-5 p-2 mb-50 bg-search hide-background-mobile p-contact">
        <div className="d-flex flex-row  font-montserrat">
          <div className="d-flex flex-column mt-5 ps-3 ps-md-5">
            <div className="line width-bf fw-600 mb-2 ms-1 align-item-center"></div>
            <h1 className="fw-600 fsm-4 fs-2 text-left  flex  align-items-left gap-3">
              {t.contact.contacttitle}
            </h1>
          </div>
        </div>
      </div>
    </>
  )
}
