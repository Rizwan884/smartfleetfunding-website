import { useI18nProvider } from '@/context/I18nProvider'
import { Carousel, Col, Container, Row } from 'react-bootstrap'
import Image from 'react-bootstrap/Image'
import { useMediaQuery } from 'react-responsive'

type ICard = {
  title: string
  shortDescription: string
  regular: string
  strong: string
  icon: string
  iconback: string
}
export default function Cards() {
  const isMobile = useMediaQuery({ maxWidth: 769 })
  const { t } = useI18nProvider()
  return (
    <>
      {isMobile ? (
        <Carousel
          id="carousel-mobile"
          className="font-montserrat card-container"
          controls={true}
        >
          {t.home.cards.map(
            ({ title, regular, strong, icon }: ICard, key: number) => (
              <Carousel.Item key={key}>
                <Col xs={12} lg={4} className="card-column" key={key}>
                  <div className="mobile-card">
                    <div className="card w-100 h-75">
                      <div className="front-mobile font-montserrat fw-600">
                        <div className="d-flex align-items-center justify-content-start">
                          <div className="card-icon">
                            <Image className="icons" src={icon} alt="" />
                          </div>
                          <div className="d-flex flex-column ml-3 mx-2">
                            <div className="card-text fw-bold">{title}</div>
                            <div className="line-front"></div>
                          </div>
                        </div>
                        <div className="card-text-bottom-back fw-400 mt-3">
                          {regular}
                          <strong>{strong}</strong>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
              </Carousel.Item>
            )
          )}
        </Carousel>
      ) : (
        <Container className="card-container">
          <Row>
            {t.home.cards.map(
              (
                {
                  title,
                  shortDescription,
                  regular,
                  strong,
                  icon,
                  iconback
                }: ICard,
                key: number
              ) => (
                <Col xs={12} md={4} className="card-column" key={key}>
                  <div className="flip-container">
                    <div className="card">
                      <div className="front font-montserrat fw-600">
                        <div className="card-icon">
                          <Image className="icons" src={icon} alt="" />
                        </div>
                        <div className="d-flex flex-column align-items-end align-items-md-center">
                          <div className="card-text fw-bold">{title}</div>
                          <div className="line-front"></div>
                        </div>
                        <div className="card-text-bottom  fw-400">
                          {shortDescription}
                        </div>
                      </div>
                      <div className="back font-montserrat fw-600">
                        <div className="card-icon-back">
                          <Image className="icons" src={iconback} alt="" />
                        </div>
                        <div className="card-text-back ">{title}</div>
                        <div className="line-back"></div>
                        <div className="card-text-bottom-back fw-400">
                          {regular}
                          <strong>{strong}</strong>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
              )
            )}
          </Row>
        </Container>
      )}
    </>
  )
}
