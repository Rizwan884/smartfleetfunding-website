import React from "react";
import { Carousel, Card, Container, Row, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";
const TestimonialCarousel = () => {
  const testimonials = [
    {
      text: (
        <>
          Good experience
          <br />
          Very easy and nice people to deal with very pleased.
        </>
      ),
      author: "Alfred's Refrigerated Transport",
      position: "Date of experience: November 20, 2023",
      image: "images/sff-ttm-mark.svg",
    },
    {
      text: (
        <>
          Good Customer Service and Quick payment.
          <br />
          Good Customer Service and Quick payment processing
        </>
      ),
      author: "Sdl Freight Systems - CAD",
      position: "Date of experience: November 20, 2023",
      image: "images/sff-ttm-mark.svg",
    },
    {
      text: (
        <>
          PAYMENT
          <br />
          ONTIME PAYMENT EVERY TIME
        </>
      ),
      author: "Net Freight System Inc – CAD",
      position: "Date of experience: November 01, 2023",
      image: "images/sff-ttm-keneth.svg",
    },
    {
      text: "Piola mad this exsprence fantastic.",
      author: "DS cooperation",
      position: "Date of experience: December 20, 2023",
      image: "images/sff-ttm-mark.svg",
    },
    {
      text: (
        <>
          Great​
          <br />
          Great, thank you very much.
        </>
      ),
      author: "Bronpe LLC",
      position: "Date of experience: January 11, 2024",
      image: "images/sff-ttm-william.svg",
    },
    {
      text: (
        <>
          They are pretty fast in paying​
          <br />
          They are pretty fast in paying , totally recommend.
        </>
      ),
      author: "Tata Logistics Ltd",
      position: "Date of experience: November 22, 2023",
      image: "images/sff-ttm-keneth.svg",
    },
    {
      text: "Having very quick response for payment",
      author: "Supersonic Transport Ltd",
      position: "Date of experience: December 18, 2023",
      image: "images/sff-ttm-mark.svg",
    },
    {
      text: (
        <>
          GOOD JOB FOR ONTIME PAYMENT​
          <br />
          GOOD JOB FOR ONTIME PAYMENT. NEED TO DECREASE PERCENTAGE TO LOWER
          RATE.
        </>
      ),
      author: "Masab Logistics Inc – CAD",
      position: "Date of experience: November 13, 2023",
      image: "images/sff-ttm-keneth.svg",
    },
    {
      text: (
        <>
          Good company , fast payments​
          <br />
          Fast payments
        </>
      ),
      author: "Pr Transport",
      position: "Date of experience: January 11, 2024",
      image: "images/sff-ttm-keneth.svg",
    },
    {
      text: (
        <>
          I WOULD USE THIS PAYMENT SYSTEM AGAIN
          <br />
          Turned all the paperwork in as needed on a Sunday.​ on Monday morning
          I received an email that paperwork was accepted. Tuesday around 3 pm
          the funds hit my account.
          <br />
          Great job​ Great results
        </>
      ),
      author: "C-Level Trucking LLC",
      position: "Date of experience: November 07, 2023",
      image: "images/sff-ttm-mark.svg",
    },
    {
      text: (
        <>
          Fast and Easy
          <br />
          We{"'"}ve had a lot of issues with TAFS and were highly satisfied and
          surprised with the fast service with Smart Fleet. We appreciated the
          clear instructions, communication and fast pay.
        </>
      ),
      author: "Anonymous Hot Shot",
      position: "Date of experience: November 16, 2023",
      image: "images/sff-ttm-mark.svg",
    },
  ];

  return (
    <>
      <Carousel
        id="testimonial"
        className="h-100 pb-2"
        style={{ marginTop: "100px", overflow: "hidden" }}
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
                          style={{ border: "10px" }}
                        >
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
  );
};

export default TestimonialCarousel;
