import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import { Span } from "next/dist/trace";

export default function SFFNavbar() {
  return (
    <>
      <div className="font-montserrat text-left p-2 px-5 bg-green">
        <a className="text-white" style={{ marginLeft: "4rem" }}>
          Toll-Free: (888) 875-5506{" "}
        </a>
      </div>
      <Navbar expand="lg" className="font-montserrat nv-image">
        <Container>
          <Navbar.Brand href="/">
            <Image
              src="images/sff-logo.png"
              width="174"
              height="54"
              className="d-inline-block align-top"
              alt="SFF Logo"
            />
          </Navbar.Brand>
          <div
            id="button-language"
            className="d-flex d-md-none justify-content-end"
          >
            <NavDropdown
              id="basic-nav-dropdown"
              className="mx-auto"
              title={
                <>
                  <span className="text-green fw-bold">ENG</span>
                  <Image
                    src="images/sff-arrow-down-green.svg"
                    alt="Dropdown Icon"
                    style={{ width: "13px", height: "10px" }} // Ajusta el tamaño según tus necesidades
                  />
                </>
              }
            >
              <NavDropdown.Item href="#">ESP</NavDropdown.Item>
            </NavDropdown>
          </div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav ">
            <Nav className="ms-auto fw-600 text-end">
              <Nav.Link className="text-dark-blue " href="/">
                HOME
              </Nav.Link>
              <NavDropdown
                title={
                  <>
                    <Image
                      src="images/sff-arrow-down.svg"
                      alt="Dropdown Icon"
                      style={{ width: "13px", height: "10px" }}
                    />
                    <span className="text-dark-blue ms-1">SERVICES</span>
                  </>
                }
                id="basic-nav-dropdown"
              >
                <div className="d-flex flex-column">
                  <NavDropdown.Item className="text-end" href="/full-fact.html">
                    Full Fact
                  </NavDropdown.Item>
                  <NavDropdown.Item className="text-end" href="/instapay.html">
                    Instapay
                  </NavDropdown.Item>
                  <NavDropdown.Item className="text-end" href="#">
                    Fuel Card
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    className="text-end"
                    href="/freight-broker-program.html"
                  >
                    Freight Broker
                  </NavDropdown.Item>
                </div>
              </NavDropdown>
              <Nav.Link className="text-dark-blue " href="/faqs.html">
                FAQ
              </Nav.Link>
              <Nav.Link className="text-dark-blue " href="/about.html">
                ABOUT US
              </Nav.Link>
              <Nav.Link className="text-dark-blue " href="#blog">
                BLOG
              </Nav.Link>
              <Nav.Link className="text-dark-blue " href="/contact.html">
                CONTACT
              </Nav.Link>
              <NavDropdown
                className="d-none d-md-flex"
                title={
                  <>
                    <span className="text-green ">ENG</span>
                    <Image
                      src="images/sff-arrow-down-green.svg"
                      alt="Dropdown Icon"
                      style={{ width: "13px", height: "10px" }} // Ajusta el tamaño según tus necesidades
                    />
                  </>
                }
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item className="" href="#">
                  ESP
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
