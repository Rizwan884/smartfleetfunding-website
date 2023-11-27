import Cards from "./cards";
import CardsInfo from "./cards-info";
import ImgInfo from "./img_info";
export default function CardsSections() {
  return (
    <>
      <div className="gray-section"></div>
      <Cards />
      <div className="white-section">
        <CardsInfo />
      </div>
      <ImgInfo />
    </>
  );
}
