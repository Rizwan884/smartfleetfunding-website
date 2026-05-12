import LanguageSwitcher from '@/components/LanguageSwitcher'
import { useI18nProvider } from '@/context/I18nProvider'
import { useState } from 'react'
import { Button } from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import LoginModal from './modal-navbar'

export default function SFFNavbar({
  minimal = false,
  showTopBar = !minimal
}: {
  minimal?: boolean
  showTopBar?: boolean
}) {
  const { t } = useI18nProvider()

  const [showModal, setShowModal] = useState(false)

  return (
    <header className="sticky-top" style={{ zIndex: 1020 }}>
      {showTopBar && (
        <div className="font-montserrat d-flex justify-content-end align-items-center p-2 px-5 bg-green">
          <div className="d-flex align-items-center gap-3">
            <a
              href="tel:+18302097589"
              className="text-white fw-bold text-decoration-none"
              style={{ fontSize: '1.1rem' }}
            >
              +1 (830) 209-7589
            </a>
            <a
              href="#form"
              className="btn btn-sm btn-light fw-bold rounded-pill px-3"
              style={{ fontSize: '1.1rem' }}
            >
              Get Started
            </a>
          </div>
        </div>
      )}
      <Navbar expand="lg" className="font-montserrat nv-image">
        <Container>
          <Navbar.Brand href="/">
            <Image
              src="/images/sff-logo.png"
              width="174"
              height="54"
              className="d-inline-block align-top"
              alt="SFF Logo"
            />
          </Navbar.Brand>
          {!minimal && (
            <div className="d-flex align-items-center gap-3">
              <div id="button-language" className="d-flex d-lg-none gap-2">
                <LanguageSwitcher />
              </div>
              <Navbar.Toggle
                aria-controls="basic-navbar-nav"
                className="navbar-toggle-icon"
              />
            </div>
          )}
          {!minimal && (
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto fw-600 text-start align-items-md-center">
                <Nav.Link
                  className="text-dark-blue px-3 py-4 fw-600 "
                  href="/full-fact"
                >
                  {t.navbar.whySmartFleet}
                </Nav.Link>
                <hr className="text-dark m-0" />

                <Nav.Link
                  className="text-dark-blue px-3 py-4 fw-600 "
                  href="/faqs"
                >
                  {t.navbar.faq}
                </Nav.Link>
                <hr className="text-dark m-0" />
                <Button
                  onClick={() => setShowModal(!showModal)}
                  className="contact_slide fw-bold h-25 d-inline-block"
                  variant="btn btn-custom"
                >
                  {t.navbar.login}
                </Button>
                <div id="button-language" className="d-none d-lg-block gap-2">
                  <LanguageSwitcher />
                </div>
              </Nav>
            </Navbar.Collapse>
          )}
        </Container>
      </Navbar>
      <LoginModal
        show={showModal}
        handleClose={() => setShowModal(!showModal)}
      />
    </header>
  )
}
