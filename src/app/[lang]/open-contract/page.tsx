'use client'

import HeroForm from '@/components/hero-form'
import { Col, Container, Image, Row } from 'react-bootstrap'
import Footer from '../../../components/footer'
import Navbar from '../../../components/navbar'

export default function OpenContract() {
  return (
    <>
      <Navbar isOpenContract={true} />
      <div className="bg-dark-blue py-5 font-montserrat min-vh-75 d-flex align-items-center">
        <Container>
          <Row className="g-5 align-items-center">
            <Col lg={7} className="text-white">
              <h1 className="display-3 fw-bold mb-4 lh-1">
                Factoring with a true{' '}
                <span className="text-green">open contract</span>
              </h1>
              <p className="lead opacity-75 mb-0">
                You stay because it works — not because a contract forces you
                to.
              </p>
            </Col>
            <Col lg={5}>
              <HeroForm />
            </Col>
          </Row>
        </Container>
      </div>

      <div className="font-montserrat bg-light py-5 py-lg-5 border-top">
        <Container>
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold text-dark-blue">
              Here&apos;s what a true open contract looks like
            </h2>
            <div
              className="mx-auto bg-green mt-3"
              style={{ width: '80px', height: '4px' }}
            ></div>
          </div>

          <Row className="g-4 mt-2">
            {[
              {
                title: 'No fixed term',
                desc: 'No 6-month minimum. No 12-month commitment.',
                icon: '/images/sff-hp-5.svg'
              },
              {
                title: 'No notice period',
                desc: 'You do not need to give 30, 60, or 90 days&apos; notice to leave.',
                icon: '/images/sff-hp-4.svg'
              },
              {
                title: 'No termination fees',
                desc: 'No exit fee. No buyout fee. No penalty of any kind.',
                icon: '/images/sff-hp-2.svg'
              },
              {
                title: 'No reserves',
                desc: 'We do not hold back a percentage of your money. What you earn is what you receive.',
                icon: '/images/sff-hp-3.svg'
              }
            ].map((item, i) => (
              <Col md={6} lg={3} key={i}>
                <div className="h-100 p-4 rounded-4 border border-light-subtle shadow-sm bg-white position-relative overflow-hidden">
                  <div
                    className="position-absolute top-0 start-0 h-100 bg-green opacity-10"
                    style={{ width: '4px' }}
                  ></div>
                  <div className="mb-3">
                    <Image
                      src={item.icon}
                      width={40}
                      height={40}
                      alt={item.title}
                    />
                  </div>
                  <h3 className="fs-6 fw-bold text-dark-blue mb-2 lh-sm">
                    {item.title}
                  </h3>
                  <p className="text-muted small mb-0 lh-sm">{item.desc}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>

      <div className="font-montserrat bg-white py-5 py-lg-5 border-top">
        <Container>
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold text-dark-blue">
              Built for carriers who are done with the usual factoring
              experience
            </h2>
            <div
              className="mx-auto bg-green mt-3"
              style={{ width: '80px', height: '4px' }}
            ></div>
          </div>

          <Row className="g-4 mt-2 justify-content-center">
            {[
              {
                title: 'Contracts that removed choice',
                desc: 'you were locked in, and leaving was expensive or slow. We removed that entirely.',
                icon: '/images/sff-hp-5.svg'
              },
              {
                title: 'Cash being held hostage',
                desc: 'reserves were withheld with no clear release timeline. We do not hold reserves. Period.',
                icon: '/images/sff-hp-3.svg'
              },
              {
                title: 'Silence when it mattered',
                desc: 'you called and nobody answered. Our phones and emails are answered during business hours by real people.',
                icon: '/images/sff-hp-1.svg'
              }
            ].map((item, i) => (
              <Col md={4} key={i}>
                <div className="h-100 p-4 rounded-4 border border-light-subtle shadow-sm bg-light-subtle position-relative overflow-hidden">
                  <div
                    className="position-absolute top-0 start-0 h-100 bg-green opacity-10"
                    style={{ width: '4px' }}
                  ></div>
                  <div className="mb-3">
                    <Image
                      src={item.icon}
                      width={40}
                      height={40}
                      alt={item.title}
                    />
                  </div>
                  <h3 className="fs-6 fw-bold text-dark-blue mb-2 lh-sm">
                    {item.title}
                  </h3>
                  <p className="text-muted small mb-0 lh-sm">{item.desc}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
      {/* Guarantee Section */}
      <div className="font-montserrat bg-light py-5 py-lg-5 border-top border-bottom">
        <Container>
          <div className="bg-white p-4 p-lg-5 rounded-5 shadow-sm border border-light-subtle mx-auto">
            <div className="row align-items-center">
              <Col lg={12}>
                <div className="text-center mb-5">
                  <p className="text-green fw-bold text-uppercase mb-2">
                    The Guarantee
                  </p>
                  <h2 className="display-5 fw-bold text-dark-blue">
                    Our guarantee is simple:{' '}
                    <span className="text-green">
                      if it is not working, you can leave.
                    </span>
                  </h2>
                  <div
                    className="mx-auto bg-green mt-3"
                    style={{ width: '80px', height: '4px' }}
                  ></div>
                </div>
              </Col>
              <Col lg={12}>
                <Row className="g-4 mb-4 justify-content-center">
                  {[
                    'No reserves',
                    'No termination fees',
                    'No lock-ins',
                    'No notice requirements',
                    'No retaliation'
                  ].map((bullet, i) => (
                    <Col md={6} lg={4} key={i}>
                      <div className="d-flex align-items-center p-3 rounded-4 bg-light border border-white h-100">
                        <div
                          className="rounded-circle d-flex align-items-center justify-content-center me-3 flex-shrink-0 shadow-sm"
                          style={{
                            width: '32px',
                            height: '32px',
                            backgroundColor: 'var(--green)'
                          }}
                        >
                          <svg
                            className="text-white"
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </div>
                        <div className="fw-bold text-dark-blue fs-5">
                          {bullet}
                        </div>
                      </div>
                    </Col>
                  ))}
                </Row>
              </Col>
            </div>
            <div className="mt-4 pt-4 border-top text-center">
              <p
                className="text-muted mb-0 fs-5 mx-auto"
                style={{ maxWidth: '800px' }}
              >
                We just require written notice by email and a $0 account balance
                with no outstanding invoices.
              </p>
            </div>
          </div>
        </Container>
      </div>

      <div className="font-montserrat bg-white py-5 py-lg-5 border-top">
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg={8}>
              <h2 className="display-6 fw-bold text-dark-blue mb-4">
                Who We Are
              </h2>
              <div
                className="mx-auto bg-green mb-4"
                style={{ width: '60px', height: '4px' }}
              ></div>
              <p className="lead text-muted lh-base mb-0">
                Smart Fleet Funding serves carriers across the United States and
                Canada. We were selected by <strong>Traffix</strong> — one of
                North America&apos;s leading freight brokerages — to power their
                carrier QuickPay program.
              </p>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="font-montserrat bg-white py-5 py-lg-5 text-center border-top">
        <Container>
          <div className="bg-light p-5 rounded-5 shadow-sm border border-light-subtle">
            <h2 className="display-4 fw-bold text-dark-blue mb-3">
              Ready for factoring{' '}
              <span className="text-green">without the lock-in?</span>
            </h2>

            <a
              href="#form"
              className="btn bg-green text-dark-blue fw-bold px-5 py-3 rounded-pill shadow-sm"
              style={{ fontSize: '1.2rem' }}
            >
              Get Started
            </a>
          </div>
        </Container>
      </div>
      <Footer minimal={true} />
    </>
  )
}
