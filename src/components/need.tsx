import { Card, Col, Container, Row } from "react-bootstrap";
import Image from "react-bootstrap/Image";
export default function Needs() {
  return (
    <>
      <div className="container mt-7 font-montserrat">
        <div className="d-flex flex-column align-items-center">
          <div className="line width-bf fw-600 mb-2 ms-3 align-item-center"></div>
          <h1 className="fw-600 fs-2 text-center  flex-column align-items-center gap-3">
            What you need
          </h1>
        </div>
      </div>
      <div className="card-container mt-5 h-100 flex-column ">
        <div className="row mb-3 ">
          <Card className="mx-3 w-18rem ">
            <Card.Body>
              <Card.Title className="text-start">Card Title</Card.Title>

              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="mx-3 w-18rem">
            <Card.Body>
              <Card.Title>Card Title</Card.Title>

              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="mx-3 w-18rem">
            <Card.Body>
              <Card.Title>Card Title</Card.Title>

              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="row ">
          <Card className="mx-3 w-18rem">
            <Card.Body>
              <Card.Title>Card Title</Card.Title>

              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="mx-3 w-18rem">
            <Card.Body>
              <Card.Title>Card Title</Card.Title>

              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="mx-3 w-18rem">
            <Card.Body>
              <Card.Title>Card Title</Card.Title>

              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
}
