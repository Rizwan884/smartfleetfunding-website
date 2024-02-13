"use client";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Blog from "../../components/blog-page";

export default function BlogPage() {
  const blogs = [
    {
      id: 1,
      title: "Cómo mejorar la productividad en el trabajo desde casa",
      description:
        "Consejos y trucos para ser más productivo mientras trabajas desde casa.",
      content:
        "Consejos y trucos para ser más productivo mientras trabajas desde casa. y mucho más",
      imageSrc: "images/blog1.jpg",
    },
    {
      id: 2,
      title: "Los beneficios de practicar mindfulness",
      description:
        "Descubre cómo el mindfulness puede mejorar tu bienestar general.",
      content:
        "Descubre cómo el mindfulness puede mejorar tu bienestar general. y de todo tu hogar.",
      imageSrc: "images/blog2.jpg",
    },
    {
      id: 3,
      title: "Los beneficios de practicar mindfulness",
      description:
        "Descubre cómo el mindfulness puede mejorar tu bienestar general.",
      content:
        "Descubre cómo el mindfulness puede mejorar tu bienestar general. y de todo tu hogar.",
      imageSrc: "images/blog2.jpg",
    },
  ];
  return (
    <>
      <Navbar />
      <Blog blogs={blogs} />
      <Footer />
    </>
  );
}
