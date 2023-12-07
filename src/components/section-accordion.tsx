import Image from "next/image";
import { Accordion } from "react-bootstrap";
export default function SectionAccordion() {
  return (
    <div className="container">
      <Accordion
        style={{ marginTop: "10%", marginBottom: "12%" }}
        defaultActiveKey="0"
      >
        <Accordion.Item eventKey="1">
          <Accordion.Header className="fw-bold">
            <Image
              src="images/sff-acr-user.svg"
              alt="user"
              width={35}
              height={34}
              style={{ marginRight: "15px" }}
            ></Image>
            How long does it take to open an account?
          </Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header className="fw-bold">
            <Image
              src="images/sff-acr-dollar.svg"
              alt="dollar"
              width={35}
              height={34}
              style={{ marginRight: "15px" }}
            ></Image>
            What is the typical charge per invoice and what benefits do I
            receive from paying that fee?
          </Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header className="fw-bold">
            <Image
              src="images/sff-acr-book.svg"
              alt="book"
              width={35}
              height={34}
              style={{ marginRight: "15px" }}
            ></Image>
            How do I submit my invoices?
          </Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>
            <Image
              src="images/sff-acr-hand.svg"
              alt="hand"
              width={35}
              height={34}
              style={{ marginRight: "15px" }}
            ></Image>
            What is the typical charge per invoice and what benefits do I
            receive from paying that fee?
          </Accordion.Header>
          <Accordion.Body className="fw-500">
            The typical charge per invoice depends on the specific details of
            your agreement. This fee covers the cost of factoring services and
            ensures you receive prompt payment. Additionally, by paying this
            fee, you benefit from streamlined cash flow, reduced administrative
            burden by eliminating collecting your receivables, receiving and
            applying payments, review and manage the aging on your accounts
            efficiently, running credit reports on your potential costumers and
            many other day to day activities related to operation. We manage and
            you focus on growing your business.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}
