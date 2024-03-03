import Image from 'next/image'
import Link from 'next/link'
import { FormEvent } from 'react'
type IProps = {
  backgroundImage?: string
  titleForm?: string | undefined
}

export default function FormContact({ backgroundImage, titleForm }: IProps) {
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    await fetch(
      'https://flow.zoho.com/785473680/flow/webhook/incoming?zapikey=1001.1efe7f16cde72a5dc615d742476cc36e.fe77873c5c71e0bc95b7b8bb11dddbb8&isdebug=false',
      {
        method: 'POST',
        body: formData
      }
    )
  }
  return (
    <>
      <div className="container d-flex flex-column flex-md-row mp-contact font-montserrat ">
        <div className=" md-w-60  w-100">
          <div className="position-relative h-100">
            <Image
              src={`${backgroundImage || ''}`}
              style={{ objectFit: 'cover' }}
              alt="form"
              fill
            ></Image>
            <div className="position-relative ">
              <div className="container">
                <h1 className="p-4 pt-5 mt-5  mt-md-0 fs-3 position relative text-center text-md-start">
                  Contact us for{' '}
                  <strong>
                    Fast, Easy and <br />
                    Secure Funding Solutions
                  </strong>
                </h1>
                <div className="line-contact m-4"></div>
                <div className="row ">
                  <div
                    className="text-left mt-3 mt-md-0 p-md-4 d-flex align-items-center gap-2 justify-content-center justify-content-md-start
                  "
                  >
                    <Image
                      className="img-style mt-1"
                      alt="icon"
                      width={30}
                      height={30}
                      src="/images/sff-contact-phone.svg"
                    ></Image>
                    <div className="lh-sm ">
                      <h2 className="fs-4 fw-600 text-dark-blue mt-1">
                        <a className="remove-link-styles" href="tel:8888755506">
                          (888) 875-5506
                        </a>
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="row mt-md-14">
                  <div className="text-left mb-5 mb-md-0 p-2 p-md-4 d-flex align-items-center gap-2 justify-content-center justify-content-md-start">
                    <Image
                      className="img-style mt-1"
                      alt="icon"
                      width={28}
                      height={28}
                      src="/images/sff-contact-mail.svg"
                    ></Image>
                    <div className="">
                      <h2 className="fs-4 mt-3 fw-600 text-dark-blue">
                        <a
                          className="remove-link-styles"
                          href="mailto:ifo@smartfleetfunding.com"
                        >
                          info@smartfleetfunding.com
                        </a>
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="md-w-50 w-100  bg-dark-blue text-white">
          <form onSubmit={onSubmit} id="form" className="m-3rem">
            <input
              id="form-name"
              name="form-name"
              value="contact"
              type="hidden"
            ></input>
            <h1
              className=" fs-2 d-flex flex-column align-items-center align-items-md-start pb-3 pb-md-0 fst-italic"
              style={{ marginBottom: '30px' }}
            >
              {titleForm}
              <div className="line text-center text-md-left "></div>
            </h1>
            <div className="row gap-2 gap-md-0 mb-2 mb-md-3 flex-md-row flex-column">
              <div className="col">
                <input
                  type="text"
                  className="form-control px-3 bg-grey-transparent text-white"
                  id="name"
                  name="name"
                  required
                  placeholder="Full Name"
                ></input>
              </div>
              <div className="col">
                <input
                  type="email"
                  className="form-control px-3 bg-grey-transparent text-white"
                  id="email"
                  name="email"
                  required
                  placeholder="Your E-Mail"
                ></input>
              </div>
            </div>
            <div className="row gap-2 gap-md-0 mb-3 flex-md-row flex-column">
              <div className="col">
                <input
                  type="text"
                  className="form-control px-3 bg-grey-transparent text-white"
                  id="company"
                  name="company"
                  required
                  placeholder="Company Name"
                ></input>
              </div>
              <div className="col">
                <input
                  type="number"
                  className="form-control px-3 bg-grey-transparent text-white"
                  id="phone"
                  name="phone"
                  required
                  placeholder="Phone"
                ></input>
              </div>
            </div>
            <div className="mb-3">
              <textarea
                className="form-control bg-grey-transparent text-white"
                id="message"
                name="message"
                required
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
                    Accept Our{' '}
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
      </div>
    </>
  )
}
