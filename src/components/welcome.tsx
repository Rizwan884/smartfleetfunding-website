import Image from "next/image";
import { Accordion } from "react-bootstrap";
export default function Welcome() {
  return (
    <div className="container">
      <div className="m-4">
        <h1 className="fw-500 fs-1 text-dark-blue">WELCOME TO INSTAPAY</h1>
        <p className="fs-5 fw-500 text-gray-dark">
          Accelerated Payments for Drivers At Smart Fleet Funding, we understand
          that every mile counts. That{"'"}s why we{"'"}ve introduced Instapay,
          an exclusive program designed with drivers like you in mind. Instapay
          ensures you get paid faster, providing the financial flexibility you
          need for a smoother journey.
        </p>
      </div>
    </div>
  );
}
