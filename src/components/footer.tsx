import { MAX_WIDTH } from '@/constants/const'
import { useI18nProvider } from '@/context/I18nProvider'
import { IFooter } from '@/utils/types'
import Link from 'next/link'
import { Container, Nav, Navbar } from 'react-bootstrap'
import Image from 'react-bootstrap/Image'
import { useMediaQuery } from 'react-responsive'
import ScrollToTopButton from '../components/scroolTop'

export default function Footer({ minimal = false }: { minimal?: boolean }) {
  const isMobile = useMediaQuery({ maxWidth: MAX_WIDTH })
  const { t } = useI18nProvider()
  return (
    <>
      <ScrollToTopButton />
      {isMobile ? (
        <footer
          id="footer"
          className="font-montserrat bg-dark-blue text-light"
        >
          <Container className="py-3">
            {!minimal && t.home.footer.map(
              ({ home, faq, aboutus, contact }: IFooter, key: number) => (
                <Nav key={key} className="d-flex flex-column gap-1 p-1">
                  <Nav.Link className="text-green fw-600" href="/">
                    {home}
                  </Nav.Link>
                  <hr className="w-93 m-0 mx-auto" />

                  <Nav.Link className="text-green fw-600" href="/faqs">
                    {faq}
                  </Nav.Link>
                  <hr className="w-93 m-0 mx-auto" />
                  <Nav.Link className="text-green fw-600" href="/about">
                    {aboutus}
                  </Nav.Link>
                  <hr className="w-93 m-0 mx-auto" />
                  <Nav.Link className="text-green fw-600" href="/blog">
                    BLOG
                  </Nav.Link>
                  <hr className="w-93 m-0 mx-auto" />
                  <Nav.Link className="text-green fw-600" href="/contact">
                    {contact}
                  </Nav.Link>
                </Nav>
              )
            )}

            <div className="d-flex justify-content-center">
              <div className="text-center d-flex justify-content-center align-items-center w-50">
                <Image
                  src="/images/sff-logo-footer.svg"
                  width="174"
                  height="54"
                  className="d-inline-block align-top"
                  alt="SFF Logo"
                />
              </div>
            </div>
          </Container>

          <div className="font-montserrat d-flex position-relative justify-content-between align-items-center text-left py-5 px-5 bg-green">
            <p
              className="w-100 mx-auto mt-2 text-center"
              style={{ margin: 0, fontSize: 15 }}
            >
              &copy;2023 Smart Funding Team All Rights Reserved
            </p>
            {!minimal && (
              <div
                className="d-flex position-absolute"
                style={{ width: '69%', right: '0%', top: '-20px' }}
              >
                <div>
                  <Link
                    href="https://www.facebook.com/SmartFleetFunding/"
                    target="_blank"
                    passHref={true}
                  >
                    <Image
                      style={{ width: '40px' }}
                      src="/images/sff-facebook.svg"
                      alt="facebook"
                    />
                  </Link>
                </div>
                <div>
                  <Link
                    href="https://www.instagram.com/smartfleetfunding/"
                    target="_blank"
                    passHref={true}
                  >
                    <Image
                      style={{ width: '39px' }}
                      src="/images/sff-instagram.svg"
                      alt="instagram"
                    />
                  </Link>
                </div>
                <div>
                  <Link
                    href="https://www.linkedin.com/company/smart-fleet-funding/"
                    target="_blank"
                    passHref={true}
                  >
                    <Image
                      style={{ width: '43px' }}
                      src="/images/sff-linkedin.svg"
                      alt="linkedin"
                    />
                  </Link>
                </div>
                <div>
                  <Link
                    href="https://www.youtube.com/channel/UC-R--cLmpofPy6PJJ9T2wgw"
                    target="_blank"
                    passHref={true}
                  >
                    <Image
                      style={{ width: '44px' }}
                      src="/images/sff-youtube.svg"
                      alt="youtube"
                    />
                  </Link>
                </div>
              </div>
            )}
          </div>
        </footer>
      ) : (
        <footer
          id="footer"
          className=" font-montserrat bg-dark-blue text-light"
        >
          <Container className="py-3">
            {!minimal && (
              <Navbar expand="lg">
                <Container>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                    {t.home.footer.map(
                      ({ home, faq, aboutus, contact }: IFooter, key: number) => (
                        <Nav key={key}>
                          <Nav.Link className="text-green fw-500" href="/">
                            {home}
                          </Nav.Link>

                          <Nav.Link className="text-green fw-500" href="/faqs">
                            {faq}
                          </Nav.Link>
                          <Nav.Link className="text-green fw-500" href="/about">
                            {aboutus}
                          </Nav.Link>
                          <Nav.Link className="text-green fw-500" href="/blog">
                            BLOG
                          </Nav.Link>
                          <Nav.Link className="text-green fw-500" href="/contact">
                            {contact}
                          </Nav.Link>
                        </Nav>
                      )
                    )}
                  </Navbar.Collapse>
                </Container>
              </Navbar>
            )}
          </Container>
          <div className="flex text-center">
            <div className=" py-5">
              <Image
                src="/images/sff-logo-footer.svg"
                width="174"
                height="54"
                className="d-inline-block align-top"
                alt="SFF Logo"
              />
              {!minimal && (
                <div className="mt-2">
                  <Link
                    href="/privacy"
                    target="_blank"
                    className="text-decoration-none text-green"
                    passHref={true}
                  >
                    <strong>{t.fullcard.form[0].strong}</strong>
                  </Link>
                </div>
              )}
            </div>

            <div> </div>
          </div>

          <div className=" font-montserrat d-flex position-relative justify-content-between align-items-center text-left py-3 px-5 bg-green">
            <p style={{ margin: 0 }}>
              &copy;2024 Smart Funding Team All Rights Reserved
            </p>
            {!minimal && (
              <div className="mt-2 mx-5 fs-6">
                <Link
                  href="/terms-use"
                  target="_blank"
                  className="text-decoration-none text-white"
                  passHref={true}
                >
                  Terms Of Use
                </Link>
              </div>
            )}
            {!minimal && (
              <div
                className="d-flex position-absolute"
                style={{ right: '66px', top: '-11px' }}
              >
                <div>
                  <Link
                    href="https://www.facebook.com/SmartFleetFunding/"
                    target="_blank"
                    passHref={true}
                  >
                    <Image
                      style={{ width: '40px' }}
                      src="/images/sff-facebook.svg"
                      alt="facebook"
                    />
                  </Link>
                </div>
                <div>
                  <Link
                    href="https://www.instagram.com/smartfleetfunding/"
                    target="_blank"
                    passHref={true}
                  >
                    <Image
                      style={{ width: '39px' }}
                      src="/images/sff-instagram.svg"
                      alt="instagram"
                    />
                  </Link>
                </div>
                <div>
                  <Link
                    href="https://www.linkedin.com/company/smart-fleet-funding/"
                    target="_blank"
                    passHref={true}
                  >
                    <Image
                      style={{ width: '43px' }}
                      src="/images/sff-linkedin.svg"
                      alt="linkedin"
                    />
                  </Link>
                </div>
                <div>
                  <Link
                    href="https://www.youtube.com/channel/UC-R--cLmpofPy6PJJ9T2wgw"
                    target="_blank"
                    passHref={true}
                  >
                    <Image
                      style={{ width: '44px' }}
                      src="/images/sff-youtube.svg"
                      alt="youtube"
                    />
                  </Link>
                </div>
              </div>
            )}
          </div>
        </footer>
      )}
    </>
  )
}
