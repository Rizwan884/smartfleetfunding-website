import SFFcards from "../components/sff_cards";
import SFFcardsInfo from "./sff-cards-info";
import SFFimgInfo from "./sff_img_info";
export default function SFFcardsSections() {
  return (
    <>
      <div className="gray-section">{/* Contenido de la sección gris */}</div>
      <SFFcards />
      <div className="white-section">
        <SFFcardsInfo />
      </div>
      <SFFimgInfo />
    </>
  );
}
