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
  const isMobile = useMediaQuery({ maxWidth: 767 })
  const { t } = useI18nProvider()
  return (
    <>
      {isMobile ? (
        <Carousel
          id="carousel-mobile"
          className="font-montserrat card-container "
          controls={true}
        >
          {t.home.cards.map(
            ({ title, regular, strong, icon }: ICard, key: number) => (
              <Carousel.Item key={key}>
                <Col xs={12} md={4} className="card-column" key={key}>
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
            <Col xs={12} md={4} className="card-column">
              <div className="flip-container">
                <div className="card">
                  <div className="front font-montserrat fw-600">
                    <div className="card-icon">
                      <Image
                        className="icons"
                        src="/images/sff-clock-front.svg"
                        alt=""
                      />
                    </div>
                    <div className="d-flex flex-column align-items-end align-items-md-center">
                      <div className="card-text">FAST</div>
                      <div className="line-front"></div>
                    </div>
                    <div className="card-text-bottom  fw-400">
                      Our tailored factoring <br /> solutions.
                    </div>
                  </div>
                  <div className="back font-montserrat fw-600">
                    <div className="card-icon-back">
                      <Image
                        className="icons"
                        src="/images/sff-clock-back.svg"
                        alt=""
                      />
                    </div>
                    <div className="card-text-back ">FAST</div>
                    <div className="line-back"></div>
                    <div className="card-text-bottom-back fw-400">
                      Our tailored factoring solutions swiftly optimize your
                      cash flow,{' '}
                      <strong>
                        ensuring rapid growth in your business{"'"}s
                        profitability.
                      </strong>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col xs={12} md={4} className="card-column">
              <div className="flip-container">
                <div className="card">
                  <div className="front font-montserrat fw-600">
                    <div className="card-icon">
                      <Image
                        className="icons2"
                        src="/images/sff-easy-front.svg"
                        alt=""
                      />
                    </div>
                    <div className="card-text">EASY</div>
                    <div className="line-front"></div>
                    <div className="card-text-bottom fw-400">
                      We simplify the accounts <br /> payable.
                    </div>
                  </div>
                  <div className="back font-montserrat fw-600">
                    <div className="card-icon-back">
                      <Image
                        className="icons2"
                        src="/images/sff-easy-back.svg"
                        alt=""
                      />
                    </div>
                    <div className="card-text-back ">EASY</div>
                    <div className="line-back"></div>
                    <div className="card-text-bottom-back fw-400">
                      We simplify the Accounts Payable and Receivable process,{' '}
                      <strong>
                        making it a breeze for you to focus on business growth.
                      </strong>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col xs={12} md={4} className="card-column">
              <div className="flip-container">
                <div className="card">
                  <div className="front font-montserrat fw-600">
                    <div className="card-icon">
                      <Image
                        className="icons2"
                        src="/images/sff-shield-front.svg"
                        alt=""
                      />
                    </div>
                    <div className="card-text ">SECURE</div>
                    <div className="line-front"></div>
                    <div className="card-text-bottom fw-400">
                      The carries and Freight <br /> companies
                    </div>
                  </div>
                  <div className="back font-montserrat fw-600">
                    <div className="card-icon-back">
                      <Image
                        className="icons2"
                        src="/images/sff-shield-back.svg"
                        alt=""
                      />
                    </div>
                    <div className="card-text-back ">SECURE</div>
                    <div className="line-back"></div>
                    <div className="card-text-bottom-back fw-400">
                      The carriers and freight companies receive payment
                      securely in as little as 12 hours,
                      <strong>
                        {' '}
                        cultivating robust and trusting partnerships.
                      </strong>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      )}
    </>
  )
}
