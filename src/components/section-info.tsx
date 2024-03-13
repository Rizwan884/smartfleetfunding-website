import { useI18nProvider } from '@/context/I18nProvider'
import { Button } from 'react-bootstrap'
import { useMediaQuery } from 'react-responsive'
const Image = {
  backgroundSize: 'cover',
  backgroundPosition: 'center center',
  height: '500px'
}
type ICard = {
  title: string
  descripcion: string
  button: string
}
export default function ImgInfo() {
  const { t } = useI18nProvider()
  const isMobile = useMediaQuery({ maxWidth: 767 })
  return (
    <>
      {isMobile ? (
        <div>
          <div
            className=""
            style={{
              ...Image,
              backgroundImage: 'url("/images/sff-truck-driver-vertical.webp")',
              marginTop: '40px'
            }}
          ></div>
          {t.home.sectioninfo.map(
            ({ title, descripcion, button }: ICard, key: number) => (
              <div className="  font-montserrat pt-2 mx-5 mb-5">
                <h1 className="text-start fw-bold fs-4">
                  {title}
                  <div className="line"></div>
                </h1>
                <div className="lh-sm card-text-bottom fw-400">
                  {descripcion}
                </div>

                <Button
                  href="tel:+18888755506"
                  className="contact_slide fw-bold px-4 my-4 h-25 d-inline-block"
                  variant="btn btn-custom"
                >
                  {t.home.sectioninfo[0].button}
                </Button>
              </div>
            )
          )}
        </div>
      ) : (
        <div
          style={{
            ...Image,
            backgroundImage: 'url("/images/sff-truck-driver.webp")',
            marginRight: '80px',
            marginTop: '40px'
          }}
        >
          {t.home.sectioninfo.map(
            ({ title, descripcion, button }: ICard, key: number) => (
              <div className=" info-container font-montserrat pt-6 mx-5">
                <h1 className="text-end fw-bold fs-3">
                  {title}
                  <div className="ms-auto line"></div>
                </h1>
                <div className="card-text-bottom fw-400">
                  We{"'"}re here to answer all your questions and <br /> help
                  you find the best solutions for your <br /> trucking business.
                </div>

                <Button
                  href="tel:+18888755506"
                  className="contact_slide fw-bold  my-4 h-25 d-inline-block"
                  variant="btn btn-custom"
                >
                  {t.home.sectioninfo[0].button}
                </Button>
              </div>
            )
          )}
        </div>
      )}
    </>
  )
}
