'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { Container } from 'react-bootstrap'

export default function OpenContractThankYou() {
  const params = useParams()
  const lang = params?.lang || 'en-US'
  const homePath = `/${lang}`

  return (
    <div className="bg-dark-blue min-vh-100 d-flex align-items-center justify-content-center text-center font-montserrat">
      <Container style={{ maxWidth: '650px' }} className="px-4 py-5">
        {/* Success Icon Wrapper */}
        <div
          className="mb-4 rounded-circle p-4 d-inline-block shadow-sm"
          style={{
            backgroundColor: 'rgba(2, 221, 104, 0.1)',
            border: '2px solid rgba(2, 221, 104, 0.2)'
          }}
        >
          <Image
            src="/images/sff-bff-check.svg"
            width={60}
            height={60}
            alt="success"
            className="d-block"
          />
        </div>

        {/* Title */}
        <h1 className="display-4 fw-bold text-white mb-3">
          Thank <span className="text-green">You!</span>
        </h1>

        {/* Decorative Divider */}
        <div
          className="mx-auto bg-green mb-4 shadow-sm"
          style={{ width: '60px', height: '4px', borderRadius: '2px' }}
        ></div>

        {/* Thank You Message */}
        <p className="fs-5 text-white lh-base fw-500 opacity-90 mb-5">
          Thank you for your submission. We received your information. A member
          of our team will contact you within one business day.
        </p>

        {/* Localized Return Home Button */}
        <Link
          href={homePath}
          className="btn bg-green text-dark-blue fw-bold px-5 py-3 rounded-pill shadow-sm d-inline-flex align-items-center gap-2"
          style={{
            fontSize: '1.1rem',
            transition: 'all 0.3s ease',
            border: 'none'
          }}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
          Return to Home
        </Link>
      </Container>
    </div>
  )
}
