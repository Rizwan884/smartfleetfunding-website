import { url } from "inspector";
import Image from "next/image";
export default function FormInstapay() {
  return (
    <>
      <div
        className=" mt-6 font-montserrat"
        style={{
          backgroundImage: "url(images/sff-form-instapay.jpg)",
          backgroundSize: "cover",
        }}
      >
        <div className="pt-5 px-5">
          <h1
            className="fw-600 fs-2 text-left fst-italic text-dark-blue"
            style={{ width: "65%" }}
          >
            Contact us today and let{"'"}s get you on the road to faster, more
            secure payments with Instapay.
          </h1>
        </div>
        <div className="d-flex">
          {" "}
          <div className="w-50 text-white">
            <form id="form-instapay" className="m-5" target="#">
              <div className="row mb-3 ">
                <div className="col">
                  <input
                    type="text"
                    className="form-control px-3 bg-grey-transparent text-white"
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
              <div className="row mb-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control px-3 bg-grey-transparent text-white"
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
              <div className="row mb-3 ">
                <div className="col-6">
                  <input
                    type="text"
                    className="form-control px-3 bg-grey-transparent text-white"
                    id="freight"
                    name="freight"
                    placeholder="Freight broker"
                  ></input>
                </div>
              </div>
              <div className="mb-3">
                <textarea
                  className="form-control bg-grey-transparent text-white"
                  id="comments"
                  name="comments"
                  rows={3}
                  placeholder="Comments"
                ></textarea>
              </div>
              <div>
                <button id="btn-insta" type="submit" className="btn fw-600">
                  SEND
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
