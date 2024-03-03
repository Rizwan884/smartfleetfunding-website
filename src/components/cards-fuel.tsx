import { Card } from 'react-bootstrap'
import Image from 'react-bootstrap/Image'
import { useMediaQuery } from 'react-responsive'
export default function CardsFuel() {
  const isMobile = useMediaQuery({ maxWidth: 767 })
  return (
    <>
      {isMobile ? (
        <div className="card-container font-montserrat mt-1 h-100 flex-column w-100">
          <div className="row mx-0 px-0 px-md-auto mx-md-auto mb-3 w-75 justify-content-center gap-3 gap-md-auto">
            <Card className="mx-3 w-100 bg-light text-dark h-100 d-flex align-items-center">
              <Card.Body className="text-start d-flex align-items-left">
                <div className="w-75">
                  <Image
                    alt="icons"
                    src="images/sff-transaction-fuel.svg"
                    className="w-75 h-100"
                  />
                </div>
                <div>
                  <Card.Text className="fs-6 lh-sm mt-1 text-left text-md-start">
                    <strong>
                      Low transaction fees on your fuel and maintenance
                      purchases in Canada and the U.S.
                    </strong>
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
            <Card className="mx-3 w-100 bg-light text-dark h-100 d-flex align-items-left">
              <Card.Body className="text-start d-flex align-items-center">
                <div className="w-75">
                  <Image
                    alt="icons"
                    src="images/sff-cash-price-fuel.svg"
                    className="w-75 h-100"
                  />
                </div>
                <div>
                  <Card.Text className="fs-6 lh-sm mt-1 text-left text-md-start">
                    <strong>
                      CASH PRICE at the pump every time you swipe at over 14,000
                      truck stops and service centers across Canada and the U.S.
                    </strong>
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
            <Card className="mx-3 w-100 bg-light text-dark h-100 d-flex align-items-left">
              <Card.Body className="text-start d-flex align-items-center">
                <div className="w-75">
                  <Image
                    alt="icons"
                    src="images/sff-fuel.svg"
                    className="w-75 h-100"
                  />
                </div>
                <div>
                  <Card.Text className="fs-6 lh-sm mt-1 text-left text-md-start">
                    <strong>
                      Significant fuel discounts at TA/Petro and over 1,200
                      independent and small chain locations.
                    </strong>
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>
      ) : (
        <div className="card-container font-montserrat mt-1 h-100 flex-column w-100">
          <div className="row mx-0 px-0 px-md-auto mx-md-auto mb-3 w-65 justify-content-center gap-3 gap-md-auto">
            <Card className="mx-3 mb-4 w-100 bg-light text-dark h-100 d-flex align-items-center">
              <Card.Body className="text-start d-flex align-items-left">
                <div className="w-25px me-3">
                  <Image
                    alt="icons"
                    src="images/sff-transaction-fuel.svg"
                    className="w-75 h-100"
                  />
                </div>
                <div>
                  <Card.Text className="fs-5 lh-sm mt-1 text-center text-md-start">
                    <strong>
                      Low transaction fees on your fuel and maintenance
                      purchases in Canada and the U.S.
                    </strong>
                    <strong></strong>
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
            <Card className="mx-3 mb-4 w-100 bg-light text-dark h-100 d-flex align-items-left">
              <Card.Body className="text-start d-flex align-items-center">
                <div className="w-25px me-4">
                  <Image
                    alt="icons"
                    src="images/sff-cash-price-fuel.svg"
                    className="w-100 h-100"
                  />
                </div>
                <div>
                  <Card.Text className="fs-5 lh-sm mt-1 text-center text-md-start">
                    <strong>
                      CASH PRICE at the pump every time you swipe at over 14,000
                      truck stops and service centers across Canada and the U.S.
                    </strong>
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
            <Card className="mx-3 mb-4 w-100 bg-light text-dark h-100 d-flex align-items-left">
              <Card.Body className="text-start d-flex align-items-center">
                <div className="w-25px me-3">
                  <Image
                    alt="icons"
                    src="images/sff-fuel.svg"
                    className="w-75 h-100"
                  />
                </div>
                <div>
                  <Card.Text className="fs-5 lh-sm mt-1 text-center text-md-start">
                    <strong>
                      Significant fuel discounts at TA/Petro and over 1,200
                      independent and small chain locations.
                    </strong>
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>
      )}
    </>
  )
}
