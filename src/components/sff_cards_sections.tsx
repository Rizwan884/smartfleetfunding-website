import SFFcards from "../components/sff_cards";
export default function SFFcardsSections() {
  return (
    <>
      <div className="gray-section">{/* Contenido de la sección gris */}</div>
      <SFFcards />
      <div className="white-section">
        {/* Contenido de la sección blanca */}
        <h2>Sección Blanca</h2>
        <p>Este es el contenido de la sección blanca.</p>
      </div>
    </>
  );
}
