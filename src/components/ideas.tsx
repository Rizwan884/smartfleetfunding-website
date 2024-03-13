import { Carousel } from 'react-bootstrap'
import Image from 'react-bootstrap/Image'
import { useI18nProvider } from '@/context/I18nProvider'

const carouselIdea = {
  backgroundSize: 'cover',
  backgroundPosition: 'center center',
  height: '400px',
  position: 'relative' as const
}
type ICard = {
  title: string
  icon: string
  descripcion: string
  strong: string
}

export default function Ideas() {
  const { t } = useI18nProvider()
  return (
    <>
      <div className="container font-montserrat mt-5 mb-5 text-center text-md-start ">
        <h2 className="fw-600 ">{t.fullcard.header[0].title}</h2>
        <p className="fw-500 fs-5 pt-3">
          {t.fullcard.header[0].descripcion}
          <strong> {t.fullcard.header[0].strong}</strong>
        </p>
      </div>
      <Carousel
        id="idea-carrusel"
        className="font-montserrat container "
        controls={false}
      >
        {t.fullcard.carruzel.map(
            ({ title, descripcion, strong, icon }: ICard, key: number) => (
              <Carousel.Item key={key} className="bg-grey">
          <div
            style={{
              ...carouselIdea
            }}
          >
            <div className="mt-5 mx-4">
              <h1 className="text-start fs-3 fw-600 ms-4 d-none d-sm-block">
                {title}
                <div
                  className="line"
                  style={{
                    marginTop: '0',
                    width: '40.9px'
                  }}
                ></div>
              </h1>
              <Image
                className="mt-5 mx-4"
                src={icon}
                alt=""
                style={{ width: '38px' }}
              ></Image>
              <div className="line-idea"></div>
              <h2 className="mx-4 fs-3 fw-400">
                {descripcion}
                <strong className="mx-2">
                  {strong}
                </strong>
              </h2>
            </div>
          </div>
        </Carousel.Item>
            )
          )}
      </Carousel>
    </>
  )
}
