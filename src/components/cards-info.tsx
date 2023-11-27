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
    <Container>
      <h2 className="font-montserrat fw-bold ">
        Release the money from your <br /> outstanding invoices
      </h2>
      <div className="line"></div>
      <Row className="pt-5">
        <Col className="card-column">
          <Card.Body>
            <ListGroup>
              <ListGroup.Item>
                <Card.Title>Full Fact</Card.Title>
                <div className="cards-size body">
                  We Address Your Challenges - <br />
                  <p>
                    From communication issues to confusing fees, we've got you
                    covered.
                  </p>
                </div>
                <div className="cards-size">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit
                  cum blanditiis iure. Cum placeat doloribus modi, reiciendis
                  dolorum laborum accusamus rem, minima ut voluptatibus sit
                  veritatis! Accusantium sapiente fugit aut.
                </div>
                <div className="cards-size">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit
                  cum blanditiis iure. Cum placeat doloribus modi, reiciendis
                  dolorum laborum accusamus rem, minima ut voluptatibus sit
                  veritatis! Accusantium sapiente fugit aut.
                </div>
              </ListGroup.Item>
            </ListGroup>
          </Card.Body>
        </Col>
        <Col className="card-column">
          <Card.Body>
            <ListGroup>
              <ListGroup.Item>
                <Card.Title className="cards-title ">
                  FES Pay/ InstaPay
                </Card.Title>
                <div className="cards-size">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit
                  cum blanditiis iure. Cum placeat doloribus modi, reiciendis
                  dolorum laborum accusamus rem, minima ut voluptatibus sit
                  veritatis! Accusantium sapiente fugit aut.
                </div>
                <div className="cards-size">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit
                  cum blanditiis iure. Cum placeat doloribus modi, reiciendis
                  dolorum laborum accusamus rem, minima ut voluptatibus sit
                  veritatis! Accusantium sapiente fugit aut.
                </div>
                <div className="cards-size">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit
                  cum blanditiis iure. Cum placeat doloribus modi, reiciendis
                  dolorum laborum accusamus rem, minima ut voluptatibus sit
                  veritatis! Accusantium sapiente fugit aut.
                </div>
              </ListGroup.Item>
            </ListGroup>
          </Card.Body>
        </Col>
        <Col className="card-column">
          <Card.Body>
            <ListGroup>
              <ListGroup.Item>
                <Card.Title>Smart Fuel Card</Card.Title>
                <div className="cards-size">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit
                  cum blanditiis iure. Cum placeat doloribus modi, reiciendis
                  dolorum laborum accusamus rem, minima ut voluptatibus sit
                  veritatis! Accusantium sapiente fugit aut.
                </div>
                <div className="cards-size">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit
                  cum blanditiis iure. Cum placeat doloribus modi, reiciendis
                  dolorum laborum accusamus rem, minima ut voluptatibus sit
                  veritatis! Accusantium sapiente fugit aut.
                </div>
                <div className="cards-size">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit
                  cum blanditiis iure. Cum placeat doloribus modi, reiciendis
                  dolorum laborum accusamus rem, minima ut voluptatibus sit
                  veritatis! Accusantium sapiente fugit aut.
                </div>
              </ListGroup.Item>
            </ListGroup>
          </Card.Body>
        </Col>
      </Row>
    </Container>
  );
}
