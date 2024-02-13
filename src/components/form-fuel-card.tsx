import Link from "next/link";

type IProps = {
  backgroundImage?: string;
  titleForm?: string | undefined;
};

export default function FormFuelCard({ backgroundImage, titleForm }: IProps) {
  return (
    <>
      <div className="d-flex font-montserrat flex-column-reverse flex-md-row mt-6 pb-4">
        <div className="md-w-50 w-100 bg-dark-blue text-white">
          <form
            action="https://flow.zoho.com/785473680/flow/webhook/incoming?zapikey=1001.1efe7f16cde72a5dc615d742476cc36e.fe77873c5c71e0bc95b7b8bb11dddbb8&isdebug=false"
            method="POST"
            id="form"
            className="m-5"
            target="#"
          >
            <h1
              className=" fs-2 text-left fst-italic"
              style={{ marginBottom: "30px" }}
            >
              {titleForm}
              <div className="line "></div>
            </h1>
            <div className="row mb-3 flex-md-row flex-column">
              <div className="mb-3">
                <select
                  id="form-fuel-card"
                  className="form-select  bg-grey-transparent text-white"
                  aria-label="Default select example"
                >
                  <option className="bg-dark-blue text-white" selected>
                    I{"'"}m considering applying for the Fuel Card
                  </option>
                  <option className="bg-dark-blue text-white" value="1">
                    I{"'"}d like more information about the Fuel Card
                  </option>
                  <option className="bg-dark-blue text-white" value="2">
                    I have questions about the Fuel Card
                  </option>
                  <option className=" bg-dark-blue  text-white" value="3">
                    I{"'"}m already a Fuel Card holder and need assistance
                  </option>
                  <option className=" bg-dark-blue  text-white" value="3">
                    I want to learn about other services offered
                  </option>
                </select>
              </div>
              <div className="col ">
                <input
                  type="text"
                  className="form-control mb-3 mb-md-0 px-3 bg-grey-transparent text-white"
                  id="name"
                  name="name"
                  placeholder="Full Name"
                ></input>
              </div>
              <div className="col">
                <input
                  type="email"
                  className="form-control px-3 bg-grey-transparent text-white"
                  id="email"
                  name="email"
                  placeholder="Your E-Mail"
                ></input>
              </div>
            </div>
            <div className="row mb-3 flex-md-row flex-column">
              <div className="col">
                <input
                  type="text"
                  className="form-control mb-3 mb-md-0 px-3 bg-grey-transparent text-white"
                  id="company"
                  name="company"
                  placeholder="Company Name"
                ></input>
              </div>
              <div className="col">
                <input
                  type="number"
                  className="form-control px-3 bg-grey-transparent text-white"
                  id="phone"
                  name="phone"
                  placeholder="Phone"
                ></input>
              </div>
            </div>
            <div className="mb-3">
              <textarea
                className="form-control bg-grey-transparent text-white"
                id="message"
                name="message"
                rows={3}
                placeholder="Description"
              ></textarea>
            </div>

            <div className=" col mb-3 form-check d-flex justify-content-between">
              <div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    Acept Our{" "}
                    <Link
                      href="/privacy"
                      target="_blank"
                      className="text-decoration-none text-green"
                      passHref={true}
                    >
                      <strong>Privacy Policy</strong>
                    </Link>
                  </label>
                </div>
              </div>

              <button type="submit" className="btn fw-600">
                SEND
              </button>
            </div>
          </form>
        </div>
        <div className="md-w-50 w-100">
          <div className="position-relative h-100">
            <div style={{ width: "100%", height: "100%", overflow: "hidden" }}>
              <img
                className="w-100 h-100"
                style={{
                  objectFit: "cover",
                }}
                src="images/sff-fuel-card-form.jpg"
                alt="form"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
