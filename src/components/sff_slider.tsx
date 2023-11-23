import { Carousel, Button } from "react-bootstrap";

// Interfaz para describir los estilos personalizados
interface CarouselImageStyles {
  backgroundImage: string;
  backgroundSize: string;
  backgroundPosition: string;
  height: string;
  position: string;
}
interface ButtonContainerStyles {
  position: string;
  top: string;
  left: string;
  transform: string;
  textAlign: string;
}
const carouselImage = {
  // backgroundImage: 'url("images/sff-truck.jpg")',
  backgroundSize: "cover",
  backgroundPosition: "center center",
  height: "400px", // Ajusta la altura según tus necesidades
  position: "relative" as "relative",
};

const buttonContainer = {
  position: "absolute",
  top: "50%", // Centra verticalmente
  //   left: "50%", // Centra horizontalment
  transform: "translate(10%, -20%)", // Centra el contenido
  textAlign: "center",
};

export default function SFFslider() {
  return (
    <Carousel controls={false}>
      <Carousel.Item>
        <div
          style={{
            ...carouselImage,
            backgroundImage: 'url("images/sff-truck.jpg")',
          }}
        >
          <div style={buttonContainer}>
            <h1 className="text-start fs-3">
              Maximize your business's potential <br />
              with Smart Fleet Funding
            </h1>
            <Button
              className="contact_slide fw-bold mx-4 my-4 h-25 d-inline-block"
              variant="btn btn-custom"
            >
              GET STARTED
            </Button>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div
          style={{
            ...carouselImage,
            backgroundImage: 'url("images/sff-truck-logistic.jpg")',
          }}
        >
          <div style={buttonContainer}>
            <h1 className="text-start fs-3">
              Maximize your business's potential <br />
              with Smart Fleet Funding
            </h1>
            <Button
              className="contact_slide fw-bold mx-4 my-4 h-25 d-inline-block"
              variant="btn btn-custom"
            >
              GET STARTED
            </Button>
            {/* <Button
              className="cash_slide fw-bold mx-4 my-4 h-25 d-inline-block"
              variant="btn btn-custom"
            >
              CASH NOW
              <img
                src="images/sff-arrow-right.jpg"
                alt="arrorw"
                className="arrow-image "
              />
            </Button> */}
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div
          style={{
            ...carouselImage,
            backgroundImage: 'url("images/sff-succes-story.jpg")',
          }}
        >
          <div style={buttonContainer}>
            <h1 className="text-start fs-3">
              Maximize your business's potential <br />
              with Smart Fleet Funding
            </h1>
            <Button
              className="contact_slide fw-bold mx-4 my-4 h-25 d-inline-block"
              variant="btn btn-custom"
            >
              GET STARTED
            </Button>
            {/* <Button
              className="cash_slide fw-bold mx-4 my-4 h-25 d-inline-block"
              variant="btn btn-custom"
            >
              CASH NOW
              <img
                src="images/sff-arrow-right.jpg"
                alt="arrorw"
                className="arrow-image "
              />
            </Button> */}
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}
