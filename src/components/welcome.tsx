import Image from "next/image";
import { Accordion } from "react-bootstrap";
export default function Welcome() {
  return (
    <div className="container font-montserrat pt-5 pb-5">
      <div className="m-4 mb-5">
        <h2 className="fw-600+">WELCOME TO INSTAPAY</h2>
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
