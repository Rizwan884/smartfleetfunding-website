import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Link from "next/link";
import { Span } from "next/dist/trace";

export default function SFFNavbar() {
  return (
    <>
      <div className="font-montserrat text-left p-2 px-5 bg-green">
        <Link
          href="tel:+18888755506"
          className="text-white"
          style={{ marginLeft: "4rem" }}
        >
          Toll-Free: +1 (888) 875-5506{" "}
        </Link>
        <Link
          href="https://wa.me/18302097589"
          className="text-white"
          style={{ marginLeft: "0.5rem" }}
        >
          WhatsApp: +1 (830) 209-7589{" "}
        </Link>
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
          <div className="d-flex align-items-center gap-3">
            <div id="button-language" className="d-flex d-md-none gap-2">
              <NavDropdown
                id="basic-nav-dropdown"
                className="mx-auto"
                title={
                  <>
                    <span className="text-green fw-bold mx-2">ENG</span>
                    <Image
                      src="images/sff-arrow-down-green.svg"
                      alt="Dropdown Icon"
                      style={{ width: "13px", height: "10px" }}
                    />
                  </>
                }
              >
                <NavDropdown.Item href="#">ESP</NavDropdown.Item>
              </NavDropdown>
            </div>
            <Navbar.Toggle
              aria-controls="basic-navbar-nav"
              className="navbar-toggle-icon"
            />
          </div>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto fw-600 text-start align-items-md-center">
              <Nav.Link className="text-dark-blue px-3 py-4 fw-600 " href="/">
                HOME
              </Nav.Link>
              <hr className="text-dark m-0" />
              <NavDropdown
                className="px-3 py-4 nav-item-nav"
                title={
                  <>
                    <span className="text-dark-blue ">SERVICES</span>{" "}
                    <Image
                      src="images/sff-arrow-down.svg"
                      alt="Dropdown Icon"
                      style={{ width: "13px", height: "10px" }}
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
                    href="/instapay"
                  >
                    Instapay
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
                FAQ
              </Nav.Link>
              <hr className="text-dark m-0" />
              <Nav.Link
                className="text-dark-blue px-3 py-4 fw-600 "
                href="/about"
              >
                ABOUT US
              </Nav.Link>
              <hr className="text-dark m-0" />
              <Nav.Link className="text-dark-blue px-3 py-4 fw-600 " href="#">
                BLOG
              </Nav.Link>
              <hr className="text-dark m-0" />
              <Nav.Link
                className="text-dark-blue px-3 py-4 fw-600 "
                href="/contact"
              >
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
                      style={{ width: "13px", height: "10px" }}
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
