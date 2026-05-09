import { MAX_WIDTH } from '@/constants/const'
import { useI18nProvider } from '@/context/I18nProvider'
import { Button } from 'react-bootstrap'
import { useMediaQuery } from 'react-responsive'
type ICard = {
  title: string
  titleBreak: string
  descripcion: string
  lineBreak: string
  breakText: string
  button: string
}
export default function ImgInfo() {
  const { t } = useI18nProvider()
  const isMobile = useMediaQuery({ maxWidth: MAX_WIDTH })
  return (
    <>
      {isMobile ? (
        <div className="py-4">
          {t.home.sectionInfo.map(
            (
              { title, titleBreak, lineBreak, breakText, descripcion }: ICard,
              key: number
            ) => (
              <div key={key} className="  font-montserrat pt-2 mx-5 mb-5">
                <h1 className="text-start fw-bold fs-4">
                  {title} <br /> {titleBreak}
                  <div className="line"></div>
                </h1>
                <div className="lh-sm card-text-bottom fw-400">
                  {descripcion} <br />
                  {lineBreak} <br />
                  {breakText}
                </div>

                <Button
                  href="tel:+18888755506"
                  className="contact_slide fw-bold px-4 my-4 h-25 d-inline-block"
                  variant="btn btn-custom"
                >
                  {t.home.sectionInfo[0].button}
                </Button>
              </div>
            )
          )}
        </div>
      ) : (
        <div className="py-5 bg-white">
          {t.home.sectionInfo.map(
            (
              { title, titleBreak, descripcion, lineBreak, breakText }: ICard,
              key: number
            ) => (
              <div key={key} className="container font-montserrat pt-6 mx-auto">
                <div className="row align-items-center">
                  <div className="col-lg-8">
                    <h1 className="text-start fw-bold fs-3 mb-4">
                      {title} <br /> {titleBreak}
                      <div className="line mt-2"></div>
                    </h1>
                    <div className="card-text-bottom fw-400 fs-5 mb-4">
                      {descripcion} <br />
                      {lineBreak} <br />
                      {breakText}
                    </div>
                    <Button
                      href="tel:+18888755506"
                      className="contact_slide fw-bold px-5 py-3 d-inline-block"
                      variant="btn btn-custom"
                    >
                      {t.home.sectionInfo[0].button}
                    </Button>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      )}
    </>
  )
}
