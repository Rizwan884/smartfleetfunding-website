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
      <div className="text-left p-2 px-5 bg-green">
        <a className="text-white">Toll-Free: (888) 875-5506 |</a>
        <a className="text-white">Send us a note |</a>
        <a className="text-white"> +1 (602) 754-8077</a>
      </div>
      <Navbar expand="lg" className="bg-body-tertiary">
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
            <Nav className=" ms-auto">
              <Nav.Link className="text-dark-blue fw-bold" href="#home">
                HOME
              </Nav.Link>
              <NavDropdown
                title={
                  <span className="text-dark-blue fw-bold mx-1">SERVICES</span>
                }
                id="basic-nav-dropdown"
                className="minWidth"
              >
                <NavDropdown.Item href="#">Full Fact</NavDropdown.Item>
                <NavDropdown.Item href="#">Instapay</NavDropdown.Item>
                <NavDropdown.Item href="#">Fuel Card</NavDropdown.Item>
                <NavDropdown.Item href="#">Freight Broker</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link className="text-dark-blue fw-bold" href="#">
                FAQ
              </Nav.Link>
              <Nav.Link className="text-dark-blue fw-bold" href="#">
                ABOUT US
              </Nav.Link>
              <Nav.Link className="text-dark-blue fw-bold" href="#">
                BLOG
              </Nav.Link>
              <Nav.Link className="text-dark-blue fw-bold" href="#">
                CONTACT
              </Nav.Link>
              <NavDropdown
                title={<span className="text-green fw-bold">ENG</span>}
                id="basic-nav-dropdown"
                className="minWidth"
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
