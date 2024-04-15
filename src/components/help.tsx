import { useI18nProvider } from '@/context/I18nProvider'
import { HelpCard } from '@/utils/types'
import { useEffect, useState } from 'react'
import { Card, Carousel, Col, Container, Row } from 'react-bootstrap'
import Image from 'react-bootstrap/Image'
type ICard = {
  icon: string
  strong: string
  descripcion: string
}
export default function Help() {
  const { t } = useI18nProvider()
  const [helpcards, setHelpCards] = useState<ICard[]>([])
  const [helpcardstwo, setHelpCardsTwo] = useState<ICard[]>([])
  useEffect(() => {
    const helpCardsData: ICard[] = t.fullcard.helpcards.map(
      (card: HelpCard) => ({
        icon: card.icon,
        strong: card.strong,
        descripcion: card.descripcion
      })
    )
    setHelpCards(helpCardsData)
  }, [t])
  useEffect(() => {
    const helpCardsDataTwo: ICard[] = t.fullcard.helpcardstwo.map(
      (card: ICard) => ({
        icon: card.icon,
        strong: card.strong,
        descripcion: card.descripcion
      })
    )
    setHelpCardsTwo(helpCardsDataTwo)
  }, [t])
  return (
    <>
      <Container className="font-montserrat container mt-5">
        <h2 className="fw-bold fs-2 text-center pt-5 flex-column align-items-center gap-3">
          {t.fullcard.helptittle}
        </h2>
        <div className="line help-line"></div>
        <Container id="help" className="mt-sm-1 mb-sm-2 mt-5 mb-6">
          <div className="d-none d-md-block">
            <Row className="mt-5">
              {helpcards.map((card, index) => (
                <Col
                  key={index}
                  className="col-4 mt-3 mb-3 d-flex justify-content-center"
                >
                  <Card style={{ border: '10px' }}>
                    <Card.Body>
                      <Image
                        src={card.icon}
                        style={{
                          width: '15%',
                          marginTop: '-21px',
                          marginBottom: '20px'
                        }}
                        className="card-img-top"
                        alt=""
                      />
                      <Card.Text>
                        <strong>{card.strong}</strong>
                        <br />
                        {card.descripcion}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
            <Row
              className="mt-5"
              style={{ justifyContent: 'center', marginBottom: '13%' }}
            >
              {helpcardstwo.map((card, index) => (
                <Col
                  key={index}
                  className=" col-4 d-flex justify-content-center"
                >
                  <Card style={{ border: '10px' }}>
                    <Card.Body>
                      <Image
                        src={card.icon}
                        style={{
                          width: '15%',
                          marginTop: '-21px',
                          marginBottom: '20px'
                        }}
                        className="card-img-top"
                        alt=""
                      />
                      <Card.Text>
                        <strong>{card.strong}</strong>
                        <br />
                        {card.descripcion}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        </Container>
      </Container>
      <div id="carousel-mobile" className="d-block d-md-none pt-2">
        <Carousel
          controls={false}
          indicators
          interval={null}
          touch={true}
          className="pb-5 pt-5"
        >
          {helpcards.map((card, index) => (
            <Carousel.Item key={index} className="p-2 pt-5">
              <div
                className="cards-mobile mx-3"
                style={{
                  border: '10px',
                  paddingBottom: '20px',
                  height: '165px'
                }}
              >
                <Image
                  src={card.icon}
                  style={{
                    width: '15%',
                    marginTop: '-30px',
                    marginBottom: '20px'
                  }}
                  className="card-img-top"
                  alt=""
                />
                <div className="card-body">
                  <p className="card-text fs-6" id="card-descripcion">
                    <strong>{card.strong}</strong>
                    <br />
                    {card.descripcion}
                  </p>
                </div>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </>
  )
}
