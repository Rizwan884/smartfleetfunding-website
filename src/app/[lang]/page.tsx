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
