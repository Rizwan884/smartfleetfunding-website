import { useI18nProvider } from '@/context/I18nProvider'
import { Card, Col, Container, ListGroup, Row } from 'react-bootstrap'
import Image from 'react-bootstrap/Image'
import { useMediaQuery } from 'react-responsive'

type ICard = {
  title: string
  sections: {
    heading: string
    items: string[]
  }[]
  icon: string
  iconback: string
}

export default function Cards() {
  const isMobile = useMediaQuery({ maxWidth: 767 })
  const { t } = useI18nProvider()
  return (
    <>
      {isMobile ? (
        <div className="font-montserrat">
          <h2 className="fs-5 fw-bold text-center">
            {t.home.headercardinfo[0].header}{' '}
            {t.home.headercardinfo[0].descripcion}
          </h2>
          <div className="d-flex justify-content-center ">
            <div className="line"></div>
          </div>
          <Row className="pt-5">
            <Col className="card-column ">
              <Card.Body>
                <a href="/full-fact" className="text-decoration-none">
                  <ListGroup className="rounded-3">
                    <ListGroup.Item
                      className=" body-list-mobile bd-box "
                      style={{ lineHeight: '20px' }}
                    >
                      <div className="d-flex">
                        <div
                          className="icon-cards-mobile"
                          style={{ height: 60 }}
                        >
                          <Image
                            style={{ width: '50px' }}
                            src="/images/sff-factura.svg"
                            alt=""
                          />
                        </div>
                        <div>
                          <Card.Title className="cards-title-mobile mx-auto ">
                            Full Fact
                          </Card.Title>
                        </div>
                        <div className="ms-auto">
                          <Image
                            style={{ width: '20px' }}
                            src="/images/sff-arrow-right-mobile.svg"
                            alt=""
                          />
                        </div>
                      </div>
                    </ListGroup.Item>
                  </ListGroup>
                </a>
              </Card.Body>
            </Col>
            <Col className="card-column mt-3">
              <Card.Body>
                <a href="/fespay" className="text-decoration-none">
                  <ListGroup className="rounded-3">
                    <ListGroup.Item
                      className=" body-list-mobile bd-box "
                      style={{ lineHeight: '26px' }}
                    >
                      <div className="d-flex">
                        <div className="icon-cards-mobile">
                          <Image
                            style={{ width: '45px' }}
                            src="/images/sff-cash.svg"
                            alt=""
                          />
                        </div>
                        <div>
                          <Card.Title className="cards-title-mobile mx-2">
                            FES Pay/InstaPay
                          </Card.Title>
                        </div>
                        <div className="ms-auto">
                          <Image
                            style={{ width: '20px' }}
                            src="/images/sff-arrow-right-mobile.svg"
                            alt=""
                          />
                        </div>
                      </div>
                    </ListGroup.Item>
                  </ListGroup>
                </a>
              </Card.Body>
            </Col>
            <Col className="card-column mt-3">
              <Card.Body>
                <a href="/fuel-card" className="text-decoration-none">
                  <ListGroup className="rounded-3">
                    <ListGroup.Item
                      className=" body-list-mobile bd-box "
                      style={{ lineHeight: '26px' }}
                    >
                      <div className="d-flex">
                        <div
                          className="icon-cards-mobile"
                          style={{ marginTop: '1px' }}
                        >
                          <Image
                            style={{ width: '58px' }}
                            src="/images/sff-gas.svg"
                            alt=""
                          />
                        </div>
                        <div>
                          <Card.Title className="cards-title-mobile ">
                            Smart Fuel Card
                          </Card.Title>
                        </div>
                        <div className="ms-auto">
                          <Image
                            style={{ width: '20px' }}
                            src="/images/sff-arrow-right-mobile.svg"
                            alt=""
                          />
                        </div>
                      </div>
                    </ListGroup.Item>
                  </ListGroup>
                </a>
              </Card.Body>
            </Col>
          </Row>
        </div>
      ) : (
        <Container className="font-montserrat">
          <h2 className=" fw-bold text-left">
            {t.home.headercardinfo[0].header} <br />
            {t.home.headercardinfo[0].descripcion}
          </h2>
          <div className="line"></div>
          <Row
            className="pt-5"
            style={{ minHeight: '600px', maxHeight: '600px' }}
          >
            {t.home.carinfo.map(
              ({ title, sections, icon, iconback }: ICard, key: number) => (
                <Col
                  key={key}
                  className="card-column "
                  style={{ width: '300px' }}
                >
                  <Card.Body style={{ fontSize: '15px', overflowY: 'auto' }}>
                    <a href="/full-fact" className="text-decoration-none">
                      <ListGroup>
                        <ListGroup.Item className="body-list bd-box card-hb">
                          <div className="icon-cards" style={{ height: 70 }}>
                            <Image
                              style={{ width: '62px' }}
                              src={iconback}
                              alt=""
                            />
                          </div>
                          <Card.Title className="cards-title">
                            {title}
                          </Card.Title>
                          <div className="cards-size">
                            {sections.map((section, index) => (
                              <div key={index}>
                                <p className="mb-0 fw-600 text-green">
                                  <Image src={icon} alt="" /> {section.heading}
                                </p>
                                {section.items.map((item, itemIndex) => (
                                  <li
                                    key={itemIndex}
                                    className="list-group fw-400 text-dark-blue"
                                  >
                                    {item}
                                  </li>
                                ))}
                                {index !== sections.length - 1 && (
                                  <div className="cards-line"></div>
                                )}
                              </div>
                            ))}
                          </div>
                        </ListGroup.Item>
                      </ListGroup>
                    </a>
                  </Card.Body>
                </Col>
              )
            )}
          </Row>
        </Container>
      )}
    </>
  )
}
