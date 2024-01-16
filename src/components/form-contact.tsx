import Image from "next/image";
type IProps = {
  backgroundImage?: string;
  titleForm?: string | undefined;
};

export default function FormContact({ backgroundImage, titleForm }: IProps) {
  return (
    <>
      <div className=" container d-flex flex-column flex-md-row mt-6  mp-contact font-montserrat pb-7rem ">
        <div className=" md-w-60  w-100">
          <div className="position-relative h-100">
            <Image
              src={` ${backgroundImage ? backgroundImage : ""}`}
              style={{ objectFit: "cover" }}
              alt="form"
              fill
            ></Image>
            <div className="position-relative">
              <div className="container">
                <h1 className="m-4 fs-3 position relative">
                  Contact us for{" "}
                  <strong>
                    Fast, Easy and <br />
                    Secure Funding Solutions
                  </strong>
                </h1>
                <div className="line-contact m-4"></div>
                <div className="row ">
                  <div className="text-left p-4 d-flex align-items-center gap-2">
                    <Image
                      className="img-style mt-1"
                      alt="icon"
                      width={30}
                      height={30}
                      src="images/sff-contact-phone.svg"
                    ></Image>
                    <div className="lh-sm">
                      <h2 className="fs-4 fw-600 text-dark-blue mt-1">
                        (888) 875-5506
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="row mt-14">
                  <div className="text-left p-4 d-flex align-items-center gap-2">
                    <Image
                      className="img-style mt-1"
                      alt="icon"
                      width={28}
                      height={28}
                      src="images/sff-contact-mail.svg"
                    ></Image>
                    <div className="">
                      <h2 className="fs-4 mt-3 fw-600 text-dark-blue">
                        info@smartfleetfunding.com
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
          <div className="md-w-50 w-100  bg-dark-blue text-white">
            <form
              action="https://flow.zoho.com/785473680/flow/webhook/incoming?zapikey=1001.1efe7f16cde72a5dc615d742476cc36e.fe77873c5c71e0bc95b7b8bb11dddbb8&isdebug=false"
              method="POST"
              id="form"
              className="m-3rem"
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
              <div className="row mb-3 flex-md-row flex-column">
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
              <div className="mb-3">
                <textarea
                  className="form-control bg-grey-transparent text-white"
                  id="message"
                  name="message"
                  rows={3}
                  placeholder="Description"
                ></textarea>
              </div>
              <div className="mb-3 form-check d-flex justify-content-between">
                <div>
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="language"
                    name="language"
                  ></input>
                  <label className="form-check-label">Spanish</label>
                </div>

                <button type="submit" className="btn fw-600">
                  SEND
                </button>
              </div>
            </form>
        </div>
      </div>
    </>
  );
}
