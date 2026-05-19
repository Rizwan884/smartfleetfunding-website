'use client'

import { Container } from 'react-bootstrap'

export default function ThankYou() {
  return (
    <div className="bg-dark-blue min-vh-100 d-flex align-items-center justify-content-center text-center font-montserrat">
      <Container style={{ maxWidth: '600px' }} className="px-4">
        <p className="fs-5 text-white lh-base fw-500 opacity-90 m-0">
          Thank you for your submission. We received your information. A member
          of our team will contact you within one business day.
        </p>
      </Container>
    </div>
  )
}
