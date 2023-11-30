import React from "react";
import { Card, Container, Row, Col, ListGroup, Button } from "react-bootstrap";
const Image = {
  // backgroundImage: 'url("images/sff-truck.jpg")',
  backgroundSize: "cover",
  backgroundPosition: "center center",
  height: "400px", // Ajusta la altura según tus necesidades
  position: "relative" as "relative",
};
const buttonContainer = {
  position: "absolute",
  top: "50%", // Centra verticalmente
  transform: "translate(10%, -20%)", // Centra el contenido
  textAlign: "left",
};
export default function Cards() {
  return (
    <Container className="font-montserrat">
      <h2 className=" fw-bold ">
        Release the money from your <br /> outstanding invoices
      </h2>
      <div className="line"></div>
      <Row className="pt-5" style={{ minHeight: "600px", maxHeight: "600px" }}>
        <Col className="card-column ">
          <Card.Body>
            <ListGroup>
              <ListGroup.Item
                className="bg-img body-list bd-box card-hb"
                style={{ lineHeight: "26px" }}
              >
                <div
                  className="icon-cards"
                  style={{ height: 60, margin: 10, marginTop: 0 }}
                >
                  <img
                    style={{ width: "68px" }}
                    src="images/sff-factura.svg"
                    alt=""
                  />
                </div>
                <Card.Title className="cards-title ">Full Fact</Card.Title>
                <div className="cards-size ">
                  <div>
                    <p className="mb-0 fw-600 text-green">
                      <img src="images/sff-point-front.svg" alt="" /> Premium
                      factoring -
                    </p>
                    <li className="list-group fw-400 text-dark-blue">
                      · Same day funding.
                    </li>
                    <div className="cards-line"></div>
                  </div>
                  <div>
                    <p className="mb-0 fw-600 text-green">
                      <img src="images/sff-point-front.svg" alt="" /> We Address
                      Your Challenges -
                    </p>
                    <li className="list-group fw-400 text-dark-blue">
                      · From communication issues to{" "}
                      <p style={{ marginLeft: "7px", marginBottom: "0px" }}>
                        {" "}
                        confusing fees, we{"'"}ve got you covered.
                      </p>
                    </li>
                    <div className="cards-line"></div>
                  </div>
                  <div>
                    <p className="mb-0 fw-600 text-green">
                      {" "}
                      <img src="images/sff-point-front.svg" alt="" /> How We
                      Assist -
                    </p>
                    <li className="list-group fw-400 text-dark-blue">
                      · Always accessible, transparent, and{" "}
                      <p style={{ marginLeft: "7px", marginBottom: "0px" }}>
                        rapid payments for smooth operations.
                      </p>
                    </li>
                    <div className="cards-line"></div>
                  </div>
                  <div>
                    <p className="mb-0 fw-600 text-green">
                      <img src="images/sff-point-front.svg" alt="" /> Connect
                      with Our Advisors -
                    </p>
                    <li className="list-group fw-400 text-dark-blue">
                      · You call! We answer!
                    </li>
                  </div>
                </div>
              </ListGroup.Item>
            </ListGroup>
          </Card.Body>
        </Col>
        <Col className="card-column">
          <Card.Body>
            <ListGroup>
              <ListGroup.Item className="bg-img body-list bd-box card-hb">
                <div className="icon-cards" style={{ height: 70 }}>
                  <img
                    style={{ width: "62px;" }}
                    src="images/sff-cash.svg"
                    alt=""
                  />
                </div>
                <Card.Title className="cards-title">
                  FES Pay/InstaPay
                </Card.Title>
                <div className="cards-size">
                  <div>
                    <p className="mb-0 fw-600 text-green">
                      <img src="images/sff-point-front.svg" alt="" /> Fast, Easy
                      and Secure Payment -
                    </p>
                    <li className="list-group fw-400 text-dark-blue">
                      · Guarantees payment in 12 business{" "}
                      <p style={{ marginLeft: "7px", marginBottom: "0px" }}>
                        {" "}
                        hours through a trusted broker alliance.
                      </p>
                    </li>
                    <div className="cards-line"></div>
                  </div>
                  <div>
                    <p className="mb-0 fw-600 text-green">
                      <img src="images/sff-point-front.svg" alt="" /> Benefits -
                    </p>
                    <li className="list-group fw-400 text-dark-blue">
                      · Optimized Cash Flow.
                    </li>
                    <li className="list-group fw-400 text-dark-blue">
                      {" "}
                      · High Cash Advanced.
                    </li>
                    <li className="list-group fw-400 text-dark-blue">
                      · No Originals Needed.
                    </li>
                    <li className="list-group fw-400 text-dark-blue">
                      · 24/7 Account Access.
                    </li>
                    <li className="list-group fw-400 text-dark-blue">
                      {" "}
                      · Expert AR Team.
                    </li>
                    <li className="list-group fw-400 text-dark-blue">
                      {" "}
                      · No contract.
                    </li>
                    <div className="cards-line"></div>
                  </div>
                  <div>
                    <p className="mb-0 fw-600 text-green">
                      <img src="images/sff-point-front.svg" alt="" /> Support -
                    </p>
                    <li className="list-group fw-400 text-dark-blue">
                      · Dedicated account executive and 24/7{" "}
                      <p style={{ marginLeft: "7px", marginBottom: "0px" }}>
                        {" "}
                        availability information.
                      </p>
                    </li>
                    <div className="cards-line"></div>
                  </div>
                  <div>
                    <p className="mb-0 fw-600 text-green">
                      <img src="images/sff-point-front.svg" alt="" /> Getting
                      Started -
                    </p>
                    <li className="list-group fw-400 text-dark-blue">
                      · Seamless for carriers with partnered{" "}
                      <p style={{ marginLeft: "7px", marginBottom: "0px" }}>
                        {" "}
                        brokers.
                      </p>
                    </li>
                  </div>
                </div>
              </ListGroup.Item>
            </ListGroup>
          </Card.Body>
        </Col>
        <Col className="card-column">
          <Card.Body>
            <ListGroup>
              <ListGroup.Item className="bg-img body-list bd-box card-hb">
                <div className="icon-cards" style={{ height: 70 }}>
                  <img
                    style={{ width: "90px" }}
                    src="images/sff-gas.svg"
                    alt=""
                  />
                </div>
                <Card.Title className="cards-title">Smart Fuel Card</Card.Title>
                <div className="cards-size">
                  <div>
                    <p className="mb-0 fw-600 text-green">
                      <img src="images/sff-point-front.svg" alt="" /> Smart Fuel
                      card -
                    </p>
                    <li className="list-group fw-400 text-dark-blue">
                      · Discounted fuel cards for major truck{" "}
                      <p style={{ marginLeft: "7px", marginBottom: "0px" }}>
                        {" "}
                        stops.
                      </p>
                    </li>
                    <li className="list-group fw-400 text-dark-blue">
                      {" "}
                      · Substantial fuel savings in USA and{" "}
                      <p style={{ marginLeft: "7px", marginBottom: "0px" }}>
                        {" "}
                        Canada.
                      </p>
                    </li>
                    <li className="list-group fw-400 text-dark-blue">
                      · Competitive edge for trucking{" "}
                      <p style={{ marginLeft: "7px", marginBottom: "0px" }}>
                        {" "}
                        companies.
                      </p>
                    </li>
                    <li className="list-group fw-400 text-dark-blue">
                      · Potential monthly savings*
                      <p style={{ marginLeft: "7px", marginBottom: "0px" }}>
                        {" "}
                        (*varies by fleet size and fuel use).
                      </p>
                    </li>
                    <div className="cards-line"></div>
                  </div>
                  <div>
                    <p className="mb-0 fw-600 text-green">
                      <img
                        className="points"
                        src="images/sff-point-front.svg"
                        alt=""
                      />{" "}
                      Smart Fuel Advance -
                    </p>
                    <li className="list-group fw-400 text-dark-blue">
                      · Alongside freight bill factoring Provides{" "}
                      <p style={{ marginLeft: "7px", marginBottom: "0px" }}>
                        {" "}
                        up to 50% of load value for fuel expenses.
                      </p>
                    </li>
                    <li className="list-group fw-400 text-dark-blue">
                      · Verification required for load booking{" "}
                      <p style={{ marginLeft: "7px", marginBottom: "0px" }}>
                        {" "}
                        and pickup.
                      </p>
                    </li>
                    <li className="list-group fw-400 text-dark-blue">
                      · Funds via direct deposit or loaded on{" "}
                      <p style={{ marginLeft: "7px", marginBottom: "0px" }}>
                        {" "}
                        fuel card.
                      </p>
                    </li>
                    <li className="list-group fw-400 text-dark-blue">
                      · Additional advance available post-
                      <p style={{ marginLeft: "7px", marginBottom: "0px" }}>
                        delivery.
                      </p>
                    </li>
                  </div>
                </div>
              </ListGroup.Item>
            </ListGroup>
          </Card.Body>
        </Col>
      </Row>
    </Container>
  );
}
