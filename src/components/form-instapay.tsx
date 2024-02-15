import { FormEvent } from "react";
export default function FormInstapay() {
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const response = await fetch(
      "https://1170027-sb1.extforms.netsuite.com/app/site/crm/externalleadpage.nl?compid=1170027_SB1",
      {
        method: "POST",
        body: formData,
      }
    ); // Handle response if necessary
    console.log(await response.json());
  }
  return (
    <>
      <div className=" mt-6 font-montserrat fi-img">
        <div className="pt-5 px-5">
          <h1 className="fw-600 fs-2 text-center text-md-start fst-italic text-dark-blue w-100 w-md-65">
            Contact us today and let{"'"}s get you on the road to faster, more
            secure payments with Instapay.
          </h1>
        </div>
        <div className="d-flex">
          {" "}
          <div className="h-100 w-50 w-md-100 text-dark-blue">
            <form
              action="https://flow.zoho.com/785473680/flow/webhook/incoming?zapikey=1001.1efe7f16cde72a5dc615d742476cc36e.fe77873c5c71e0bc95b7b8bb11dddbb8&isdebug=false"
              method="POST"
              id="form-instapay"
              className="mx-5 my-5 m-md-5"
              target="#"
            >
              <div className="row mb-3 flex-md-row flex-column ">
                <div className="col">
                  <input
                    type="text"
                    className="form-control mb-3 mb-md-1 px-3 bg-grey-transparent text-dark-blue"
                    id="fullname"
                    name="name"
                    placeholder="Full Name"
                  ></input>
                </div>
                <div className="col">
                  <input
                    type="email"
                    className="form-control px-3 bg-grey-transparent text-dark-blue"
                    id="fullemail"
                    name="email"
                    placeholder="Your E-Mail"
                  ></input>
                </div>
              </div>
              <div className="row mb-3 flex-md-row flex-column">
                <div className="col">
                  <input
                    type="text"
                    className="form-control mb-3 mb-md-1 px-3 bg-grey-transparent text-dark-blue"
                    id="fullcompany"
                    name="company"
                    placeholder="Company Name"
                  ></input>
                </div>
                <div className="col">
                  <input
                    type="number"
                    className="form-control px-3 bg-grey-transparent text-dark-blue"
                    id="fullphone"
                    name="phone"
                    placeholder="Phone"
                  ></input>
                </div>
              </div>
              <div className="row mb-3 flex-md-row flex-column ">
                <div className="col-12 col-md-6">
                  <input
                    type="text"
                    className="form-control px-3 bg-grey-transparent text-dark-blue"
                    id="freight"
                    name="freight"
                    placeholder="Freight broker"
                  ></input>
                </div>
              </div>
              <div className="mb-3 ">
                <textarea
                  className="form-control bg-grey-transparent text-dark-blue"
                  id="comments"
                  name="comments"
                  rows={3}
                  placeholder="Comments"
                ></textarea>
              </div>
              <div className="text-end text-md-start">
                <button id="btn-insta" type="submit" className="btn fw-600 ">
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
