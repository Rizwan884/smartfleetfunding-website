import { useI18nProvider } from '@/context/I18nProvider'
import React from 'react'
import { Card, Carousel, Col, Container, Row } from 'react-bootstrap'
import Image from 'react-bootstrap/Image'

const TestimonialCarousel = () => {
  const { t } = useI18nProvider()
  const testimonials = t.fullcard.testimonials

  return (
    <>
      <Carousel
        id="testimonial"
        className="h-100 pb-2"
        style={{ marginTop: '100px', overflow: 'hidden' }}
        controls={true}
        interval={5000}
      >
        {Array.from({ length: Math.ceil(testimonials.length / 3) }).map(
          (group, groupIndex) => (
            <Carousel.Item key={groupIndex}>
              <Container>
                <Row className="d-none d-md-flex">
                  {testimonials
                    .slice(groupIndex * 3, groupIndex * 3 + 3)
                    .map((item, innerIndex) => (
                      <Col key={groupIndex * 3 + innerIndex} md={4}>
                        <Card
                          className="w-100 h-100"
                          style={{ border: '10px' }}
                        >
                          <Card.Body>
                            <Card.Text className="fs-6 text-start lh-sm">
                              {item.title}
                            </Card.Text>
                            <div className="d-flex align-items-center gap-2">
                              <Image
                                src={item.image}
                                alt="testimonial-img"
                                className="img-fluid"
                                style={{ maxWidth: '100%', height: 'auto' }}
                              />
                              <div className="mt-4">
                                <Card.Title className="text-start ms-2">
                                  <div className="fs-6">{item.author}</div>
                                </Card.Title>
                                <Card.Subtitle className="text-start ms-2 fw-light">
                                  <div className="fs-6">{item.position}</div>
                                  <form
                                    id={`stars-${groupIndex * 3 + innerIndex}`}
                                  >
                                    <p className="clasificacion text-start">
                                      {[1, 2, 3, 4, 5].map((star) => (
                                        <React.Fragment key={star}>
                                          <input
                                            id={`radio${star}-${
                                              groupIndex * 3 + innerIndex
                                            }`}
                                            type="radio"
                                            name={`estrellas-${
                                              groupIndex * 3 + innerIndex
                                            }`}
                                            value={star}
                                            checked={star === 1}
                                          />
                                          <label
                                            htmlFor={`radio${star}-${
                                              groupIndex * 3 + innerIndex
                                            }`}
                                          >
                                            ★
                                          </label>
                                        </React.Fragment>
                                      ))}
                                    </p>
                                  </form>
                                </Card.Subtitle>
                              </div>
                            </div>
                          </Card.Body>
                        </Card>
                      </Col>
                    ))}
                </Row>
                <Row className="d-md-none">
                  {testimonials
                    .slice(groupIndex * 3, groupIndex * 3 + 1)
                    .map((item, innerIndex) => (
                      <Col key={groupIndex * 3 + innerIndex} xs={12}>
                        <Card className="w-75 mx-5" style={{ border: '10px' }}>
                          <Card.Body>
                            <Card.Text className="fs-6 text-start lh-sm">
                            <h3>{item.title}</h3>
                            </Card.Text>
                            <Card.Text className="fs-6 text-start lh-sm">
                              {item.descripcion}
                            </Card.Text>
                            <div className="d-flex align-items-center gap-2">
                              <Image
                                src={item.image}
                                alt="testimonial-img"
                                className="img-fluid"
                                style={{ maxWidth: '100%', height: 'auto' }}
                              />
                              <div className="mt-4">
                                <Card.Title className="text-start ms-2">
                                  {item.author}
                                </Card.Title>
                                <Card.Subtitle className="text-start ms-2 fw-light">
                                  {item.position}
                                  <form
                                    id={`stars-${groupIndex * 3 + innerIndex}`}
                                  >
                                    <p className="clasificacion text-start">
                                      {[1, 2, 3, 4, 5].map((star) => (
                                        <React.Fragment key={star}>
                                          <input
                                            id={`radio${star}-${
                                              groupIndex * 3 + innerIndex
                                            }`}
                                            type="radio"
                                            name={`estrellas-${
                                              groupIndex * 3 + innerIndex
                                            }`}
                                            value={star}
                                            checked={star === 2}
                                          />
                                          <label
                                            htmlFor={`radio${star}-${
                                              groupIndex * 3 + innerIndex
                                            }`}
                                          >
                                            ★
                                          </label>
                                        </React.Fragment>
                                      ))}
                                    </p>
                                  </form>
                                </Card.Subtitle>
                              </div>
                            </div>
                          </Card.Body>
                        </Card>
                      </Col>
                    ))}
                </Row>
              </Container>
            </Carousel.Item>
          )
        )}
      </Carousel>

    </>
  )
}

export default TestimonialCarousel
