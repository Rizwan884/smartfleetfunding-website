import Image from 'react-bootstrap/Image'
export default function Benefits() {
  return (
    <>
      <div className="container mt-7 pb-5 font-montserrat">
        <div className="d-flex flex-column align-items-center">
          <div className="line width-bf fw-600 mb-2 ms-3 align-item-center"></div>
          <h1 className="fw-600 fs-2 text-center  flex-column align-items-center gap-3">
            Benefits for Drivers
          </h1>
        </div>
        <div className="row mt-5">
          <div className="col-12 col-md-6">
            <div className="text-left  p-5 d-flex align-items-center gap-2">
              <Image
                className="img-style"
                alt="icon"
                src="/images/sff-bff-dollar.svg"
              ></Image>
              <div className="lh-sm">
                <h2 className="fs-3 fw-600 text-green ">Cash Flow control</h2>
                <div className="fs-5 fw-400">
                  Gain control over your finances, ensuring you have the
                  resources you need for fuel, maintenance, and more, exactly
                  when you need them.
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="text-left  p-5 d-flex align-items-center gap-2">
              <Image
                className="img-style2"
                alt="icon"
                src="/images/sff-bff-hand.svg"
              ></Image>
              <div className="lh-sm">
                <h2 className="fs-3 fw-600 text-green ">No Holdbacks</h2>
                <div className="fs-5 fw-400">
                  We advance 100% minus the Instapay fee.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="text-left  p-5 d-flex align-items-center gap-2">
              <Image
                className="img-style3"
                alt="icon"
                src="/images/sff-bff-check.svg"
              ></Image>
              <div className="lh-sm">
                <h2 className="fs-3 fw-600 text-green ">
                  Access Anytime, Anywhere
                </h2>
                <div className="fs-5 fw-400">
                  Instapay gives you the freedom to access your funds from
                  wherever your journey takes you.
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="text-left  p-5 d-flex align-items-center gap-2">
              <Image
                className="img-style4"
                alt="icon"
                src="/images/sff-bff-earphones.svg"
              ></Image>
              <div className="lh-sm">
                <h2 className="fs-3 fw-600 text-green ">
                  Professional Support
                </h2>
                <div className="fs-5 fw-400">
                  Our Accounts Receivable team is dedicated to working on your
                  behalf, ensuring you receive the full benefits of our service.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
