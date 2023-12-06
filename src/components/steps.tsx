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
    <section className="py-5 bg-white-shadow">
      <Container>
        <Row className="d-flex flex-column">
          {steps.map((step, index) => (
            <>
              <div className="col">
                <div className="me-3">
                  <div className="step-number">{index + 1}</div>
                </div>
              </div>
              <div className="col" key={index}>
                <div className="d-flex">
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.text}</p>
                  </div>
                </div>
              </div>
            </>
          ))}
        </Row>
      </Container>
    </section>
  );
}
