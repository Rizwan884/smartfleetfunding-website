import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";
export default function Search() {
  return (
    <>
      <div className="p-4rem mb-50 bg-search ">
        <div className="d-flex flex-row  font-montserrat">
          <div className="d-flex flex-column ">
            <div className="line width-bf fw-600 mb-2 ms-1 align-item-center"></div>
            <h1 className="fw-bold fs-2 text-left  flex  align-items-left gap-3">
              FAQ
            </h1>
          </div>
          <div className="d-flex flex-md-row  flex d-md-flex d-none column-reverse   ms-auto h-75">
            <input
              className="form-control me-2"
              type="search"
              placeholder="..."
              aria-label="Search"
            ></input>
            <button
              className="btn bg-green text-dark-blue fw-bold"
              type="submit"
            >
              Buscar
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
