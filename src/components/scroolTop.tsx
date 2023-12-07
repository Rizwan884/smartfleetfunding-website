import React, { useState, useEffect } from "react";
import Image from "react-bootstrap/Image";

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
    const currentScrollPos = window.scrollY;
    setIsVisible(currentScrollPos > 200);

    const footer = document.getElementById("footer");
    const footerPosition = footer ? footer.offsetTop : 0;

    setIsFixed(currentScrollPos < footerPosition - 810);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

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
      <Image
        alt="scroll"
        style={{ width: "30px" }}
        src="images/sff-arrow-up.svg"
      ></Image>
    </div>
  );
};

export default ScrollToTopButton;
