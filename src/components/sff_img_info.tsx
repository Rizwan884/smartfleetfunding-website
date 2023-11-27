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
  transform: "translate(200%, -20%)", // Centra el contenido
  textAlign: "right",
};
export default function SFFimgInfo() {
  return (
    <div
      style={{
        ...Image,
        backgroundImage: 'url("images/sff-truck-driver.jpg")',
      }}
    >
      <div style={buttonContainer} className="font-montserrat mx-4">
        <h1 className="text-end fw-bold fs-3">
          Interested in learning more? <br /> Give us a call today!
          <div className="line"></div>
        </h1>
        <div className="card-text-bottom fw-400">
          We’re here to answer all your questions and <br /> help you find the
          best solutions for your <br /> trucking business.
        </div>

        <Button
          className="contact_slide fw-bold  my-4 h-25 d-inline-block"
          variant="btn btn-custom"
        >
          Let’s Talk
        </Button>
      </div>
    </div>
  );
}
