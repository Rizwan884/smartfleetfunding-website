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
        "Consejos y trucos para ser más productivo mientras trabajas desde casa. ",
      content:
        "Consejos y trucos para ser más productivo mientras trabajas desde casa. y mucho más",
      imageSrc: "images/sff-blog-img.jpg",
      desktopSrc: "images/sff-blog-img-web.jpg",

      with: 20,
      height: 28,
    },
    {
      id: 2,
      title: "Los beneficios de practicar mindfulness",
      description:
        "Descubre cómo el mindfulness puede mejorar tu bienestar general.",
      content:
        "Descubre cómo el mindfulness puede mejorar tu bienestar general. y de todo tu hogar.",
      imageSrc: "images/sff-blog-img.jpg",
    },
    {
      id: 3,
      title: "Cómo mejorar la productividad en el trabajo",
      description:
        "Descubre cómo el mindfulness puede mejorar tu bienestar general.",
      content:
        "Descubre cómo el mindfulness puede mejorar tu bienestar general. y de todo tu hogar.",
      imageSrc: "images/sff-blog-img.jpg",
    },

    {
      id: 4,
      title: "Los beneficios de practicar mindfulness",
      description:
        "Descubre cómo el mindfulness puede mejorar tu bienestar general.",
      content:
        "Descubre cómo el mindfulness puede mejorar tu bienestar general. y de todo tu hogar.",
      imageSrc: "images/sff-blog-img.jpg",
    },

    {
      id: 5,
      title: "Los beneficios de practicar mindfulness",
      description:
        "Descubre cómo el mindfulness puede mejorar tu bienestar general.",
      content:
        "Descubre cómo el mindfulness puede mejorar tu bienestar general. y de todo tu hogar.",
      imageSrc: "images/sff-blog-img.jpg",
    },

    {
      id: 6,
      title: "Los beneficios de practicar mindfulness",
      description:
        "Descubre cómo el mindfulness puede mejorar tu bienestar general.",
      content:
        "Descubre cómo el mindfulness puede mejorar tu bienestar general. y de todo tu hogar.",
      imageSrc: "images/sff-blog-img.jpg",
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
