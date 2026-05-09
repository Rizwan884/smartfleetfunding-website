import Image from 'next/image'
import { useState } from 'react'
import { Button, Form } from 'react-bootstrap'

export default function HeroForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    mc: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate API call
    console.log('Form submitted:', formData)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div
        className="p-5 shadow-lg rounded-4 bg-white font-montserrat text-center d-flex flex-column align-items-center justify-content-center"
        style={{
          maxWidth: '600px',
          minHeight: '400px',
          border: '1px solid rgba(0, 0, 0, 0.05)',
          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)'
        }}
      >
        <div className="mb-4 bg-light rounded-circle p-3 d-inline-block">
          <Image src="/images/sff-bff-check.svg" width={50} height={50} alt="success" />
        </div>
        <h2 className="fw-bold text-dark-blue mb-3">Thank You!</h2>
        <p className="text-muted fs-5 px-3">
          We received your information. A member of our team will contact you within one business day.
        </p>
        <Button 
          variant="link" 
          className="text-green text-decoration-none fw-bold mt-3"
          onClick={() => setSubmitted(false)}
        >
          Send another request
        </Button>
      </div>
    )
  }

  return (
    <div
      className="p-4 p-lg-5 shadow-lg rounded-4 bg-white font-montserrat h-100 d-flex flex-column"
      id="form"
      style={{
        maxWidth: '600px',
        width: '100%',
        border: '1px solid rgba(0, 0, 0, 0.05)',
        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)'
      }}
    >
      <div className="mb-4">
        <h2 className="fw-bold mb-1 fs-3 text-dark-blue">
          Get Started
        </h2>
        <div className="line-contact mb-3" style={{ width: '50px', height: '3px', backgroundColor: '#02dd68' }}></div>
        <p className="text-muted small">Fill out the form below and our team will get back to you shortly.</p>
      </div>
      
      <Form onSubmit={handleSubmit} className="flex-grow-1 d-flex flex-column justify-content-between">
        <div>
          <Form.Group className="mb-3 position-relative">
            <Form.Control
              className="py-3 bg-light border-0 px-3"
              style={{ borderRadius: '8px', fontSize: '1rem' }}
              type="text"
              placeholder="Full Name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control
              className="py-3 bg-light border-0 px-3"
              style={{ borderRadius: '8px', fontSize: '1rem' }}
              type="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control
              className="py-3 bg-light border-0 px-3"
              style={{ borderRadius: '8px', fontSize: '1rem' }}
              type="tel"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              required
            />
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Control
              className="py-3 bg-light border-0 px-3"
              style={{ borderRadius: '8px', fontSize: '1rem' }}
              type="text"
              placeholder="MC / DOT / CVOR"
              value={formData.mc}
              onChange={(e) => setFormData({ ...formData, mc: e.target.value })}
              required
            />
          </Form.Group>
        </div>

        <div>
          <Button
            type="submit"
            className="w-100 btn fw-bold bg-green text-dark-blue py-3 border-0 rounded-3 shadow-sm"
            style={{ 
              fontSize: '1.1rem',
              transition: 'all 0.3s ease'
            }}
          >
            Get Started
          </Button>
          <div className="d-flex align-items-center justify-content-center mt-3 opacity-75">
             <Image src="/images/sff-shield-front.svg" width={16} height={16} className="me-2" alt="secure" />
             <span style={{ fontSize: '0.8rem' }}>Secure & Confidential</span>
          </div>
        </div>
      </Form>
    </div>
  )
}




