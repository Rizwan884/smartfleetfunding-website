'use client'

import HeroForm from '@/components/hero-form'
import Trustpilot from '@/components/trustpilot'
import { useI18nProvider } from '@/context/I18nProvider'
import Link from 'next/link'
import { Col, Container, Image, Row } from 'react-bootstrap'
import Footer from '../../../components/footer'
import Navbar from '../../../components/navbar'

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
              <div className="d-none d-md-block text-white">
                <h1 className="display-3 fw-bold mb-4">{title}</h1>
                <p className="fs-5 opacity-75 mb-0">
                  Smart Fleet Funding means staying because it works — not
                  because you are stuck.
                </p>
              </div>
              <div className="d-md-none text-white">
                <h1 className="display-3 fw-bold mb-3">{titleMobile}</h1>
                <p className="opacity-75 mb-0">
                  Smart Fleet Funding means staying because it works — not
                  because you are stuck.
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
            style={{ maxWidth: '900px' }}
          >
            <h2 className="display-5 fw-bold text-dark-blue mb-3">
              Factoring should not feel risky.
            </h2>
            <p className="lead text-muted lh-base mb-4">
              Most carriers did not come looking for a slightly better rate.
              They came because their current factoring relationship had become
              a liability instead of a support system.
            </p>
            <p className="fw-bold text-dark-blue fs-5 mb-0">
              They were tired of:
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
                desc: 'Long-term agreements, termination penalties, or slow-walked exits that made leaving painful even when the service was not working.',
                icon: '/images/sff-acr-book.svg'
              },
              {
                title: 'Unclear money and surprise costs',
                desc: 'Being quoted one rate, then discovering additional fees, confusing statements, or a higher real cost after the fact.',
                icon: '/images/sff-acr-dollar.svg'
              },
              {
                title: 'Cash being held hostage',
                desc: 'Reserves withheld or frozen for weeks or months, with little explanation and no clear release timeline.',
                icon: '/images/sff-bff-hand.svg'
              },
              {
                title: 'Processes used as leverage',
                desc: 'Paperwork, reserves, and internal procedures quietly used to pressure carriers into staying.',
                icon: '/images/sff-fb-rule.svg'
              },
              {
                title: 'Damaged broker relationships',
                desc: 'Collections tactics that upset brokers, strained relationships, and cost carriers good lanes they worked hard to build.',
                icon: '/images/sff-acr-user.svg'
              },
              {
                title: 'Silence when it mattered most',
                desc: 'Getting ghosted when money was held, a dispute came up, or a simple question needed a real answer.',
                icon: '/images/sff-bff-earphones.svg'
              },
              {
                title: 'A "dedicated rep" without authority',
                desc: 'Someone friendly on the phone but unable to pause issues, apply judgment, or change outcomes.',
                icon: '/images/sff-hp-1.svg'
              },
              {
                title: 'Too much automation, not enough accountability',
                desc: 'Systems making decisions by default, with no human ownership when those decisions created problems.',
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

          <div
            className="text-center pt-5 mx-auto"
            style={{ maxWidth: '800px' }}
          >
            <p className="fs-5 text-muted mb-0">
              Over time, factoring stopped feeling like a solution and started
              feeling unpredictable, stressful, and risky. That is exactly why
              we built{' '}
              <span className="text-green fw-bold">Smart Fleet Funding</span>{' '}
              differently.
            </p>
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
                desc: 'No termination fees. No penalties. No notice period requirements. If you are not happy, you let us know — no pressure to stay. We simply require written notice by email and a $0 account balance with no outstanding invoices.',
                icon: '/images/sff-hp-5.svg'
              },
              {
                title: 'Clear money, upfront',
                desc: 'No surprise fees. No confusing statements. You know what you are paying and why — before anything starts.',
                icon: '/images/sff-hp-2.svg'
              },
              {
                title: 'Real communication',
                desc: 'Phones and emails are answered during business hours. When something affects your account, you get straightforward explanations from a real person.',
                icon: '/images/sff-hp-1.svg'
              },
              {
                title: 'No reserves',
                desc: 'We do not hold back a portion of your money "just in case." What you earn is what you receive — without your cash being tied up later.',
                icon: '/images/sff-hp-3.svg'
              },
              {
                title: 'No hostage tactics',
                desc: 'Reserves, paperwork, and processes are never used to force a carrier to stay.',
                icon: '/images/sff-hp-6.svg'
              },
              {
                title: 'Dedicated account managers with real authority',
                desc: 'One point of contact who can pause issues, use judgment, and prevent problems — not just explain policy.',
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
      <div className="font-montserrat bg-light py-5 py-lg-5 border-top border-bottom">
        <Container>
          <div className="bg-white p-4 p-lg-5 rounded-5 shadow-sm border border-light-subtle mx-auto">
            <div className="row align-items-center">
              <Col lg={12}>
                <div className="text-center mb-5">
                  <h2 className="display-6 fw-bold text-dark-blue text-nowrap-desktop">
                    Our guarantee is simple:{' '}
                    <span className="text-green">
                      if it is not working, you can leave!
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

      <Trustpilot />
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
