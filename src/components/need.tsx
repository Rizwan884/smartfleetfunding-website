import { Card, Col, Container, Row } from "react-bootstrap";
import Image from "react-bootstrap/Image";
export default function Needs() {
  return (
    <>
      <div className="container mt-7 font-montserrat">
        <div className="d-flex flex-column align-items-center">
          <div className="line width-bf fw-600 mb-2 ms-3 align-item-center"></div>
          <h1 className="fw-600 fs-2 text-center  flex  align-items-center gap-3">
            What you need
          </h1>
        </div>
      </div>
      <div className="card-container font-montserrat mt-5 h-100 flex-column w-100">
        <div className="row mb-3">
          <Card className="mx-3 w-18rem bg-dark-blue text-white h-100">
            <Card.Body className="text-start">
              <Image
                alt="icons"
                src="images/sff-fb-check.svg"
                className="w-30px mb-4"
              ></Image>
              <Card.Text className="fs-5 lh-sm mt-3">
                <strong className="text-green">Optimizing</strong> your
                operations
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="mx-3 w-18rem bg-dark-blue text-white h-100">
            <Card.Body className="text-start">
              <Image
                alt="icons"
                src="images/sff-fb-check.svg"
                className="w-30px mb-4"
              ></Image>
              <Card.Text className="fs-5 lh-sm mt-3">
                <strong className="text-green">Attract carriers </strong> with
                the right profile
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="mx-3 w-18rem bg-dark-blue text-white h-100">
            <Card.Body className="text-start">
              <Image
                alt="icons"
                src="images/sff-fb-check.svg"
                className="w-30px mb-4"
              ></Image>
              <Card.Text className="fs-5 lh-sm mt-3">
                <strong className="text-green">Make your</strong> business more
                profitable
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="row ">
          <Card className="mx-3 w-18rem bg-dark-blue text-white h-100">
            <Card.Body className="text-start">
              <Image
                alt="icons"
                src="images/sff-fb-check.svg"
                className="w-30px mb-4"
              ></Image>
              <Card.Text className="fs-5 lh-sm mt-3">
                <strong className="text-green"> Access</strong> to immediate
                capital
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="mx-3 w-18rem bg-dark-blue text-white h-100">
            <Card.Body className="text-start">
              <Image
                alt="icons"
                src="images/sff-fb-check.svg"
                className="w-30px mb-4"
              ></Image>
              <Card.Text className="fs-5 lh-sm mt-3">
                <strong className="text-green">Accelerate accounts</strong>{" "}
                receivable cycle
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="mx-3 w-18rem bg-dark-blue text-white h-100">
            <Card.Body className="text-start w-100">
              <Image
                alt="icons"
                src="images/sff-fb-check.svg"
                className="mb-4 w-30px"
              ></Image>
              <Card.Text className="fs-5 lh-sm mt-3">
                <strong className="text-green">Strengthen</strong> <br />
                partnerships
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
      <div className="container mt-7 pb-5 font-montserrat">
        <div className="d-flex flex-column align-items-center">
          <h1 className="f-500 pb-5 fs-2rem text-center align-items-center gap-3">
            What if you had more free time <br /> to{" "}
            <strong className="text-dark-blue f-bold">
              get more clients and carriers?
            </strong>
          </h1>
        </div>
      </div>
    </>
  );
}
