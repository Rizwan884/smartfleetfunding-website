import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";
export default function Programs() {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return (
    <>
      {isMobile ? (
        <section className="py-5 bg-white-shadow font-montserrat">
          <Container>
            <h1 className="fw-bold fs-2 mb-0 mx-4 w-100">
              Your outcomes by joining our Freight Broker program
            </h1>
            <div className="line-program mt-0 mx-4 mt-1 w-3"></div>
            <div className="container d-flex flex-column">
              <Row className="m-2">
                <div className="d-flex mb-4 align-items-center gap-2 line-programs ">
                  <div className="mt-5">
                    <h1 className="ms-2 mt-4 fs-5 fw-600">
                      Additional time to focus on your core business.
                    </h1>
                    <ul className="fs-5">
                      <li>
                        Minimizing or even eliminating your company’s dedication
                        to Accounts Receivable and Accounts Payable.
                      </li>
                      <li>
                        Decrease the number of follow up calls to get paid and
                        incoming calls from carriers and factoring companies
                        about their payments.
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="d-flex mb-4 align-items-center gap-2 line-programs ">
                  <div className="mt-2">
                    <h1 className="ms-2 fs-5 fw-600">
                      Access to reduced cost of capital & operation.
                    </h1>
                  </div>
                </div>
                <div className="d-flex mb-4 align-items-center gap-2 line-programs">
                  <div className="mt-2">
                    <h1 className="ms-2 fs-5 fw-600">
                      Position your company at the same level of the biggest
                      brokers in North America by offering Quick Payments.
                    </h1>
                  </div>
                </div>
                <div className="d-flex mb-4 align-items-center gap-2 line-programs">
                  <div className="mt-2">
                    <h1 className="ms-2 fs-5 fw-600">
                      More carriers wishing to work for you.
                    </h1>
                  </div>
                </div>
              </Row>
            </div>
          </Container>
        </section>
      ) : (
        <section className="py-5 bg-white-shadow font-montserrat">
          <Container>
            <h1 className="fw-bold fs-2 mb-0 mx-4 w-75">
              Your outcomes by joining our <br /> Freight Broker program
            </h1>
            <div className="line-program mt-0 mx-4 mt-1 w-3"></div>
            <div className="container d-flex flex-column">
              <Row className="m-2">
                <div className="d-flex mb-4 align-items-center gap-2 line-programs ">
                  <Image
                    width={20}
                    height={20}
                    className="mt-34"
                    src="images/sff-fb-arrow-right.svg"
                    alt="testimonial-img"
                  ></Image>
                  <div className="mt-5">
                    <h1 className="ms-2 mt-4 fs-5 fw-600">
                      Additional time to focus on your core business.
                    </h1>
                    <ul className="fs-5">
                      <li>
                        Minimizing or even eliminating your company’s dedication
                        to Accounts Receivable and Accounts Payable.
                      </li>
                      <li>
                        Decrease the number of follow up calls to get paid and
                        incoming calls from carriers and factoring companies
                        about their payments.
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="d-flex mb-4 align-items-center gap-2 line-programs ">
                  <Image
                    width={20}
                    height={20}
                    src="images/sff-fb-arrow-right.svg"
                    alt="testimonial-img"
                  ></Image>
                  <div className="mt-2">
                    <h1 className="ms-2 fs-5 fw-600">
                      Access to reduced cost of capital & operation.
                    </h1>
                  </div>
                </div>
                <div className="d-flex mb-4 align-items-center gap-2 line-programs">
                  <Image
                    width={20}
                    height={20}
                    src="images/sff-fb-arrow-right.svg"
                    alt="testimonial-img"
                  ></Image>
                  <div className="mt-2">
                    <h1 className="ms-2 fs-5 fw-600">
                      Position your company at the same level of the biggest
                      brokers in North America by offering Quick Payments.
                    </h1>
                  </div>
                </div>
                <div className="d-flex mb-4 align-items-center gap-2 line-programs">
                  <Image
                    width={20}
                    height={20}
                    src="images/sff-fb-arrow-right.svg"
                    alt="testimonial-img"
                  ></Image>
                  <div className="mt-2">
                    <h1 className="ms-2 fs-5 fw-600">
                      More carriers wishing to work for you.
                    </h1>
                  </div>
                </div>
              </Row>
            </div>
          </Container>
        </section>
      )}
    </>
  );
}
