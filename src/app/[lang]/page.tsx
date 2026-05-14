'use client'

import HeroForm from '@/components/hero-form'

import Trustpilot from '@/components/trustpilot'
import { Col, Container, Image, Row } from 'react-bootstrap'

import Footer from '../../components/footer'
import Navbar from '../../components/navbar'

export default function Home() {
  return (
    <>
      <Navbar />
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
                className="text-muted mb-4 fs-5 mx-auto"
                style={{ maxWidth: '800px' }}
              >
                We just require written notice by email and a $0 account balance
                with no outstanding invoices.
              </p>
              <div className="d-inline-block bg-dark-blue text-white p-3 px-4 rounded-pill shadow-sm">
                <p className="fw-bold mb-0">
                  Want to see how the relationship works?{' '}
                  <span className="text-green">
                    Ask us for our commitment document — it explains everything
                    in plain English, before you apply.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div className="font-montserrat bg-white py-5 py-lg-5 border-top">
        <Container>
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold text-dark-blue">
              Built for clarity, fairness, and carrier control
            </h2>
            <div
              className="mx-auto bg-green mt-3"
              style={{ width: '80px', height: '4px' }}
            ></div>
          </div>

          <Row className="g-4 g-lg-5 mt-2">
            {[
              {
                title: 'A true open contract',
                desc: 'No termination fees, no penalties, no notice period required. You stay because it works, not because you signed something that makes leaving painful.',
                icon: '/images/sff-hp-5.svg'
              },
              {
                title: 'Clear money, upfront',
                desc: 'The rate you are quoted is the rate you get. No hidden fees, no confusing statements, no surprises on your remittance.',
                icon: '/images/sff-hp-2.svg'
              },
              {
                title: 'Real communication',
                desc: 'Phones and emails are answered during business hours by people who know your account and can actually help.',
                icon: '/images/sff-hp-1.svg'
              },
              {
                title: 'No reserves',
                desc: 'You keep everything you earn. Nothing is held back, nothing is withheld.',
                icon: '/images/sff-hp-3.svg'
              },
              {
                title: 'No hostage tactics',
                desc: 'Your reserves and your paperwork are never used as leverage against you.',
                icon: '/images/sff-hp-6.svg'
              },
              {
                title: 'Dedicated account managers with real authority',
                desc: 'One point of contact who knows your account and can make decisions.',
                icon: '/images/sff-hp-8.svg'
              }
            ].map((item, i) => (
              <Col md={4} key={i}>
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
                  <h3 className="fs-5 fw-bold text-dark-blue mb-2 lh-sm">
                    {item.title}
                  </h3>
                  <p className="text-muted small mb-0 lh-base">{item.desc}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
      <div
        id="how-it-works"
        className="font-montserrat bg-light py-5 py-lg-5 border-top"
      >
        <Container>
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold text-dark-blue">How It Works</h2>
            <div
              className="mx-auto bg-green mt-3"
              style={{ width: '60px', height: '4px' }}
            ></div>
          </div>

          <Row className="g-4 text-center mt-2">
            {[
              {
                step: '1',
                title: 'Apply',
                desc: 'Quick onboarding with a clear process. We explain our terms — including exactly how to leave — before anything starts.'
              },
              {
                step: '2',
                title: 'Submit invoices',
                desc: 'Upload through our portal or email — whatever is easiest.'
              },
              {
                step: '3',
                title: 'Get funded',
                desc: 'Fast funding after verification — without reserves or surprises.'
              }
            ].map((item, i) => (
              <Col md={4} key={i}>
                <div className="p-4">
                  <div
                    className="bg-green text-dark-blue rounded-circle d-flex align-items-center justify-content-center mx-auto mb-4 fw-bold shadow-sm"
                    style={{
                      width: '60px',
                      height: '60px',
                      fontSize: '1.5rem'
                    }}
                  >
                    {item.step}
                  </div>
                  <h3 className="fs-4 fw-bold text-dark-blue mb-3">
                    {item.title}
                  </h3>
                  <p className="text-muted">{item.desc}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>

      <Trustpilot />

      <div className="font-montserrat bg-white py-5 py-lg-5 text-center border-top">
        <Container>
          <div className="bg-light p-5 rounded-5 shadow-sm border border-light-subtle">
            <h2 className="display-4 fw-bold text-dark-blue mb-3">
              Staying should be a choice —{' '}
              <span className="text-green">not a trap.</span>
            </h2>
            <p className="lead text-muted mb-4">
              Open contracts. No reserves. No termination fees.
            </p>
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
      <Footer />
    </>
  )
}
