import { Col, Container, Row } from "react-bootstrap";

export default function Steps() {
  const steps = [
    {
      title: "Swift Payment Process",
      text: "With Instapay, you'll receive your hard-earned money in as little as 12 business hours. No more waiting, no more delays, no contracts, no hidden fees.",
    },
    {
      title: "Streamlined Verification",
      text: "The partnership between Smart Fleet Funding and a selected group of Freight Brokers means a hassle-free process. Just submit your invoices, and we'll handle the rest. It is that simple!",
    },
    {
      title: "Fast and Secure",
      text: "Instapay is not only quick but also secure. Your funds are directly deposited into your bank account, ensuring a safe and seamless transaction.",
    },
  ];

  return (
    <>
      <section className="py-5 bg-white-shadow font-montserrat">
        <Container>
          <h1 className="fw-600 fs-2 mb-0 mx-4">How it works</h1>
          <div className="line mt-0 mb-6 mx-4 mt-1 w-3"></div>
          <Row className="d-flex flex-column m-5 m-3rem">
            {steps.map((step, index) => (
              <div className="step-container" key={index}>
                <div className="step-number position-relative">
                  {index + 1}{" "}
                </div>
                <div className="step-content fs-5">
                  <h3 className="fw-bold">{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </div>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
}
