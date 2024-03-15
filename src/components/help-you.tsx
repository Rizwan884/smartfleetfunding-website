import Image from 'next/image'
import { Container, Row } from 'react-bootstrap'
import Dropdown from 'react-bootstrap/Dropdown'
import { useI18nProvider } from '@/context/I18nProvider'
export default function HelpYou() {
  return (
    <>
      <Container className="mt-6 pt-5 font-montserrat">
        <h1 className="fw-bold fs-2 mb-0 mx-4 w-75">How we help you</h1>
        <div className="line mt-0 mx-4 mt-1 w-3"></div>
        <div className="container d-flex flex-column pt-5">
          <Row className="m-2">
            <Image
              alt="img"
              width={200}
              height={270}
              src="/images/sff-fb-rule.svg"
            ></Image>
          </Row>
        </div>
        <div className="row pb-5">
          <div className="col-6 d-flex  justify-content-end h-100">
            {' '}
            <div className="card w-20rem me-5 d-md-block d-none">
              <div className="card-body">
                <h5 className="card-title fs-4 text-start fw-bold">
                  On Attraction & Retention
                </h5>
                <div className="line-programs"></div>
                <div className="d-flex mb-4 lh-sm align-items-center gap-2 line-programs ">
                  <Image
                    width={20}
                    height={20}
                    className="mt-14"
                    src="/images/sff-fb-arrow-right.svg"
                    alt="testimonial-img"
                  ></Image>
                  <div>
                    <p className="ms-2 mt-3 fs-5 fw-500 text-start">
                      Becoming more attractive to carriers.
                    </p>
                  </div>
                </div>
                <div className="d-flex mb-4 lh-sm align-items-center gap-2 line-programs ">
                  <Image
                    width={20}
                    height={20}
                    className="mt-50"
                    src="/images/sff-fb-arrow-right.svg"
                    alt="testimonial-img"
                  ></Image>
                  <div className="mt-2">
                    <p className="ms-2 fs-5 fw-500 text-start">
                      Carriers won’t worry about their cash flow to operate.
                    </p>
                  </div>
                </div>
                <div className="d-flex mb-1 lh-sm align-items-center gap-2">
                  <Image
                    width={20}
                    height={20}
                    className="mt-34"
                    src="/images/sff-fb-arrow-right.svg"
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
            <Dropdown className="row mx-3 flex-column d-lg-none">
              <Dropdown.Toggle variant="light" id="dropdown-basic">
                <h5 className="card-title fs-6 text-start fw-bold">
                  On Attraction & <br /> Retention
                </h5>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">
                  <div className="d-flex mb-4 lh-sm align-items-center gap-2 line-programs">
                    <Image
                      width={20}
                      height={20}
                      className="mt-14"
                      src="/images/sff-fb-arrow-right.svg"
                      alt="testimonial-img"
                    ></Image>
                    <div>
                      <p className="ms-2 mt-3 fs-6 fw-30 text-start">
                        Becoming <br /> more <br /> attractive to <br />{' '}
                        carriers.
                      </p>
                    </div>
                  </div>
                </Dropdown.Item>
                <Dropdown.Item href="#/action-2">
                  <div className="d-flex mb-4 lh-sm align-items-center gap-2 line-programs">
                    <Image
                      width={20}
                      height={20}
                      className="mt-14"
                      src="/images/sff-fb-arrow-right.svg"
                      alt="testimonial-img"
                    ></Image>
                    <div>
                      <p className="ms-2 mt-3 fs-6 fw-30 text-start">
                        Carriers <br /> won’t worry <br /> about their <br />{' '}
                        cash flow <br /> to operate.
                      </p>
                    </div>
                  </div>
                </Dropdown.Item>
                <Dropdown.Item href="#/action-3">
                  <div className="d-flex mb-4 lh-sm align-items-center gap-2 line-programs ">
                    <Image
                      width={20}
                      height={20}
                      className="mt-14"
                      src="/images/sff-fb-arrow-right.svg"
                      alt="testimonial-img"
                    ></Image>
                    <div>
                      <p className="ms-2 mt-3 fs-6 fw-30 text-start">
                        Carriers <br /> won’t need <br /> to make <br />{' '}
                        collection <br /> calls.
                      </p>
                    </div>
                  </div>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>

          <div className="col-6 d-flex  justify-content-end h-100 ">
            {' '}
            <div className="card w-20rem d-md-block d-none">
              <div className="card-body">
                <h5 className="card-title fs-4 text-start fw-bold">
                  Handling AR/AP <br /> Needs
                </h5>
                <div className="line-programs"></div>
                <div className="d-flex mb-4 lh-sm align-items-center gap-2 line-programs ">
                  <Image
                    width={20}
                    height={20}
                    className="mt-50"
                    src="/images/sff-fb-arrow-right.svg"
                    alt="testimonial-img"
                  ></Image>
                  <div>
                    <p className="ms-2 mt-3 fs-5 fw-500 text-start">
                      Receiving collection calls from carriers and other debt
                      collectors.
                    </p>
                  </div>
                </div>
                <div className="d-flex mb-4 lh-sm align-items-center gap-2 line-programs ">
                  <Image
                    width={20}
                    height={20}
                    className="mt-34"
                    src="/images/sff-fb-arrow-right.svg"
                    alt="testimonial-img"
                  ></Image>
                  <div className="mt-2">
                    <p className="ms-2 fs-5 fw-500 text-start">
                      Making collection calls to clients.
                    </p>
                  </div>
                </div>
                <div className="d-flex mb-1 lh-sm align-items-center gap-2 line-programs">
                  <Image
                    width={20}
                    height={20}
                    className="mt-34"
                    src="/images/sff-fb-arrow-right.svg"
                    alt="testimonial-img"
                  ></Image>
                  <div className="mt-2">
                    <p className="ms-2 fs-5 fw-500 text-start">
                      Handling AR/AP documentation.
                    </p>
                  </div>
                </div>
                <div className="d-flex mb-1 lh-sm align-items-center gap-2">
                  <Image
                    width={20}
                    height={20}
                    className="mt-34"
                    src="/images/sff-fb-arrow-right.svg"
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
            <Dropdown className="row  mx-4 flex-column ml-4 d-lg-none">
              <Dropdown.Toggle variant="light" id="dropdown-basic">
                <h5 className="card-title fs-6 text-start fw-bold">
                  Handling AR/AP <br /> Needs
                </h5>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">
                  <div className="d-flex mb-4 lh-sm align-items-center gap-2 line-programs ">
                    <Image
                      width={20}
                      height={20}
                      className="mt-14"
                      src="/images/sff-fb-arrow-right.svg"
                      alt="testimonial-img"
                    ></Image>
                    <div>
                      <p className="ms-2 mt-3 fs-6 fw-30 text-start">
                        Receiving <br /> collection <br /> calls from <br />{' '}
                        carriers and <br /> other debt <br />
                        collectors.
                      </p>
                    </div>
                  </div>
                </Dropdown.Item>
                <Dropdown.Item href="#/action-2">
                  <div className="d-flex mb-4 lh-sm align-items-center gap-2 line-programs ">
                    <Image
                      width={20}
                      height={20}
                      className="mt-14"
                      src="/images/sff-fb-arrow-right.svg"
                      alt="testimonial-img"
                    ></Image>
                    <div>
                      <p className="ms-2 mt-3 fs-6 fw-30 text-start">
                        Making <br /> collection <br /> calls to <br /> clients.
                      </p>
                    </div>
                  </div>
                </Dropdown.Item>
                <Dropdown.Item href="#/action-3">
                  <div className="d-flex mb-4 lh-sm align-items-center gap-2 line-programs ">
                    <Image
                      width={20}
                      height={20}
                      className="mt-14"
                      src="/images/sff-fb-arrow-right.svg"
                      alt="testimonial-img"
                    ></Image>
                    <div>
                      <p className="ms-2 mt-3 fs-6 fw-30 text-start">
                        Handling <br /> AR/AP <br /> documentati <br /> on.
                      </p>
                    </div>
                  </div>
                </Dropdown.Item>
                <Dropdown.Item href="#/action-3">
                  <div className="d-flex mb-4 lh-sm align-items-center gap-2 line-programs ">
                    <Image
                      width={20}
                      height={20}
                      className="mt-14"
                      src="/images/sff-fb-arrow-right.svg"
                      alt="testimonial-img"
                    ></Image>
                    <div>
                      <p className="ms-2 mt-3 fs-6 fw-30 text-start">
                        Stay on top <br /> of the <br /> company’s <br /> cash
                        flow.
                      </p>
                    </div>
                  </div>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      </Container>
    </>
  )
}
