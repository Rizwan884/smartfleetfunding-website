import { Button, Carousel } from "react-bootstrap";
import Image from "react-bootstrap/Image";
const carouselIdea = {
  backgroundSize: "cover",
  backgroundPosition: "center center",
  height: "400px",
  position: "relative" as "relative",
};
export default function Ideas() {
  return (
    <>
      <div className="container font-montserrat mt-5 mb-5 text-center text-md-start ">
        <h2 className="fw-600 ">PREMIUM FACTORING SERVICES</h2>
        <p className="fw-500 fs-5">
          Same day payment* with preferential rates and personalized service,
          <strong> no penalty clauses or minimum amount.</strong>
        </p>
      </div>
      <Carousel
        id="idea-carrusel"
        className="font-montserrat container "
        controls={false}
      >
        <Carousel.Item className="bg-grey">
          <div
            style={{
              ...carouselIdea,
            }}
          >
            <div className="mt-5 mx-4">
              <h1 className="text-start fs-3 fw-600 ms-4 d-none d-sm-block">
                Does this sound familiar to you?
                <div
                  className="line"
                  style={{
                    marginTop: "0",
                    width: "40.9px",
                  }}
                ></div>
              </h1>
              <Image
                className="mt-5 mx-4"
                src="images/sff-ff-icon.svg"
                alt=""
                style={{ width: "38px" }}
              ></Image>
              <div className="line-idea"></div>
              <h2 className="mx-4 fs-3 fw-400">
                “I call my factoring company and
                <strong className="mx-2">
                  they <br /> don’t answer the phone.”
                </strong>
              </h2>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item className="bg-grey">
          <div
            style={{
              ...carouselIdea,
            }}
          >
            <div className="mt-5 mx-4">
              <h1 className="text-start fs-3 fw-600 ms-4 d-none d-sm-block">
                Does this sound familiar to you?
                <div
                  className="line"
                  style={{
                    marginTop: "0",
                    width: "40.9px",
                  }}
                ></div>
              </h1>
              <Image
                className="mt-5 mx-4"
                src="images/sff-ff-icon.svg"
                alt=""
                style={{ width: "38px" }}
              ></Image>
              <div className="line-idea"></div>
              <h2 className="mx-4 fs-3 fw-400">
                “I could get better rates{" "}
                <strong className="mx-2">
                  <br />
                  but penalty clauses or a contract makes it a difficult.
                </strong>
              </h2>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item className="bg-grey">
          <div
            style={{
              ...carouselIdea,
            }}
          >
            <div className="mt-5 mx-4">
              <h1 className="text-start fs-2 fw-600 ms-4 d-none d-sm-block">
                Does this sound familiar to you?
                <div
                  className="line"
                  style={{
                    marginTop: "0",
                    width: "40.9px",
                  }}
                ></div>
              </h1>
              <Image
                className="mt-5 mx-4"
                src="images/sff-ff-icon.svg"
                alt=""
                style={{ width: "38px" }}
              ></Image>
              <div className="line-idea"></div>
              <h2 className="mx-4 fs-4 fw-400">
                “
                <strong className="mx-2">
                  I{"'"}m tired of collecting and paying bills
                </strong>{" "}
                <br /> to have cash flow.”
              </h2>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item className="bg-grey">
          <div
            style={{
              ...carouselIdea,
            }}
          >
            <div className="mt-5 mx-4">
              <h1 className="text-start fs-2 fw-600 ms-4 d-none d-sm-block">
                Does this sound familiar to you?
                <div
                  className="line"
                  style={{
                    marginTop: "0",
                    width: "40.9px",
                  }}
                ></div>
              </h1>
              <Image
                className="mt-5 mx-4"
                src="images/sff-ff-icon.svg"
                alt=""
                style={{ width: "38px" }}
              ></Image>
              <div className="line-idea"></div>
              <h2 className="mx-4 fs-4 fw-400">
                “<strong> I feel frustrated </strong> because some clients{" "}
                <strong>do not pay on time</strong> <br />
                and I need immediate cashflow to operate.
              </h2>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item className="bg-grey">
          <div
            style={{
              ...carouselIdea,
            }}
          >
            <div className="mt-5 mx-4">
              <h1 className="text-start fs-2 fw-600 ms-4 d-none d-sm-block">
                Does this sound familiar to you?
                <div
                  className="line"
                  style={{
                    marginTop: "0",
                    width: "40.9px",
                  }}
                ></div>
              </h1>
              <Image
                className="mt-5 mx-4"
                src="images/sff-ff-icon.svg"
                alt=""
                style={{ width: "38px" }}
              ></Image>
              <div className="line-idea"></div>
              <h2 className="mx-4 fs-4 fw-400">
                “ I don{"'"}t understand{" "}
                <strong>what my factor charges me</strong> <br /> and all these
                hidden costs.
              </h2>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </>
  );
}
