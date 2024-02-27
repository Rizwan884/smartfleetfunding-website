import { Col, Container, Row, Carousel } from "react-bootstrap";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";
export default function Provides() {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return (
    <>
      <div className="container mt-7 pb-5 font-montserrat">
        <div className="d-flex flex-column align-items-center">
          <div className="line width-bf fw-600 mb-2 ms-3 align-item-center"></div>
          <h1 className="fw-600 fs-2 text-center  flex  align-items-center gap-3">
            What we provide
          </h1>
        </div>
      </div>
      {isMobile ? (
        <Row className="font-montserrat mx-0 px-0 px-md-auto mx-md-auto">
          <Col>
            <Carousel id="provider-carrusel" className="w-100" fade>
              <Carousel.Item>
                <div className="container d-flex flex-column bg-white-shadow w-65 h-100">
                  <Row className="m-2">
                    <div>
                      <h1 id="hover" className="fw-bold fs-3 mb-2 mt-2 w-75 ">
                        {" "}
                        <span className="sub-line">For</span> you
                      </h1>
                    </div>
                    <div className="d-flex mb-4 lh-sm align-items-center gap-2 line-programs ">
                      <div>
                        <p className="ms-2 mt-3 fs-6 fw-500 w-100">
                          Instant access to your profits{" "}
                          <strong className="fst-italic">
                            (Customer Invoice less Carrier Invoice.)
                          </strong>
                        </p>
                      </div>
                    </div>
                    <div className="d-flex mb-4 lh-sm align-items-center gap-2 line-programs ">
                      <div className="mt-2">
                        <p className="ms-2 fs-6 fw-500 w-100">
                          Peace of mind by streamlining your AP to carriers.
                        </p>
                      </div>
                    </div>
                    <div className="d-flex mb-1 lh-sm align-items-center gap-2 line-programs">
                      <div className="mt-2">
                        <p className="ms-2 fs-6 fw-500 w-100">
                          Quick payment to your carriers (12 business hours.)
                        </p>
                      </div>
                    </div>
                    <div className="d-flex mb-4 lh-sm align-items-center gap-2">
                      <div className="">
                        <p className="ms-2 mt-4 fs-6 fw-500 w-100">
                          Time to focus on growing your business by letting us
                          handle your accounts receivable.
                        </p>
                      </div>
                    </div>
                  </Row>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="container d-flex flex-column bg-white-shadow w-65 h-100">
                  <Row className="m-2">
                    <div>
                      <h1 id="hover" className="fw-bold fs-3 mb-2 mt-2 w-75 ">
                        {" "}
                        <span className="sub-line">For</span> your carriers
                      </h1>
                    </div>
                    <div className="d-flex mb-4 lh-sm align-items-center gap-2 line-programs ">
                      <div>
                        <p className="ms-2 mt-4 fs-6 fw-500 w-100">
                          Access to immediate capital for their cash flow needs.
                        </p>
                      </div>
                    </div>
                    <div className="d-flex mb-4 lh-sm align-items-center gap-2 line-programs ">
                      <div className="mt-2">
                        <p className="ms-2 fs-6 fw-500 w-100">
                          Efficiency by taking away their burden of invoice
                          collection and follow ups.
                        </p>
                      </div>
                    </div>
                    <div className="d-flex mb-4 lh-sm align-items-center gap-2">
                      <div className="mt-2">
                        <p className="ms-2 fs-6 fw-500 w-100">
                          Access to discounts and payment programs in key
                          suppliers because they work with you.
                        </p>
                      </div>
                    </div>
                  </Row>
                </div>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      ) : (
        <Container className="font-montserrat h-100">
          <div className="row font-montserrat">
            <div className="col">
              <div className="container d-flex flex-column bg-white-shadow w-65 h-100">
                <Row className="m-2">
                  <div>
                    <h1 id="hover" className="fw-bold fs-3 mb-2 mt-2 w-75 ">
                      {" "}
                      <span className="sub-line">For</span> you
                    </h1>
                  </div>
                  <div className="d-flex mb-4 lh-sm align-items-center gap-2 line-programs ">
                    <Image
                      width={20}
                      height={20}
                      className="mt-40"
                      src="images/sff-fb-arrow-right-blue.svg"
                      alt="testimonial-img"
                    ></Image>
                    <div>
                      <p className="ms-2 mt-3 fs-5 fw-500">
                        Instant access to your profits <br />
                        <strong className="fst-italic">
                          (Customer Invoice less Carrier Invoice.)
                        </strong>
                      </p>
                    </div>
                  </div>
                  <div className="d-flex mb-4 lh-sm align-items-center gap-2 line-programs ">
                    <Image
                      width={20}
                      height={20}
                      className="mt-34"
                      src="images/sff-fb-arrow-right-blue.svg"
                      alt="testimonial-img"
                    ></Image>
                    <div className="mt-2">
                      <p className="ms-2 fs-5 fw-500">
                        Peace of mind by streamlining <br /> your AP to
                        carriers.
                      </p>
                    </div>
                  </div>
                  <div className="d-flex mb-1 lh-sm align-items-center gap-2 line-programs">
                    <Image
                      width={20}
                      height={20}
                      className="mt-34"
                      src="images/sff-fb-arrow-right-blue.svg"
                      alt="testimonial-img"
                    ></Image>
                    <div className="mt-2">
                      <p className="ms-2 fs-5 fw-500">
                        Quick payment to your carriers <br /> (12 business
                        hours.)
                      </p>
                    </div>
                  </div>
                  <div className="d-flex mb-4 lh-sm align-items-center gap-2">
                    <Image
                      width={20}
                      height={20}
                      className="mt-40"
                      src="images/sff-fb-arrow-right-blue.svg"
                      alt="testimonial-img"
                    ></Image>
                    <div className="">
                      <p className="ms-2 mt-4 fs-5 fw-500 ">
                        Time to focus on growing your <br /> business by letting
                        us handle <br /> your accounts receivable.
                      </p>
                    </div>
                  </div>
                </Row>
              </div>
            </div>
            <div className="col">
              {" "}
              <div className="container d-flex flex-column bg-white-shadow w-65 h-100">
                <Row className="m-2">
                  <div>
                    <h1 id="hover" className="fw-bold fs-3 mb-2 mt-2 w-75 ">
                      {" "}
                      <span className="sub-line">For</span> your carriers
                    </h1>
                  </div>
                  <div className="d-flex mb-4 lh-sm align-items-center gap-2 line-programs ">
                    <Image
                      width={20}
                      height={20}
                      className="mt-14"
                      src="images/sff-fb-arrow-right-blue.svg"
                      alt="testimonial-img"
                    ></Image>
                    <div>
                      <p className="ms-2 mt-4 fs-5 fw-500">
                        Access to immediate capital for their cash flow needs.
                      </p>
                    </div>
                  </div>
                  <div className="d-flex mb-4 lh-sm align-items-center gap-2 line-programs ">
                    <Image
                      width={20}
                      height={20}
                      className="mt-50"
                      src="images/sff-fb-arrow-right-blue.svg"
                      alt="testimonial-img"
                    ></Image>
                    <div className="mt-2">
                      <p className="ms-2 fs-5 fw-500">
                        Efficiency by taking away their burden of invoice
                        collection and follow ups.
                      </p>
                    </div>
                  </div>
                  <div className="d-flex mb-4 lh-sm align-items-center gap-2">
                    <Image
                      width={20}
                      height={20}
                      className="mt-94"
                      src="images/sff-fb-arrow-right-blue.svg"
                      alt="testimonial-img"
                    ></Image>
                    <div className="mt-2">
                      <p className="ms-2 fs-5 fw-500">
                        Access to discounts and payment programs in key
                        suppliers because they work with you.
                      </p>
                    </div>
                  </div>
                </Row>
              </div>
            </div>
          </div>
        </Container>
      )}
    </>
  );
}
