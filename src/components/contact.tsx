import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";
export default function Contact() {
  return (
    <>
      <div className="p-4rem mb-50 bg-search p-contact">
        <div className="d-flex flex-row  font-montserrat">
          <div className="d-flex flex-column">
            <div className="line width-bf fw-600 mb-2 ms-1 align-item-center"></div>
            <h1 className="fw-600 fs-2 text-left  flex  align-items-left gap-3">
              We are here to help. Let’s talk
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}
