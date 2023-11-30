import { Carousel, Button } from "react-bootstrap";

// Interfaz para describir los estilos personalizados
interface CarouselImageStyles {
  backgroundSize: string;
  backgroundPosition: string;
  height: string;
  position: string;
}

const carouselImage = {
  backgroundSize: "cover",
  backgroundPosition: "center center",
  height: "400px", // Ajusta la altura según tus necesidades
  position: "relative" as "relative",
};

export default function Slider() {
  return (
    <Carousel className="font-montserrat" controls={false}>
      <Carousel.Item>
        <div
          style={{
            ...carouselImage,
            backgroundImage: 'url("images/sff-truck.jpg")',
          }}
        >
          <div className="slider-container slider-container mx-4">
            <h1 className="text-start fs-3">
              Maximize your business{"'"}s potential <br />
              <strong>with Smart Fleet Funding</strong>
            </h1>
            <Button
              className="contact_slide fw-bold  my-4 h-25 d-inline-block"
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
          <div className="slider-container slider-container mx-4">
            <h1 className="text-start fs-3">
              Your success, <strong>Our story</strong>
            </h1>
            <Button
              className="contact_slide fw-bold my-4 h-25 d-inline-block "
              variant="btn btn-custom"
            >
              Take the First Step
            </Button>
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
          <div className=" slider-container mx-4">
            <h1 className="text-start fs-3">
              Let us be part of your <br />
              <strong>success story</strong>
            </h1>
            <Button
              className="contact_slide fw-bold my-4 h-25 d-inline-block"
              variant="btn btn-custom"
            >
              CASH NOW
            </Button>
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}
