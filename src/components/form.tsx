import Image from "next/image";
type IProps = {
  backgroundImage?: string;
  titleForm?: string | undefined;
};

export default function SectionForm({ backgroundImage, titleForm }: IProps) {
  return (
    <>
      <div className="d-flex flex-column-reverse flex-md-row mt-6">
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
        <div className="md-w-50 w-100">
          <div className="position-relative h-100">
            <div style={{ width: "100%", height: "100%", overflow: "hidden" }}>
              <Image
                className="position-relative"
                src={backgroundImage ? backgroundImage : ""}
                style={{
                  objectFit: "cover",
                }}
                alt="form"
                layout="fill"
                objectFit="cover"
              ></Image>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
