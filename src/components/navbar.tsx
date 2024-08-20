import LanguageSwitcher from '@/components/LanguageSwitcher'
import { useI18nProvider } from '@/context/I18nProvider'
import Link from 'next/link'
import { Button } from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Navbar from 'react-bootstrap/Navbar'

export default function SFFNavbar() {
  const { t } = useI18nProvider()

  return (
    <>
      <div className="font-montserrat text-left p-2 px-5 bg-green">
        <Link
          href="tel:+18888755506"
          target="_blank"
          className="text-white ms-2"
        >
          Toll-Free: +1 (888) 875-5506{' '}
        </Link>
        <Link
          href="https://wa.me/18302097589"
          target="_blank"
          className="text-white ms-2"
        >
          WhatsApp: +1 (830) 209-7589{' '}
        </Link>
      </div>
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
          <div className="d-flex align-items-center gap-3">
            <div id="button-language" className="d-flex d-lg-none gap-2">
              <LanguageSwitcher />
            </div>
            <Navbar.Toggle
              aria-controls="basic-navbar-nav"
              className="navbar-toggle-icon"
            />
          </div>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto fw-600 text-start align-items-md-center">
              <Nav.Link className="text-dark-blue px-3 py-4 fw-600 " href="/">
                {t.navbar.home}
              </Nav.Link>
              <hr className="text-dark m-0" />
              <NavDropdown
                className="px-3 py-4 nav-item-nav"
                title={
                  <>
                    <span className="text-dark-blue ">{t.navbar.services}</span>{' '}
                    <Image
                      src="/images/sff-arrow-down.svg"
                      alt="Dropdown Icon"
                      className="w-13 h-10"
                    />
                  </>
                }
                id="basic-nav-dropdown"
              >
                <div className="d-flex flex-column align-items-start gap-2 ">
                  <NavDropdown.Item
                    className="text-start text-dark"
                    href="/full-fact"
                  >
                    Full Fact
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    className="text-start text-dark"
                    href="/fespay"
                  >
                    FES Pay
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    className="text-start text-dark"
                    href="/fuel-card"
                  >
                    Fuel Card
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    className="text-start text-dark"
                    href="/freight-broker-program"
                  >
                    Freight Broker
                  </NavDropdown.Item>
                </div>
              </NavDropdown>
              <hr className="text-dark m-0" />
              <Nav.Link
                className="text-dark-blue px-3 py-4 fw-600 "
                href="/faqs"
              >
                {t.navbar.faq}
              </Nav.Link>
              <hr className="text-dark m-0" />
              <Nav.Link
                className="text-dark-blue px-3 py-4 fw-600 "
                href="/about"
              >
                {t.navbar.aboutUs}
              </Nav.Link>
              <hr className="text-dark m-0" />
              <Nav.Link
                className="text-dark-blue px-3 py-4 fw-600 "
                href="/blog"
              >
                BLOG
              </Nav.Link>
              <hr className="text-dark m-0" />
              <Nav.Link
                className="text-dark-blue px-3 py-4 fw-600 "
                href="/contact"
              >
                {t.navbar.contact}
              </Nav.Link>
              <Button
                href="https://smartfleetfundingus.profitstars.com/"
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
        </Container>
      </Navbar>
    </>
  )
}
