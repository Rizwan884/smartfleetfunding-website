import { useI18nProvider } from '@/context/I18nProvider'
import { Button, Carousel } from 'react-bootstrap'
import { useMediaQuery } from 'react-responsive'
// Interface for describing custom styles
const carouselImage = {
  backgroundSize: 'cover',
  backgroundPosition: 'center center',
  height: '400px',
  position: 'relative' as const
}
type ICard = {
  title: string
  strong: string
  button: string
  href: string
  image: string
  imageMobile: string
}
export default function Slider() {
  const isMobile = useMediaQuery({ maxWidth: 768 })
  const { t } = useI18nProvider()
  return (
    <>
      {isMobile ? (
        <Carousel className="font-montserrat" controls={false}>
          {t.home.slider.map(
            (
              { title, strong, button, imageMobile, href }: ICard,
              key: number
            ) => (
              <Carousel.Item key={key}>
                <div
                  style={{
                    ...carouselImage,
                    backgroundImage: `url("${imageMobile}")`
                  }}
                >
                  <div className="slider-container-mobile mx-4">
                    <h1 className="text-start fs-4">
                      {title} <br />
                      <strong>{strong}</strong>
                    </h1>
                    <div className="mt-4">
                      <Button
                        href={href}
                        className="contact_slide fw-bold h-25 d-inline-block"
                        variant="btn btn-custom"
                      >
                        {button}
                      </Button>
                    </div>
                  </div>
                </div>
              </Carousel.Item>
            )
          )}
        </Carousel>
      ) : (
        <Carousel className="font-montserrat" controls={false}>
          {t.home.slider.map(
            ({ title, strong, button, image, href }: ICard, key: number) => (
              <Carousel.Item key={key}>
                <div
                  style={{
                    ...carouselImage,
                    backgroundImage: `url("${image}")`
                  }}
                >
                  <div className="slider-container slider-container mx-4">
                    <h1 className="text-start fs-3">
                      {title} <br />
                      <strong>{strong}</strong>
                    </h1>
                    <Button
                      href={href}
                      className="contact_slide fw-bold  my-4 h-25 d-inline-block"
                      variant="btn btn-custom"
                    >
                      {button}
                    </Button>
                  </div>
                </div>
              </Carousel.Item>
            )
          )}
        </Carousel>
      )}
    </>
  )
}
