import { Carousel, Button } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";
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
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return (
    <>
      {isMobile ? (
        <Carousel className="font-montserrat" controls={false}>
          <Carousel.Item>
            <div
              style={{
                ...carouselImage,
                backgroundImage: 'url("images/sff-truck-mobile.jpg")',
              }}
            >
              <div className="slider-container-mobile mx-4">
                <h1 className="text-start fs-4">
                  Maximize your business{"'"}s potential <br />
                  <strong>with Smart Fleet Funding</strong>
                </h1>
                <div className="mt-5">
                  <Button
                    href="tel:+18302097589"
                    className="contact_slide fw-bold  my-4 h-25 d-inline-block"
                    variant="btn btn-custom"
                  >
                    GET STARTED
                  </Button>
                </div>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div
              style={{
                ...carouselImage,
                backgroundImage: 'url("images/sff-truck-logistic-mobile.jpg")',
              }}
            >
              <div className="slider-container-mobile mx-4">
                <h1 className="text-start fs-3">
                  Your success, <strong>Our story</strong>
                </h1>
                <Button
                  href="mailto:nluna@smartfleetfunding.com"
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
                backgroundImage: 'url("images/sff-succes-story-mobile.jpg")',
              }}
            >
              <div className=" slider-container-mobile mx-4">
                <h1 className="text-start fs-3">
                  Let us be part of your <br />
                  <strong>success story</strong>
                </h1>
                <Button
                  href="mailto:dbiojo@smartfleetfunding.com"
                  className="contact_slide fw-bold my-4 h-25 d-inline-block"
                  variant="btn btn-custom"
                >
                  CASH NOW
                </Button>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      ) : (
        <Carousel className="font-montserrat" controls={false}>
          <Carousel.Item>
            <div
              style={{
                ...carouselImage,
                backgroundImage: 'url("images/sff-truck.webp")',
              }}
            >
              <div className="slider-container slider-container mx-4">
                <h1 className="text-start fs-3">
                  Maximize your business{"'"}s potential <br />
                  <strong>with Smart Fleet Funding</strong>
                </h1>
                <Button
                  href="tel:+18302097589"
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
                backgroundImage: 'url("images/sff-truck-logistic.webp")',
              }}
            >
              <div className="slider-container slider-container mx-4">
                <h1 className="text-start fs-3">
                  Your success, <strong>Our story</strong>
                </h1>
                <Button
                  href="mailto:nluna@smartfleetfunding.com"
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
                  href="mailto:dbiojo@smartfleetfunding.com"
                  className="contact_slide fw-bold my-4 h-25 d-inline-block"
                  variant="btn btn-custom"
                >
                  CASH NOW
                </Button>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      )}
    </>
  );
}
