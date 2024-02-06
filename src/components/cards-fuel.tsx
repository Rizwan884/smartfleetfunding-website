import { Button, Card, Col, Container, Row } from "react-bootstrap";
import Image from "react-bootstrap/Image";
export default function CardsFuel() {
    return (
        <>

<div className="card-container font-montserrat mt-1 h-100 flex-column w-100">
        <div className="row mx-0 px-0 px-md-auto mx-md-auto mb-3 w-75 justify-content-center  gap-3 gap-md-auto">
          <Card className="mx-3 w-100 bg-light text-dark h-100">
            <Card.Body className="text-start">
              <Image
                alt="icons"
                src="images/sff-transaction-fuel.svg"
                className="w-30px mb-4"
              ></Image>
              <Card.Text className="fs-5 lh-sm mt-3">
              <strong className="">Low transaction fees on your fuel and maintenance purchases in Canada and the U.S.</strong> 
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="mx-3 w-100 bg-light text-dark h-100">
            <Card.Body className="text-start">
              <Image
                alt="icons"
                src="images/sff-cash-price-fuel.svg"
                className="w-30px mb-4"
              ></Image>
              <Card.Text className="fs-5 lh-sm mt-3">
              <strong className="">CASH PRICE at the pump every time you swipe at over 14,000 truck stops and service centers across Canada and the U.S.</strong> 
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="mx-3 w-100 bg-light text-dark h-100">
            <Card.Body className="text-start">
              <Image
                alt="icons"
                src="images/sff-fuel.svg"
                className="w-30px mb-4"
              ></Image>
              <Card.Text className="fs-5 lh-sm mt-3">
                <strong className="">Significant fuel discounts at TA/Petro and over 1,200 independent and small chain locations.</strong> 
    
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        
      </div>

        </>
    );

}