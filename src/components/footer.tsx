import React from "react";
import Link from "next/link";
import Image from "react-bootstrap/Image";
import ScrollToTopButton from "../components/scroolTop";
import { Button, Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";
export default function Footer() {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return (
    <>
      <ScrollToTopButton />
      {isMobile ? (
        <footer
          id="footer"
          className="font-montserrat bg-dark-blue text-light mt-5"
        >
          <Container className="py-3">
            <Nav className="d-flex flex-column gap-1 p-1">
              <Nav.Link className="text-green fw-600" href="#home">
                HOME
              </Nav.Link>
              <hr className="w-93 m-0 mx-auto" />
              <NavDropdown
                title={
                  <>
                    <div className="d-flex justify-content-between align-items-center w-full">
                      <span className="text-green fw-600">SERVICES</span>
                      <Image
                        alt="down"
                        src="images/sff-arrow-down-green.svg"
                        style={{ width: "13px", height: "10px" }}
                      />
                    </div>
                  </>
                }
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item href="/full-fact">Full Fact</NavDropdown.Item>
                <NavDropdown.Item href="/instapay">Instapay</NavDropdown.Item>
                <NavDropdown.Item href="/freight-broker-program">
                  Fuel Card
                </NavDropdown.Item>
                <NavDropdown.Item href="#">Freight Broker</NavDropdown.Item>
              </NavDropdown>
              <hr className="w-93 m-0 mx-auto" />
              <Nav.Link className="text-green fw-600" href="/faqs">
                FAQ
              </Nav.Link>
              <hr className="w-93 m-0 mx-auto" />
              <Nav.Link className="text-green fw-600" href="/about">
                ABOUT US
              </Nav.Link>
              <hr className="w-93 m-0 mx-auto" />
              <Nav.Link className="text-green fw-600" href="#blog">
                BLOG
              </Nav.Link>
              <hr className="w-93 m-0 mx-auto" />
              <Nav.Link className="text-green fw-600" href="/contact">
                CONTACT
              </Nav.Link>
            </Nav>

            <div className="d-flex">
              <div className="py-5 mx-3">
                <Button
                  href="/contact"
                  id="bottom-footer"
                  className="btn bg-green text-dark-blue fw-600 mt-3"
                >
                  CURIOUS TO LEARN MORE?
                </Button>
              </div>
              <div className="text-center d-flex justify-content-center align-items-center w-50">
                <Image
                  src="images/sff-logo-footer.svg"
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
            <div
              className="d-flex position-absolute"
              style={{ right: "28%", top: "-20px" }}
            >
              <div>
                <Link
                  href=""
                  passHref={true}
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open("https://www.facebook.com/SmartFleetFunding/");
                  }}
                >
                  <Image
                    style={{ width: "40px" }}
                    src="images/sff-facebook.svg"
                    alt="facebook"
                  />
                </Link>
              </div>
              <div>
                <Link
                  href=""
                  passHref={true}
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open("https://www.instagram.com/smartfleetfunding/");
                  }}
                >
                  <Image
                    style={{ width: "39px" }}
                    src="images/sff-instagram.svg"
                    alt="instagram"
                  />
                </Link>
              </div>
              <div>
                <Link
                  href=""
                  passHref={true}
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(
                      "https://www.linkedin.com/company/smart-fleet-funding/"
                    );
                  }}
                >
                  <Image
                    style={{ width: "43px" }}
                    src="images/sff-linkedin.svg"
                    alt="linkedin"
                  />
                </Link>
              </div>
              <div>
                <Link
                  href=""
                  passHref={true}
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(
                      "https://www.youtube.com/channel/UC-R--cLmpofPy6PJJ9T2wgw"
                    );
                  }}
                >
                  <Image
                    style={{ width: "44px" }}
                    src="images/sff-youtube.svg"
                    alt="youtube"
                  />
                </Link>
              </div>
            </div>
          </div>
        </footer>
      ) : (
        <footer
          id="footer"
          className=" font-montserrat bg-dark-blue text-light mt-5"
        >
          <Container className="py-3">
            <Navbar expand="lg">
              <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav>
                    <Nav.Link className="text-green fw-500" href="/">
                      HOME
                    </Nav.Link>
                    <NavDropdown
                      title={
                        <>
                          <span className="text-green fw-500 mx-1">
                            SERVICES
                          </span>
                          <Image
                            alt="down"
                            src="images/sff-arrow-down-green.svg"
                            style={{ width: "13px", height: "10px" }}
                          />
                        </>
                      }
                      id="basic-nav-dropdown"
                    >
                      <NavDropdown.Item href="/full-fact">
                        Full Fact
                      </NavDropdown.Item>
                      <NavDropdown.Item href="/instapay">
                        Instapay
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#">Fuel Card</NavDropdown.Item>
                      <NavDropdown.Item href="/freight-broker-program">
                        Freight Broker
                      </NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link className="text-green fw-500" href="/faqs">
                      FAQ
                    </Nav.Link>
                    <Nav.Link className="text-green fw-500" href="/about">
                      ABOUT US
                    </Nav.Link>
                    <Nav.Link className="text-green fw-500" href="#blog">
                      BLOG
                    </Nav.Link>
                    <Nav.Link className="text-green fw-500" href="/contact">
                      CONTACT
                    </Nav.Link>
                  </Nav>

                  <Button
                    href="/contact"
                    id="bottom-footer"
                    className="btn bg-green text-dark-blue fw-600 ms-auto"
                  >
                    CURIOUS TO LEARN MORE?
                  </Button>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </Container>
          <div className="text-center py-5">
            <Image
              src="images/sff-logo-footer.svg"
              width="174"
              height="54"
              className="d-inline-block align-top"
              alt="SFF Logo"
            />
          </div>
          <div className=" font-montserrat d-flex position-relative justify-content-between align-items-center text-left py-3 px-5 bg-green">
            <p style={{ margin: 0 }}>
              &copy;2023 Smart Funding Team All Rights Reserved
            </p>
            <div
              className="d-flex position-absolute"
              style={{ right: "66px", top: "-11px" }}
            >
              <div>
                <Link
                  href=""
                  passHref={true}
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open("https://www.facebook.com/SmartFleetFunding/");
                  }}
                >
                  <Image
                    style={{ width: "40px" }}
                    src="images/sff-facebook.svg"
                    alt="facebook"
                  />
                </Link>
              </div>
              <div>
                <Link
                  href=""
                  passHref={true}
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open("https://www.instagram.com/smartfleetfunding/");
                  }}
                >
                  <Image
                    style={{ width: "39px" }}
                    src="images/sff-instagram.svg"
                    alt="instagram"
                  />
                </Link>
              </div>
              <div>
                <Link
                  href=""
                  passHref={true}
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(
                      "https://www.linkedin.com/company/smart-fleet-funding/"
                    );
                  }}
                >
                  <Image
                    style={{ width: "43px" }}
                    src="images/sff-linkedin.svg"
                    alt="linkedin"
                  />
                </Link>
              </div>
              <div>
                <Link
                  href=""
                  passHref={true}
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(
                      "https://www.youtube.com/channel/UC-R--cLmpofPy6PJJ9T2wgw"
                    );
                  }}
                >
                  <Image
                    style={{ width: "44px" }}
                    src="images/sff-youtube.svg"
                    alt="youtube"
                  />
                </Link>
              </div>
            </div>
          </div>
        </footer>
      )}
    </>
  );
}
