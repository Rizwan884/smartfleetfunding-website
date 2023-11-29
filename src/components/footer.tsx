import React from "react";
import {
  Button,
  Card,
  Container,
  Nav,
  NavDropdown,
  Navbar,
  Row,
} from "react-bootstrap";

export default function Footer() {
  return (
    <>
      <div className="row m-2">
        <div className="col-6">
          <div className="text-left m-5 p-5">
            <h2 className="font-montserrat fw-bold ">
              Explore the power of factoring <br /> with Smart Fleet Funding!
            </h2>
            <div className="line"></div>
            <div className="card-text-bottom fs-5 font-montserrat fw-400">
              Watch this concise video to understand how your invoices can turn
              into immediate cash, allowing you to focus on what you do best -
              delivering goods.{" "}
              <strong className="text-gray-dark">
                With over 30 years of experience, we{"'"}re here to guide you
                through every step.
              </strong>
            </div>
          </div>
        </div>
        <div className="col-5 embed-responsive embed-responsive-16by9  m-4 p-4 ">
          <iframe
            className="embed-responsive-item 0 mt-4 w-100 h-100 rounded-5"
            src="https://www.youtube.com/embed/kGY6N9DL4Jw"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <footer className="bg-dark-blue text-light mt-5">
        <Container className="py-3">
          <Navbar expand="lg">
            <Container>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav>
                  <Nav.Link className="text-green fw-bold" href="#home">
                    HOME
                  </Nav.Link>
                  <NavDropdown
                    title={
                      <span className="text-green fw-bold mx-1">SERVICES</span>
                    }
                    id="basic-nav-dropdown"
                    className="minWidth"
                  >
                    <NavDropdown.Item href="#">Full Fact</NavDropdown.Item>
                    <NavDropdown.Item href="#">Instapay</NavDropdown.Item>
                    <NavDropdown.Item href="#">Fuel Card</NavDropdown.Item>
                    <NavDropdown.Item href="#">Freight Broker</NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link className="text-green fw-bold" href="#faq">
                    FAQ
                  </Nav.Link>
                  <Nav.Link className="text-green fw-bold" href="#aboutus">
                    ABOUT US
                  </Nav.Link>
                  <Nav.Link className="text-green fw-bold" href="#blog">
                    BLOG
                  </Nav.Link>
                  <Nav.Link className="text-green fw-bold" href="#contact">
                    CONTACT
                  </Nav.Link>
                </Nav>
                <button className="btn bg-green text-dark-blue fw-600 ms-auto">
                  CURIOUS TO LEARN MORE?
                </button>
              </Navbar.Collapse>
            </Container>
          </Navbar>
          {/* <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse " id="navbarNav">
                <ul className="navbar-nav ">
                  <li className="nav-item mx-1">
                    <a
                      className="nav-link text-green fw-600 font-montserrat"
                      aria-current="page"
                      href="#"
                    >
                      HOME
                    </a>
                  </li>
                  <li className="nav-item mx-1">
                    <a
                      className="nav-link text-green fw-600 font-montserrat "
                      href="#"
                    >
                      SERVICES
                    </a>
                  </li>
                  <li className="nav-item mx-1">
                    <a
                      className="nav-link text-green fw-600 font-montserrat "
                      href="#"
                    >
                      FAQ
                    </a>
                  </li>
                  <li className="nav-item mx-1">
                    <a
                      className="nav-link text-green fw-600 font-montserrat "
                      href="#"
                    >
                      ABOUT US
                    </a>
                  </li>
                  <li className="nav-item mx-1">
                    <a
                      className="nav-link text-green fw-600 font-montserrat "
                      href="#"
                    >
                      BLOG
                    </a>
                  </li>
                  <li className="nav-item mx-1">
                    <a
                      className="nav-link text-green fw-600 font-montserrat "
                      href="#"
                    >
                      CONTACT
                    </a>
                  </li>
                </ul>
                <button className="btn bg-green text-green fw-600 ms-auto">
                  CURIOUS TO LEARN MORE?
                </button>
              </div>
            </div>
          </nav> */}
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
        <div className="text-left py-2 px-5 bg-green">
          <p>&copy;2020 Smart Funding Team All Rights Reserved</p>
        </div>
      </footer>
    </>
  );
}
