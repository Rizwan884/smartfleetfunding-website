import { useI18nProvider } from '@/context/I18nProvider'
import Image from 'react-bootstrap/Image'
type ICard = {
  tittle: string
  descripcion: string
  icon: string
}
export default function Benefits() {
  const { t } = useI18nProvider()
  return (
    <>
      <div className="container mt-7 pb-5 font-montserrat">
        <div className="d-flex flex-column align-items-center">
          <div className="line width-bf fw-600 mb-2 ms-3 align-item-center"></div>
          <h1 className="fw-bold fs-2 text-center  flex-column align-items-center gap-3">
            {t.fespay.benefitsTitle}
          </h1>
        </div>
        <div className="row mt-5">
          {t.fespay.Benefits.map(
            ({ tittle, descripcion, icon }: ICard, key: number) => (
              <div key={key} className="col-12 col-md-6">
                <div className="text-left p-5 d-flex align-items-center gap-2">
                  <Image
                    className={`img-style img-style${key + 1}`}
                    alt="icon"
                    src={icon}
                  ></Image>
                  <div className="lh-sm">
                    <h2 className="fs-3 fw-600 text-green ">{tittle}</h2>
                    <div className="fs-5 fw-400">{descripcion}</div>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
        <div className="row">
          {t.fespay.BenefitsTwo.map(
            ({ tittle, descripcion, icon }: ICard, key: number) => (
              <div key={key} className="col-12 col-md-6">
                <div className="text-left p-5 d-flex align-items-center gap-2">
                  <Image className="img-style" alt="icon" src={icon}></Image>
                  <div className="lh-sm">
                    <h2 className="fs-3 fw-600 text-green ">{tittle}</h2>
                    <div className="fs-5 fw-400">{descripcion}</div>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </>
  )
}
