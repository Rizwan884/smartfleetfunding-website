import React from "react";
import { Carousel, Card, Container, Row, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";
const TestimonialCarousel = () => {
  const testimonials = [
    {
      text: "Lorem Ipsum dolorsit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat...",
      author: "Mark Tremblay",
      position: "CTO",
      image: "images/sff-ttm-mark.svg",
    },
    {
      text: "Lorem Ipsum dolorsit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat...",
      author: "William Tremblay",
      position: "CTO, Another Company",
      image: "images/sff-ttm-william.svg",
    },
    {
      text: "Lorem Ipsum dolorsit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat...",
      author: "Keneth Brown",
      position: "COO, Third Company",
      image: "images/sff-ttm-keneth.svg",
    },
    {
      text: "Lorem Ipsum dolorsit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat...",
      author: "Bob Brown",
      position: "CTO, Fourth Company",
      image: "images/sff-ttm-mark.svg",
    },
    {
      text: "Lorem Ipsum dolorsit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat...",
      author: "Eva Johnson",
      position: "CMO, Fifth Company",
      image: "images/sff-ttm-william.svg",
    },
    {
      text: "Lorem Ipsum dolorsit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat...",
      author: "Alex Rodriguez",
      position: "CTO, Sixth Company",
      image: "images/sff-ttm-keneth.svg",
    },
  ];

  return (
    <>
      <Carousel
        id="testimonial"
        className="h-100 pb-2"
        style={{ marginTop: "100px", overflow: "hidden" }}
        indicators={true}
        interval={5000}
      >
        {testimonials.map((testimonial, index) => (
          <Carousel.Item key={index}>
            <Container>
              <Row className="d-none d-md-flex">
                {testimonials
                  .slice(index, index + 3)
                  .map((item, innerIndex) => (
                    <Col key={innerIndex} md={4}>
                      <Card style={{ border: "10px" }}>
                        <Card.Body>
                          <Card.Text className="fs-6 text-start lh-sm">
                            {item.text}
                          </Card.Text>
                          <div className="d-flex align-items-center gap-2">
                            <Image
                              src={item.image}
                              alt="testimonial-img"
                              className="img-fluid"
                              style={{ maxWidth: "100%", height: "auto" }}
                            />
                            <div className="mt-4">
                              <Card.Title className="text-start ms-2">
                                {item.author}
                              </Card.Title>
                              <Card.Subtitle className="text-start ms-2 fw-light">
                                {item.position}
                                <form id={`stars-${index}-${innerIndex}`}>
                                  <p className="clasificacion text-start">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                      <React.Fragment key={star}>
                                        <input
                                          id={`radio${star}-${index}-${innerIndex}`}
                                          type="radio"
                                          name={`estrellas-${index}-${innerIndex}`}
                                          value={star}
                                        />
                                        <label
                                          htmlFor={`radio${star}-${index}-${innerIndex}`}
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
                  .slice(index, index + 1)
                  .map((item, innerIndex) => (
                    <Col key={innerIndex} xs={12}>
                      <Card className="w-75 mx-5" style={{ border: "10px" }}>
                        <Card.Body>
                          <Card.Text className="fs-6 text-start lh-sm">
                            {item.text}
                          </Card.Text>
                          <div className="d-flex align-items-center gap-2">
                            <Image
                              src={item.image}
                              alt="testimonial-img"
                              className="img-fluid"
                              style={{ maxWidth: "100%", height: "auto" }}
                            />
                            <div className="mt-4">
                              <Card.Title className="text-start ms-2">
                                {item.author}
                              </Card.Title>
                              <Card.Subtitle className="text-start ms-2 fw-light">
                                {item.position}
                                <form id={`stars-${index}-${innerIndex}`}>
                                  <p className="clasificacion text-start">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                      <React.Fragment key={star}>
                                        <input
                                          id={`radio${star}-${index}-${innerIndex}`}
                                          type="radio"
                                          name={`estrellas-${index}-${innerIndex}`}
                                          value={star}
                                        />
                                        <label
                                          htmlFor={`radio${star}-${index}-${innerIndex}`}
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
        ))}
      </Carousel>
    </>
  );
};

export default TestimonialCarousel;
