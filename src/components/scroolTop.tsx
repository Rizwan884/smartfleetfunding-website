import React, { useState, useEffect } from "react";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isFixed, setIsFixed] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    // Mostrar el botón cuando el desplazamiento sea mayor que 100px
    const currentScrollPos = window.scrollY;
    setIsVisible(currentScrollPos > 200);

    const footer = document.getElementById("footer");
    const footerPosition = footer ? footer.offsetTop : 0;

    setIsFixed(currentScrollPos < footerPosition - 810);
    console.log(isFixed);
    console.log(isVisible);
  };

  useEffect(() => {
    // Agregar un listener para el evento de desplazamiento
    window.addEventListener("scroll", handleScroll);
    console.log(isFixed);
    console.log(isVisible);
    // Limpiar el listener cuando el componente se desmonta
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`scroll-to-top-button ${isVisible ? "visible" : ""} ${
        isFixed ? "position-fixed" : ""
      } ${!isFixed ? "float-end" : ""} ${!isFixed ? "me-4" : ""}`}
      onClick={scrollToTop}
    >
      {/* Puedes cambiar la ruta a tu propia imagen */}
      <img style={{ width: "30px" }} src="images/sff-arrow-up.svg" />
    </div>
  );
};

export default ScrollToTopButton;
