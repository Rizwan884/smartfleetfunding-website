import { Card, Col, Container, Row } from "react-bootstrap";
import Image from "react-bootstrap/Image";
export default function Know() {
  return (
    <>
      <div className="container mt-7 font-montserrat">
        <div className="d-flex flex-column align-items-center">
          <div className="line width-bf fw-600 mb-2 ms-3 align-item-center"></div>
          <h1 className="fw-regular fs-2 text-center   flex  align-items-center gap-3">
            Know more about <strong>Smart Fleet Funding</strong>
          </h1>
        </div>
      </div>
      <div className="card-container font-montserrat mt-5 h-100 flex-column w-100">
        <div className="row mb-3">
          <Card className="mx-3 w-18rem bg-white text-white h-100 al-left">
            <Card.Body className="text-start">
              <Card.Text className="fs-6 lh-sm mt-3 ms-auto text-dark-blue">
                INNOVATION
                <br /> <strong>FES - Pay</strong>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="mx-3 w-18rem bg-white text-white h-100 al-left">
            <Card.Body className="text-start">
              <Card.Text className="fs-6 lh-sm mt-3 ms-auto text-dark-blue">
                EXPERIENCE
                <br /> <strong>Over 30 Years</strong>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="mx-3 w-18rem bg-white text-white h-100 al-left">
            <Card.Body className="text-start">
              <Card.Text className="fs-6 lh-sm mt-3 ms-auto text-dark-blue">
                GLOBAL
                <br /> <strong>North America (Canada, USA, México)</strong>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="row ">
          <Card className="mx-3 w-18rem bg-white text-white h-100 al-left">
            <Card.Body className="text-start">
              <Card.Text className="fs-6 lh-sm mt-3 ms-auto text-dark-blue">
                EMPOWERMENT
                <br /> <strong>Helping Businesses Thrive</strong>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="mx-3 w-18rem bg-white text-white h-100 al-left">
            <Card.Body className="text-start">
              <Card.Text className="fs-6 lh-sm mt-3 ms-auto text-dark-blue">
                COMMITMENT
                <br /> <strong>Transparency</strong>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="mx-3 w-18rem bg-white text-white h-100 al-left">
            <Card.Body className="text-start">
              <Card.Text className="fs-6 lh-sm mt-3 ms-auto text-dark-blue">
                TECHNOLOGY
                <br />{" "}
                <strong>
                  Integrations with major players in the industries we serve
                </strong>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
      <div className="container pt-6 font-montserrat">
        <div className="row line-programs pb-4">
          <div className="col-4">
            {" "}
            <h1 className="fw-bold fs-2 mb-0 mx-4 w-75">Who We Are</h1>
            <div className="line-program mt-0 mx-4 mt-1 w-3"></div>
          </div>
          <div className="col-8">
            With over 30 years of experience in the factoring market, Smart
            Fleet Funding has been a key player in providing support and funding
            to various industries, with a particular focus on transportation.{" "}
            <strong>
              {" "}
              We have a proven track record of successfully running the Instapay
              Program (FES Pay) for major Freight Brokers in North America.
              Currently, we proudly serve clients across all of North America.
            </strong>
          </div>
        </div>
        <div className="row line-programs pt-4 pb-4">
          <div className="col-4">
            {" "}
            <h1 className="fw-bold fs-2 mb-0 mx-4 w-75">Our Commitment</h1>
            <div className="line-program mt-0 mx-4 mt-1 w-3"></div>
          </div>
          <div className="col-8">
            At Smart Fleet Funding, we{"'"}ve designed a system that simplifies
            the process of getting paid. Our mission is to remove the
            complexities and delays associated with unpaid invoices, turning
            them into immediate cash with a simple click.{" "}
            <strong>
              {" "}
              We understand that steady cash-flow is crucial for any business to
              thrive, and we{"'"}
              re dedicated to ensuring our clients{"'"} success.
            </strong>
          </div>
        </div>
        <div className="row line-programs pt-4 pb-4">
          <div className="col-4">
            {" "}
            <h1 className="fw-bold fs-2 mb-0 mx-4 w-75">
              Why Choose Smart Fleet Funding
            </h1>
            <div className="line-program mt-0 mx-4 mt-1 w-3"></div>
          </div>
          <div className="col-8">
            Our dedication to innovation and building strong client
            relationships sets us apart. We prioritize financial accountability
            and transparency as the cornerstone of every successful business.
            Each client, regardless of size, receives our utmost attention.{" "}
            <strong>
              {" "}
              We continually seek new ways to expedite processes, ensuring that
              every client feels valued and prioritized.
            </strong>
          </div>
        </div>
        <div className="row  pt-4 pb-5">
          <div className="col-4">
            {" "}
            <h1 className="fw-bold fs-2 mb-0 mx-4 w-75">
              Why Choose Smart Fleet Funding
            </h1>
            <div className="line-program mt-0 mx-4 mt-1 w-3"></div>
          </div>
          <div className="col-8">
            Choosing Smart Fleet Funding means choosing a partner invested in
            your success. We specialize in tailoring funding solutions for
            trucking companies, enabling them to get paid faster and offering
            significant discounts to boost profitability.{" "}
            <strong>
              {" "}
              With us, you{"'"}re not just a client; you{"'"}re a valued partner
              on the path to
            </strong>
            success.
          </div>
        </div>
      </div>
    </>
  );
}
