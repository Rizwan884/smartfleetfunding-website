import React from "react";
import ScrollToTopButton from "../components/scroolTop";
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";

export default function Footer() {
  return (
    <>
      <ScrollToTopButton />
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
                  <Nav.Link className="text-green fw-500" href="#home">
                    HOME
                  </Nav.Link>
                  <NavDropdown
                    title={
                      <>
                        <span className="text-green fw-500 mx-1">SERVICES</span>
                        <img
                          src="images/sff-arrow-down-green.svg"
                          style={{ width: "13px", height: "10px" }} // Ajusta el tamaño según tus necesidades
                        />
                      </>
                    }
                    id="basic-nav-dropdown"
                  >
                    <NavDropdown.Item href="#">Full Fact</NavDropdown.Item>
                    <NavDropdown.Item href="#">Instapay</NavDropdown.Item>
                    <NavDropdown.Item href="#">Fuel Card</NavDropdown.Item>
                    <NavDropdown.Item href="#">Freight Broker</NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link className="text-green fw-500" href="#faq">
                    FAQ
                  </Nav.Link>
                  <Nav.Link className="text-green fw-500" href="#aboutus">
                    ABOUT US
                  </Nav.Link>
                  <Nav.Link className="text-green fw-500" href="#blog">
                    BLOG
                  </Nav.Link>
                  <Nav.Link className="text-green fw-500" href="#contact">
                    CONTACT
                  </Nav.Link>
                </Nav>

                <button className="btn bg-green text-dark-blue fw-600 ms-auto">
                  CURIOUS TO LEARN MORE?
                </button>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </Container>
        <div className="text-center py-5">
          <img
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
              <a href="#facebook">
                <img
                  style={{ width: "40px" }}
                  src="images/sff-facebook.svg"
                  alt=""
                />
              </a>
            </div>
            <div>
              <a href="#instagram">
                <img
                  style={{ width: "40px" }}
                  src="images/sff-instagram.svg"
                  alt=""
                />
              </a>
            </div>
            <div>
              <a href="#linkedin">
                <img
                  style={{ width: "43px" }}
                  src="images/sff-linkedin.svg"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
