import React from "react";
import { Card, Container, Row, Col, ListGroup } from "react-bootstrap";
export default function SFFcards() {
  return (
    <Container>
      <h2 className="font-montserrat fw-bold ">
        Release the money from your <br /> outstanding invoices
      </h2>
      <div className="line-front"></div>
      <Row className="pt-5">
        <Col className="card-column">
          <Card.Body>
            <ListGroup>
              <ListGroup.Item>
                <Card.Title>Full Fact</Card.Title>
                Point 1:
                <ListGroup>
                  <ListGroup.Item>Info 1.1</ListGroup.Item>
                  <ListGroup.Item>Info 1.2</ListGroup.Item>
                  <ListGroup.Item>Info 1.3</ListGroup.Item>
                  <ListGroup.Item>Info 1.4</ListGroup.Item>
                </ListGroup>
              </ListGroup.Item>
              <ListGroup.Item>
                Point 2:
                <ListGroup>
                  <ListGroup.Item>Info 2.1</ListGroup.Item>
                  <ListGroup.Item>Info 2.2</ListGroup.Item>
                  <ListGroup.Item>Info 2.3</ListGroup.Item>
                  <ListGroup.Item>Info 2.4</ListGroup.Item>
                </ListGroup>
              </ListGroup.Item>
              <ListGroup.Item>
                Point 3:
                <ListGroup>
                  <ListGroup.Item>Info 3.1</ListGroup.Item>
                  <ListGroup.Item>Info 3.2</ListGroup.Item>
                  <ListGroup.Item>Info 3.3</ListGroup.Item>
                  <ListGroup.Item>Info 3.4</ListGroup.Item>
                </ListGroup>
              </ListGroup.Item>
            </ListGroup>
          </Card.Body>
        </Col>
        <Col className="card-column">
          <Card.Body>
            <Card.Title>Card 1 Title</Card.Title>
            <ListGroup>
              <ListGroup.Item>
                Point 1:
                <ListGroup>
                  <ListGroup.Item>Info 1.1</ListGroup.Item>
                  <ListGroup.Item>Info 1.2</ListGroup.Item>
                  <ListGroup.Item>Info 1.3</ListGroup.Item>
                  <ListGroup.Item>Info 1.4</ListGroup.Item>
                </ListGroup>
              </ListGroup.Item>
              <ListGroup.Item>
                Point 2:
                <ListGroup>
                  <ListGroup.Item>Info 2.1</ListGroup.Item>
                  <ListGroup.Item>Info 2.2</ListGroup.Item>
                  <ListGroup.Item>Info 2.3</ListGroup.Item>
                  <ListGroup.Item>Info 2.4</ListGroup.Item>
                </ListGroup>
              </ListGroup.Item>
              <ListGroup.Item>
                Point 3:
                <ListGroup>
                  <ListGroup.Item>Info 3.1</ListGroup.Item>
                  <ListGroup.Item>Info 3.2</ListGroup.Item>
                  <ListGroup.Item>Info 3.3</ListGroup.Item>
                  <ListGroup.Item>Info 3.4</ListGroup.Item>
                </ListGroup>
              </ListGroup.Item>
            </ListGroup>
          </Card.Body>
        </Col>
        <Col className="card-column">
          <Card.Body>
            <Card.Title>Card 1 Title</Card.Title>
            <ListGroup>
              <ListGroup.Item>
                Point 1:
                <ListGroup>
                  <ListGroup.Item>Info 1.1</ListGroup.Item>
                  <ListGroup.Item>Info 1.2</ListGroup.Item>
                  <ListGroup.Item>Info 1.3</ListGroup.Item>
                  <ListGroup.Item>Info 1.4</ListGroup.Item>
                </ListGroup>
              </ListGroup.Item>
              <ListGroup.Item>
                Point 2:
                <ListGroup>
                  <ListGroup.Item>Info 2.1</ListGroup.Item>
                  <ListGroup.Item>Info 2.2</ListGroup.Item>
                  <ListGroup.Item>Info 2.3</ListGroup.Item>
                  <ListGroup.Item>Info 2.4</ListGroup.Item>
                </ListGroup>
              </ListGroup.Item>
              <ListGroup.Item>
                Point 3:
                <ListGroup>
                  <ListGroup.Item>Info 3.1</ListGroup.Item>
                  <ListGroup.Item>Info 3.2</ListGroup.Item>
                  <ListGroup.Item>Info 3.3</ListGroup.Item>
                  <ListGroup.Item>Info 3.4</ListGroup.Item>
                </ListGroup>
              </ListGroup.Item>
            </ListGroup>
          </Card.Body>
        </Col>
      </Row>
    </Container>
  );
}
