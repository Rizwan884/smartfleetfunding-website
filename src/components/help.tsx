import Image from "react-bootstrap/Image";
export default function Help() {
  return (
    <>
      <div className="container mt-5 ">
        <h1 className="fw-bold fs-2 text-center  flex-column align-items-center gap-3">
          We help you by
          <div
            className="line"
            style={{
              marginLeft: "40%",
              marginTop: "0",
              width: "40.9px",
              marginBottom: "10%",
            }}
          ></div>
        </h1>
      </div>
      <div id="help" className="container mt-5 mb-6">
        <div className="row mt-5 ">
          <div className="col-4 ">
            {" "}
            <div className="card " style={{ border: "10px" }}>
              <Image
                src="images/sff-hp-1.svg"
                style={{
                  width: "15%",
                  marginTop: "-21px",
                  marginBottom: "20px",
                }}
                className="card-img-top"
                alt="..."
              ></Image>
              <div className="card-body">
                <p className="card-text ">
                  <strong>
                    Always being there for you: <br />
                  </strong>{" "}
                  you call, we answer!
                </p>
              </div>
            </div>
          </div>

          <div className="col-4">
            {" "}
            <div className="card " style={{ border: "10px" }}>
              <Image
                src="images/sff-hp-2.svg"
                style={{
                  width: "15%",
                  marginTop: "-21px",
                  marginBottom: "20px",
                }}
                className="card-img-top"
                alt="..."
              ></Image>
              <div className="card-body">
                <p className="card-text">
                  <strong>
                    Transparency and honesty: <br />
                  </strong>{" "}
                  Our lockdown clause is service, simple flat fee, no penalties.
                </p>
              </div>
            </div>
          </div>
          <div className="col-4">
            {" "}
            <div className="card " style={{ border: "10px" }}>
              <Image
                src="images/sff-hp-3.svg"
                style={{
                  width: "15%",
                  marginTop: "-21px",
                  marginBottom: "20px",
                }}
                className="card-img-top"
                alt="..."
              ></Image>
              <div className="card-body">
                <p className="card-text">
                  <strong>
                    Money in your pocket instantly: <br />
                  </strong>{" "}
                  At lower rates: receive money for your loads in less than 12
                  business hours via direct deposit/ACH.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-6">
          <div className="col-4">
            {" "}
            <div className="card " style={{ border: "10px" }}>
              <Image
                src="images/sff-hp-4.svg"
                style={{
                  width: "15%",
                  marginTop: "-21px",
                  marginBottom: "20px",
                }}
                className="card-img-top"
                alt="..."
              ></Image>
              <div className="card-body">
                <p className="card-text">
                  <strong>
                    {" "}
                    More time for yourself: <br />
                  </strong>{" "}
                  Stop worrying about collecting from your brokers and shippers,
                  and reduce your short payments, charge-backs and headaches.
                </p>
              </div>
            </div>
          </div>
          <div className="col-4">
            {" "}
            <div className="card " style={{ border: "10px" }}>
              <Image
                src="images/sff-hp-5.svg"
                style={{
                  width: "15%",
                  marginTop: "-21px",
                  marginBottom: "20px",
                }}
                className="card-img-top"
                alt="..."
              ></Image>
              <div className="card-body">
                <p className="card-text">
                  <strong>
                    Empowering you with control: <br />
                  </strong>{" "}
                  online access to reports and valuable information about your
                  loads.
                </p>
              </div>
            </div>
          </div>
          <div className="col-4">
            {" "}
            <div className="card " style={{ border: "10px" }}>
              <Image
                src="images/sff-hp-6.svg"
                style={{
                  width: "15%",
                  marginTop: "-21px",
                  marginBottom: "20px",
                }}
                className="card-img-top"
                alt="..."
              ></Image>
              <div className="card-body">
                <p className="card-text">
                  <strong>
                    Smooth operations: <br />
                  </strong>{" "}
                  Monitor all your loads in your portfolio. If any issues
                  require your attention, we promptly inform you.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="row mt-6"
          style={{ justifyContent: "center", marginBottom: "13%" }}
        >
          <div className="col-4">
            {" "}
            <div className="card " style={{ border: "10px" }}>
              <Image
                src="images/sff-hp-7.svg"
                style={{
                  width: "15%",
                  marginTop: "-21px",
                  marginBottom: "20px",
                }}
                className="card-img-top"
                alt="..."
              ></Image>
              <div className="card-body">
                <p className="card-text">
                  <strong>
                    Informed decisions about your prospects: <br />
                  </strong>{" "}
                  Free credit checks.
                </p>
              </div>
            </div>
          </div>
          <div className="col-4">
            {" "}
            <div className="card " style={{ border: "10px" }}>
              <Image
                src="images/sff-hp-8.svg"
                style={{
                  width: "15%",
                  marginTop: "-21px",
                  marginBottom: "20px",
                }}
                className="card-img-top"
                alt="..."
              ></Image>
              <div className="card-body">
                <p className="card-text">
                  <strong>
                    Personalized Financial Guidance: <br />
                  </strong>{" "}
                  Our account executives offer tailored financial solutions for
                  your carrier business.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
