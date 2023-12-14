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
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav ">
            <Nav className="ms-auto fw-600">
              <Nav.Link className="text-dark-blue " href="/">
                HOME
              </Nav.Link>
              <NavDropdown
                title={
                  <>
                    <span className="text-dark-blue  mx-1">SERVICES</span>
                    <Image
                      src="images/sff-arrow-down.svg"
                      alt="Dropdown Icon"
                      style={{ width: "13px", height: "10px" }} // Ajusta el tamaño según tus necesidades
                    />
                  </>
                }
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item href="/full-fact">Full Fact</NavDropdown.Item>
                <NavDropdown.Item href="/instapay">Instapay</NavDropdown.Item>
                <NavDropdown.Item href="#">Fuel Card</NavDropdown.Item>
                <NavDropdown.Item href="/freight-broker-program">
                  Freight Broker
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link className="text-dark-blue " href="/faqs">
                FAQ
              </Nav.Link>
              <Nav.Link className="text-dark-blue " href="/about-us">
                ABOUT US
              </Nav.Link>
              <Nav.Link className="text-dark-blue " href="#blog">
                BLOG
              </Nav.Link>
              <Nav.Link className="text-dark-blue " href="#contact">
                CONTACT
              </Nav.Link>
              <NavDropdown
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
                <NavDropdown.Item className="" href="#">
                  RU
                </NavDropdown.Item>
                <NavDropdown.Item className="" href="#">
                  IT
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
