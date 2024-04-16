import { useI18nProvider } from '@/context/I18nProvider'
import Image from 'next/image'
import { Carousel, Col, Container, Row } from 'react-bootstrap'
import { useMediaQuery } from 'react-responsive'
export default function Provides() {
  const isMobile = useMediaQuery({ maxWidth: 768 })
  const { t } = useI18nProvider()
  return (
    <>
      <div className="container mt-7 pb-5 font-montserrat">
        <div className="d-flex flex-column align-items-center">
          <div className="line width-bf fw-600 mb-2 ms-3 align-item-center"></div>
          <h1 className="fw-600 fs-2 text-center  flex  align-items-center gap-3">
            {t.freightbroker.providetitle}
          </h1>
        </div>
      </div>
      {isMobile ? (
        <Row className="font-montserrat mx-0 px-0 px-md-auto mx-md-auto">
          <Col>
            <Carousel id="provider-carrusel" className="w-100" fade>
              {t.freightbroker.provide.map((provide, index) => (
                <Carousel.Item key={index}>
                  <div className="container d-flex flex-column bg-white-shadow w-65 h-100">
                    <Row className="m-2">
                      <div>
                        <h1 id="hover" className="fw-bold fs-3 mb-2 mt-2 w-75 ">
                          {' '}
                          <span className="sub-line">{provide.title}</span>
                        </h1>
                      </div>
                      {provide.items.map((item, idx) => (
                        <div
                          key={idx}
                          className={`d-flex mb-4 lh-sm align-items-center gap-2 ${idx !== provide.items.length - 1 ? 'line-programs' : ''}`}
                        >
                          <Image
                            width={20}
                            height={20}
                            className="mt-40"
                            src={provide.icon}
                            alt="testimonial-img"
                          ></Image>
                          <div>
                            <p className="ms-2 mt-3 fs-5 fw-500">{item}</p>
                          </div>
                        </div>
                      ))}
                    </Row>
                  </div>
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>
        </Row>
      ) : (
        <Container className="font-montserrat h-100">
          <div className="row font-montserrat">
            {t.freightbroker.provide.map((provide, index) => (
              <div key={index} className="col">
                <div className="container d-flex flex-column bg-white-shadow w-65 h-100">
                  <Row className="m-2">
                    <div>
                      <h1 id="hover" className="fw-bold fs-3 mb-2 mt-2 w-75 ">
                        {' '}
                        <span className="sub-line">{provide.title}</span>
                      </h1>
                    </div>
                    {provide.items.map((item, idx) => (
                      <div
                        key={idx}
                        className="d-flex mb-4 lh-sm align-items-center gap-2 line-programs "
                      >
                        <Image
                          width={20}
                          height={20}
                          className="mt-40"
                          src={provide.icon}
                          alt="testimonial-img"
                        ></Image>
                        <div>
                          <p className="ms-2 mt-3 fs-5 fw-500">{item}</p>
                        </div>
                      </div>
                    ))}
                  </Row>
                </div>
              </div>
            ))}
          </div>
        </Container>
      )}
    </>
  )
}
