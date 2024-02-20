import Link from "next/link";
import { FormEvent, useState } from "react";
import { ReCaptchaProvider, ReCaptcha } from "next-recaptcha-v3";
type IProps = {
  backgroundImage?: string;
  titleForm?: string | undefined;
};

export default function SectionForm({ backgroundImage, titleForm }: IProps) {
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!captchaToken) {
      alert("Please complete the CAPTCHA.");
      return;
    }
    const formData = new FormData(event.currentTarget);
    formData.append("g-recaptcha-response", captchaToken);
    const response = await fetch(
      "https://1170027-sb1.extforms.netsuite.com/app/site/crm/externalleadpage.nl?compid=1170027_SB1",
      {
        method: "POST",
        body: formData,
      }
    ); // Handle response if necessary
    console.log(await response.json());
  }
  function handleCaptcha(token: string | null) {
    setCaptchaToken(token);
  }
  return (
    <>
      <ReCaptchaProvider
        reCaptchaKey="6LcFjngpAAAAADl83-kyPjhdeSwnUKV37e_RFBMF"
        language="en"
      >
        <div className="d-flex flex-column-reverse flex-md-row mt-6">
          <div className="md-w-50 w-100 bg-dark-blue text-white">
            <form onSubmit={onSubmit} id="form" className="m-5">
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
                <ReCaptcha action="submit" onValidate={handleCaptcha as any} />
                <button type="submit" className="btn fw-600">
                  SEND
                </button>
              </div>
            </form>
          </div>
          <div className="md-w-50 w-100">
            <div className="position-relative h-100">
              <div
                style={{ width: "100%", height: "100%", overflow: "hidden" }}
              >
                <img
                  className="w-100 h-100"
                  style={{
                    objectFit: "cover",
                  }}
                  src="images/sff-form.jpg"
                  alt="form"
                />
              </div>
            </div>
          </div>
        </div>
      </ReCaptchaProvider>
    </>
  );
}
