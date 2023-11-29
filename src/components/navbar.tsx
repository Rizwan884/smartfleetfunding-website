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
        <a className="text-white">Toll-Free: (888) 875-5506 | </a>
        <a className="text-white">Send us a note |</a>
        <a className="text-white"> +1 (602) 754-8077</a>
      </div>
      <Navbar expand="lg" className="font-montserrat bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src="images/sff-logo.png"
              width="174"
              height="54"
              className="d-inline-block align-top"
              alt="SFF Logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link className="text-dark-blue fw-500" href="#home">
                HOME
              </Nav.Link>
              <NavDropdown
                title={
                  <span className="text-dark-blue fw-500 mx-1">SERVICES</span>
                }
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item href="#">Full Fact</NavDropdown.Item>
                <NavDropdown.Item href="#">Instapay</NavDropdown.Item>
                <NavDropdown.Item href="#">Fuel Card</NavDropdown.Item>
                <NavDropdown.Item href="#">Freight Broker</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link className="text-dark-blue fw-500" href="#faq">
                FAQ
              </Nav.Link>
              <Nav.Link className="text-dark-blue fw-500" href="#aboutus">
                ABOUT US
              </Nav.Link>
              <Nav.Link className="text-dark-blue fw-500" href="#blog">
                BLOG
              </Nav.Link>
              <Nav.Link className="text-dark-blue fw-500" href="#contact">
                CONTACT
              </Nav.Link>
              <NavDropdown
                title={<span className="text-green fw-500">ENG</span>}
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
