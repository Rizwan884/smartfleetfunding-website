import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";
export default function HelpYou() {
  return (
    <>
      <Container className="mt-6 pt-5 font-montserrat">
        <h1 className="fw-bold fs-2 mb-0 mx-4 w-75">How we help you</h1>
        <div className="line mt-0 mx-4 mt-1 w-3"></div>
        <div className="container d-flex flex-column">
          <Row className="m-2">
            <Image
              alt="img"
              width={200}
              height={300}
              src="images/sff-fb-rule.svg"
            ></Image>
          </Row>
        </div>
        <div className="row">
          <div className="col d-flex justify-content-end h-100">
            {" "}
            <div className="card w-20rem">
              <div className="card-body">
                <h5 className="card-title fs-2 text-start fw-bold">
                  On Attraction & Retention
                </h5>
                <div className="line-programs"></div>
                <div className="d-flex mb-4 align-items-center gap-2 line-programs ">
                  <Image
                    width={20}
                    height={20}
                    className="mt-54"
                    src="images/sff-fb-arrow-right.svg"
                    alt="testimonial-img"
                  ></Image>
                  <div>
                    <p className="ms-2 mt-3 fs-5 fw-500 text-start">
                      Becoming more attractive to carriers.
                    </p>
                  </div>
                </div>
                <div className="d-flex mb-4 align-items-center gap-2 line-programs ">
                  <Image
                    width={20}
                    height={20}
                    className="mt-34"
                    src="images/sff-fb-arrow-right.svg"
                    alt="testimonial-img"
                  ></Image>
                  <div className="mt-2">
                    <p className="ms-2 fs-5 fw-500 text-start">
                      Carriers won’t worry about their cash flow to operate.
                    </p>
                  </div>
                </div>
                <div className="d-flex mb-1 align-items-center gap-2 line-programs">
                  <Image
                    width={20}
                    height={20}
                    className="mt-34"
                    src="images/sff-fb-arrow-right.svg"
                    alt="testimonial-img"
                  ></Image>
                  <div className="mt-2">
                    <p className="ms-2 fs-5 fw-500 text-start">
                      Carriers won’t need to make collection calls.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col d-flex justify-content-end h-100">
            {" "}
            <div className="card w-20rem">
              <div className="card-body">
                <h5 className="card-title fs-3 text-start fw-bold">
                  Handling AR/AP Needs
                </h5>
                <div className="line-programs"></div>
                <div className="d-flex mb-4 align-items-center gap-2 line-programs ">
                  <Image
                    width={20}
                    height={20}
                    className="mt-54"
                    src="images/sff-fb-arrow-right.svg"
                    alt="testimonial-img"
                  ></Image>
                  <div>
                    <p className="ms-2 mt-3 fs-6 fw-500 text-start">
                      Receiving collection calls from carriers and other debt
                      collectors.
                    </p>
                  </div>
                </div>
                <div className="d-flex mb-4 align-items-center gap-2 line-programs ">
                  <Image
                    width={20}
                    height={20}
                    className="mt-34"
                    src="images/sff-fb-arrow-right.svg"
                    alt="testimonial-img"
                  ></Image>
                  <div className="mt-2">
                    <p className="ms-2 fs-5 fw-500 text-start">
                      Making collection calls to clients.
                    </p>
                  </div>
                </div>
                <div className="d-flex mb-1 align-items-center gap-2 line-programs">
                  <Image
                    width={20}
                    height={20}
                    className="mt-34"
                    src="images/sff-fb-arrow-right.svg"
                    alt="testimonial-img"
                  ></Image>
                  <div className="mt-2">
                    <p className="ms-2 fs-5 fw-500 text-start">
                      Handling AR/AP documentation.
                    </p>
                  </div>
                </div>
                <div className="d-flex mb-1 align-items-center gap-2 line-programs">
                  <Image
                    width={20}
                    height={20}
                    className="mt-34"
                    src="images/sff-fb-arrow-right.svg"
                    alt="testimonial-img"
                  ></Image>
                  <div className="mt-2">
                    <p className="ms-2 fs-5 fw-500 text-start">
                      Stay on top of the company’s cash flow.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
