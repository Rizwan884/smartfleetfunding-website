import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
export default function SFFcards() {
    return (
        <Container className="card-container">
          <Row>
            <Col className="card-column">
              <Card className="custom-card">
                <Card.Body className="card-body">
                  {/* Icono (puedes usar un componente de icono aquí) */}
                  <div className="card-icon">Icono 1</div>
                  <Card.Text>Texto de la Card 1</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col className="card-column">
              <Card className="custom-card">
                <Card.Body className="card-body">
                  {/* Icono (puedes usar un componente de icono aquí) */}
                  <div className="card-icon">Icono 2</div>
                  <Card.Text>Texto de la Card 2</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col className="card-column">
              <Card className="custom-card">
                <Card.Body className="card-body">
                  {/* Icono (puedes usar un componente de icono aquí) */}
                  <div className="card-icon">Icono 3</div>
                  <Card.Text>Texto de la Card 3</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      );
}