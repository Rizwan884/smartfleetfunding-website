'use client'

import HeroForm from '@/components/hero-form'
import { useI18nProvider } from '@/context/I18nProvider'
import Link from 'next/link'
import { Col, Container, Image, Row } from 'react-bootstrap'
import Footer from '../../../components/footer'
import Navbar from '../../../components/navbar'
import TestimonialCarousel from '../../../components/testimonial'

export default function FullFact() {
  const { t } = useI18nProvider()
  const title = (
    <div className="font-montserrat lh-1">
      {t.fullcard.pageTitle}{' '}
      <span className="text-green">{t.fullcard.pagestrong}</span>
    </div>
  )
  const titleMobile = (
    <div className="font-montserrat lh-1">
      {t.fullcard.pageTitle}{' '}
      <span className="text-green">{t.fullcard.pagestrong}</span>
    </div>
  )

  return (
    <>
      <Navbar />
      <div className="bg-dark-blue py-5 font-montserrat">
        <Container>
          <Row className="g-5 align-items-center">
            <Col lg={7}>
              <div
                className="line bg-green mb-4"
                style={{ width: '80px', height: '4px' }}
              ></div>
              <div className="d-none d-md-block text-white">
                <h1 className="display-4 fw-bold mb-4">{title}</h1>
                <p className="fs-5 opacity-75 mb-0">
                  Same day payment* with preferential rates and personalized
                  service, no penalty clauses and no minimum amount.
                </p>
              </div>
              <div className="d-md-none text-white">
                <h1 className="fs-1 fw-bold mb-3">{titleMobile}</h1>
                <p className="opacity-75 mb-0">
                  Same day payment* with preferential rates and personalized
                  service, no penalty clauses and no minimum amount.
                </p>
              </div>
            </Col>
            <Col lg={5}>
              <HeroForm />
            </Col>
          </Row>
        </Container>
      </div>

      {/* Pain Section */}
      <div className="font-montserrat bg-light py-5 py-lg-5 border-top border-bottom">
        <Container>
          <div
            className="text-center mb-5 mx-auto"
            style={{ maxWidth: '800px' }}
          >
            <h2 className="display-5 fw-bold text-dark-blue mb-3">
              Factoring should not feel risky.
            </h2>
            <p className="lead text-muted lh-base">
              Most carriers did not come looking for a slightly better rate.
              They came because their current factoring relationship had become
              a liability.
            </p>
            <div
              className="mx-auto bg-green mt-4"
              style={{ width: '80px', height: '4px' }}
            ></div>
          </div>

          <Row className="g-4 mb-5">
            {[
              {
                title: 'Contracts that removed choice',
                desc: 'Long-term agreements with termination penalties',
                icon: '/images/sff-acr-book.svg'
              },
              {
                title: 'Unclear money and surprise costs',
                desc: 'One rate quoted, another applied',
                icon: '/images/sff-acr-dollar.svg'
              },
              {
                title: 'Cash being held hostage',
                desc: 'Reserves frozen for weeks or months',
                icon: '/images/sff-bff-hand.svg'
              },
              {
                title: 'Processes used as leverage',
                desc: 'Paperwork used as pressure',
                icon: '/images/sff-fb-rule.svg'
              },
              {
                title: 'Damaged broker relationships',
                desc: 'Collections made brokers walk away',
                icon: '/images/sff-acr-user.svg'
              },
              {
                title: 'Silence when it mattered',
                desc: 'Calls and emails going unanswered',
                icon: '/images/sff-bff-earphones.svg'
              },
              {
                title: 'A dedicated rep with no real authority',
                desc: 'Friendly but unable to help',
                icon: '/images/sff-hp-1.svg'
              },
              {
                title: 'No accountability',
                desc: 'Too much automation, no human connection',
                icon: '/images/sff-hp-2.svg'
              }
            ].map((item, i) => (
              <Col md={6} lg={3} key={i}>
                <div className="h-100 p-4 rounded-4 border border-light-subtle shadow-sm bg-white position-relative overflow-hidden">
                  <div className="mb-3">
                    <Image
                      src={item.icon}
                      width={40}
                      height={40}
                      alt={item.title}
                    />
                  </div>
                  <h4 className="fs-6 fw-bold text-dark-blue mb-2 lh-sm">
                    {item.title}
                  </h4>
                  <p className="text-muted small mb-0 lh-sm">{item.desc}</p>
                </div>
              </Col>
            ))}
          </Row>

          <div className="text-center pt-5">
            <h3 className="fs-4 fw-bold text-dark-blue mb-0">
              That is exactly why we built{' '}
              <span className="text-green">Smart Fleet Funding</span>{' '}
              differently.
            </h3>
          </div>
        </Container>
      </div>

      {/* Differentiators Section */}
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

          <Row className="g-4 mt-2">
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
      <div className="font-montserrat bg-light py-5 py-lg-5 border-top">
        <Container>
          <div
            className="bg-white p-4 p-lg-5 rounded-4 shadow-lg border border-light-subtle mx-auto"
            style={{ maxWidth: '900px' }}
          >
            <h2 className="fs-3 fw-bold text-dark-blue mb-4">
              Our guarantee is simple:{' '}
              <span className="text-green">
                if it is not working, you can leave.
              </span>
            </h2>
            <Row className="g-4 mb-4">
              {[
                'No reserves',
                'No termination fees',
                'No lock-ins',
                'No notice requirements',
                'No retaliation'
              ].map((bullet, i) => (
                <Col md={6} lg={4} key={i}>
                  <div className="d-flex align-items-center">
                    <div
                      className="rounded-circle d-flex align-items-center justify-content-center me-3 flex-shrink-0"
                      style={{
                        width: '28px',
                        height: '28px',
                        backgroundColor: 'rgba(2, 221, 104, 0.15)'
                      }}
                    >
                      <svg
                        className="text-green"
                        width="16"
                        height="16"
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
                    <div className="fw-bold text-dark-blue lh-sm">{bullet}</div>
                  </div>
                </Col>
              ))}
            </Row>
            <div className="pt-3 border-top mb-3">
              <p className="text-muted small mb-0">
                We just require written notice by email and a $0 account balance
                with no outstanding invoices.
              </p>
            </div>
            <p className="text-dark-blue fw-bold mb-0">
              Want to see how the relationship works? Ask us for our commitment
              document.
            </p>
          </div>
        </Container>
      </div>

      <TestimonialCarousel />
      <div className="font-montserrat bg-dark-blue py-5 py-lg-5 text-center border-top">
        <Container>
          <h2 className="display-4 fw-bold text-white mb-4">
            Staying should be a choice —{' '}
            <span className="text-green">not a trap.</span>
          </h2>
          <a
            href="#form"
            className="btn bg-green text-dark-blue fw-bold px-5 py-3 rounded-pill shadow-sm mb-4"
            style={{ fontSize: '1.2rem' }}
          >
            Get Started
          </a>
          <div>
            <Link
              href="/faqs"
              className="text-white opacity-75 text-decoration-none small"
            >
              Have questions?{' '}
              <span className="text-decoration-underline">See our FAQ</span>
            </Link>
          </div>
        </Container>
      </div>
      <Footer />
    </>
  )
}
