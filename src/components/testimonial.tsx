import React from "react";
import { Carousel, Card, Container, Row, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";
const TestimonialCarousel = () => {
  const testimonials = [
    {
      text: "Lorem Ipsum dolorsit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure.",
      author: "Mark Tremblay",
      position: "Ayudame Diomio",
      image: "images/sff-ttm-mark.svg",
    },
    {
      text: "Lorem Ipsum dolorsit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure.",
      author: "William Tremblay",
      position: "CTO, Another Company",
      image: "images/sff-ttm-william.svg",
    },
    {
      text: "Lorem Ipsum dolorsit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure.",
      author: "Keneth Brown",
      position: "COO, Third Company",
      image: "images/sff-ttm-keneth.svg",
    },
    {
      text: "Lorem Ipsum dolorsit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure.",
      author: "Bob Brown",
      position: "CTO, Fourth Company",
      image: "images/sff-ttm-mark.svg",
    },
    {
      text: "Lorem Ipsum dolorsit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure.",
      author: "Eva Johnson",
      position: "CMO, Fifth Company",
      image: "images/sff-ttm-william.svg",
    },
    {
      text: "Lorem Ipsum dolorsit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure.",
      author: "Alex Rodriguez",
      position: "CTO, Sixth Company",
      image: "images/sff-ttm-keneth.svg",
    },
  ];

  return (
    <>
      <Carousel
        id="testimonial"
        style={{ marginTop: "100px", overflow: "visible" }}
        indicators={false}
      >
        {testimonials.map((testimonial, index) =>
          index % 3 === 0 ? (
            <Carousel.Item key={index}>
              <Container>
                <Row>
                  {testimonials
                    .slice(index, index + 3) // Cambiado a slice(index, index + 4)
                    .map((item, innerIndex) => (
                      <Col key={innerIndex}>
                        <Card style={{ border: "10px" }}>
                          <Card.Body>
                            <Card.Text className="fs-6 text-start lh-sm">
                              {item.text}
                            </Card.Text>
                            <div className="d-flex align-items-center gap-2 ">
                              <Image
                                src={item.image}
                                alt="testimonial-img"
                              ></Image>
                              <div className="mt-4">
                                <Card.Title className=" text-start ms-2">
                                  {item.author}
                                </Card.Title>
                                <Card.Subtitle className="text-start ms-2 fw-light">
                                  {item.position}
                                  <form id={`stars-${index}-${innerIndex}`}>
                                    {/* Agregar un identificador único para cada grupo de estrellas */}
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
          ) : null
        )}
      </Carousel>
    </>
  );
};

export default TestimonialCarousel;
