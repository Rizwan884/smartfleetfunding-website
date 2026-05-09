'use client'

import HeroForm from '@/components/hero-form'
import SectionVideo from '@/components/section-video'
import Trustpilot from '@/components/trustpilot'
import { Col, Container, Image, Row } from 'react-bootstrap'
import CardsSections from '../../components/cards_sections'
import Footer from '../../components/footer'
import Navbar from '../../components/navbar'

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="font-montserrat bg-light py-5 py-lg-5">
        <Container>
          <Row className="g-5 align-items-stretch">
            <Col lg={7} className="d-flex flex-column">
              {/* Main Headline */}
              <div className="mb-4">
                <h1
                  className="fw-bold text-dark-blue mb-1 lh-1"
                  style={{ fontSize: '2.5rem' }}
                >
                  Staying because it works —
                </h1>
                <h2 className="display-3 fw-bold text-green mt-0 lh-1">
                  not because you are stuck.
                </h2>
              </div>

              {/* Unified Guarantee Card */}
              <div className="bg-white p-4 p-lg-5 rounded-4 shadow-lg border border-light-subtle flex-grow-1 d-flex flex-column justify-content-between">
                <div>
                  <h3 className="fs-4 fw-bold text-dark-blue mb-4">
                    Our Simple Guarantee
                  </h3>
                  <Row className="g-4 mb-4">
                    {[
                      {
                        title: 'Open Contract',
                        desc: 'No lock-ins. Leave whenever you want.'
                      },
                      {
                        title: 'No Reserves',
                        desc: 'Your money is yours, immediately.'
                      },
                      {
                        title: 'No Termination Fees',
                        desc: 'Exit without any financial penalties.'
                      },
                      {
                        title: 'Real Communication',
                        desc: 'Talk to real people, not automated bots.'
                      },
                      {
                        title: 'No Notice Required',
                        desc: 'Move at your own pace.'
                      },
                      {
                        title: 'US & CA Carriers',
                        desc: 'Full North American support.'
                      }
                    ].map((item, i) => (
                      <Col md={6} key={i}>
                        <div className="d-flex align-items-start">
                          <div
                            className="rounded-circle d-flex align-items-center justify-content-center me-3 flex-shrink-0"
                            style={{
                              width: '32px',
                              height: '32px',
                              backgroundColor: 'rgba(2, 221, 104, 0.15)'
                            }}
                          >
                            <svg
                              className="text-green"
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
                          <div>
                            <div
                              className="fw-bold text-dark-blue lh-1 mb-1"
                              style={{ fontSize: '1rem' }}
                            >
                              {item.title}
                            </div>
                            <div className="small text-muted lh-sm">
                              {item.desc}
                            </div>
                          </div>
                        </div>
                      </Col>
                    ))}
                  </Row>
                </div>
                <div className="pt-3 border-top mt-auto">
                  <p className="small text-muted mb-2">
                    * Written notice & $0 balance required. No retaliation,
                    ever.
                  </p>
                  <p className="fw-bold text-dark-blue small mb-0">
                    <span className="text-green">
                      Ask us for our commitment document
                    </span>{' '}
                    to see how we work.
                  </p>
                </div>
              </div>
            </Col>
            <Col lg={5} className="d-flex">
              <HeroForm />
            </Col>
          </Row>
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
                desc: 'No termination fees, no penalties, no notice period',
                icon: '/images/sff-hp-5.svg'
              },
              {
                title: 'Clear money, upfront',
                desc: 'No surprise fees, no confusing statements',
                icon: '/images/sff-hp-2.svg'
              },
              {
                title: 'Real communication',
                desc: 'Phones and emails answered during business hours by real people',
                icon: '/images/sff-hp-1.svg'
              },
              {
                title: 'No reserves',
                desc: 'You keep everything you earn, nothing is held back',
                icon: '/images/sff-hp-3.svg'
              },
              {
                title: 'No hostage tactics',
                desc: 'Reserves and paperwork are never used as pressure',
                icon: '/images/sff-hp-6.svg'
              },
              {
                title: 'Dedicated account managers with real authority',
                desc: 'One contact who can actually get things done',
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
                desc: 'Quick onboarding, all terms explained upfront before you commit.'
              },
              {
                step: '2',
                title: 'Submit invoices',
                desc: 'Via portal or email, whichever works best for you.'
              },
              {
                step: '3',
                title: 'Get funded',
                desc: 'Fast funding, no reserves, no surprises.'
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
      <CardsSections />
      <SectionVideo />
      <Trustpilot />
      <div className="font-montserrat bg-dark-blue py-5 py-lg-5 text-center border-top">
        <Container>
          <h2 className="display-4 fw-bold text-white mb-3">
            Staying should be a choice —{' '}
            <span className="text-green">not a trap.</span>
          </h2>
          <p className="lead text-white opacity-75 mb-4">
            Open contracts. No reserves. No termination fees.
          </p>
          <a
            href="#form"
            className="btn bg-green text-dark-blue fw-bold px-5 py-3 rounded-pill shadow-sm"
            style={{ fontSize: '1.2rem' }}
          >
            Get Started
          </a>
        </Container>
      </div>
      <Footer />
    </>
  )
}
