import { Button } from 'react-bootstrap'
import { useMediaQuery } from 'react-responsive'
const Image = {
  backgroundSize: 'cover',
  backgroundPosition: 'center center',
  height: '500px'
}
export default function ImgInfo() {
  const isMobile = useMediaQuery({ maxWidth: 767 })
  return (
    <>
      {isMobile ? (
        <div>
          <div
            className=""
            style={{
              ...Image,
              backgroundImage: 'url("images/sff-truck-driver-vertical.webp")',
              marginTop: '40px'
            }}
          ></div>
          <div className="  font-montserrat pt-2 mx-5 mb-5">
            <h1 className="text-start fw-bold fs-4">
              Interested in learning more? <br /> Give us a call today!
              <div className="line"></div>
            </h1>
            <div className="lh-sm card-text-bottom fw-400">
              We{"'"}re here to answer all your questions and help you find the
              best solutions for your trucking business.
            </div>

            <Button
              href="tel:+18888755506"
              className="contact_slide fw-bold px-4 my-4 h-25 d-inline-block"
              variant="btn btn-custom"
            >
              Let{"'"}s Talk
            </Button>
          </div>
        </div>
      ) : (
        <div
          style={{
            ...Image,
            backgroundImage: 'url("images/sff-truck-driver.webp")',
            marginRight: '80px',
            marginTop: '40px'
          }}
        >
          <div className=" info-container font-montserrat pt-6 mx-5">
            <h1 className="text-end fw-bold fs-3">
              Interested in learning more? <br /> Give us a call today!
              <div className="ms-auto line"></div>
            </h1>
            <div className="card-text-bottom fw-400">
              We{"'"}re here to answer all your questions and <br /> help you
              find the best solutions for your <br /> trucking business.
            </div>

            <Button
              href="tel:+18888755506"
              className="contact_slide fw-bold  my-4 h-25 d-inline-block"
              variant="btn btn-custom"
            >
              Let{"'"}s Talk
            </Button>
          </div>
        </div>
      )}
    </>
  )
}
