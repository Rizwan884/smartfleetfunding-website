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
      desktopSrc: "images/sff-blog-full.jpg",
      date: "20 Nov 2024",
      type: "Financial Tips",

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
      desktopSrc: "images/sff-blog-full.jpg",
      date: "18 Nov 2024",
      type: "Fuel Card Tips",
    },
    {
      id: 3,
      title: "Cómo mejorar la productividad en el trabajo",
      description:
        "Descubre cómo el mindfulness puede mejorar tu bienestar general.",
      content:
        "Descubre cómo el mindfulness puede mejorar tu bienestar general. y de todo tu hogar.",
      imageSrc: "images/sff-blog-img.jpg",
      desktopSrc: "images/sff-blog-full.jpg",
      date: "30 Ene 2024",
      type: "Instapay Tips",
    },
    {
      id: 4,
      title: "Los beneficios de practicar mindfulness",
      description:
        "Descubre cómo el mindfulness puede mejorar tu bienestar general.",
      content:
        "Descubre cómo el mindfulness puede mejorar tu bienestar general. y de todo tu hogar.",
      imageSrc: "images/sff-blog-img.jpg",
      desktopSrc: "images/sff-blog-full.jpg",
      date: "5 Nov 2024",
      type: "Freight Tips",
    },
    {
      id: 5,
      title: "Los beneficios de practicar mindfulness",
      description:
        "Descubre cómo el mindfulness puede mejorar tu bienestar general.",
      content:
        "Descubre cómo el mindfulness puede mejorar tu bienestar general. y de todo tu hogar.",
      imageSrc: "images/sff-blog-img.jpg",
      desktopSrc: "images/sff-blog-full.jpg",
      date: "10 Nov 2024",
      type: "Faq Tips",
    },
    {
      id: 6,
      title: "Los beneficios de practicar mindfulness",
      description:
        "Descubre cómo el mindfulness puede mejorar tu bienestar general.",
      content:
        "Descubre cómo el mindfulness puede mejorar tu bienestar general. y de todo tu hogar.",
      imageSrc: "images/sff-blog-img.jpg",
      desktopSrc: "images/sff-blog-full.jpg",
      date: "21 Nov 2024",
      type: "prueba",
    },
    {
      id: 7,
      title: "Los beneficios de practicar mindfulness",
      description:
        "Descubre cómo el mindfulness puede mejorar tu bienestar general.",
      content:
        "Descubre cómo el mindfulness puede mejorar tu bienestar general. y de todo tu hogar.",
      imageSrc: "images/sff-blog-img.jpg",
      desktopSrc: "images/sff-blog-full.jpg",
      date: "03 Sep 2024",
      type: "Financial tip",
    },
    {
      id: 8,
      title: "Los beneficios de practicar mindfulness",
      description:
        "Descubre cómo el mindfulness puede mejorar tu bienestar general.",
      content:
        "Descubre cómo el mindfulness puede mejorar tu bienestar general. y de todo tu hogar.",
      imageSrc: "images/sff-blog-img.jpg",
      desktopSrc: "images/sff-blog-full.jpg",
      date: "14 Nov 2024",
      type: "prueba",
    },
    {
      id: 9,
      title: "Los beneficios de practicar mindfulness",
      description:
        "Descubre cómo el mindfulness puede mejorar tu bienestar general.",
      content:
        "Descubre cómo el mindfulness puede mejorar tu bienestar general. y de todo tu hogar.",
      imageSrc: "images/sff-blog-img.jpg",
      desktopSrc: "images/sff-blog-full.jpg",
      date: "21 Nov 2024",
      type: "Faq Tips",
    },
    {
      id: 10,
      title: "Los beneficios de practicar mindfulness",
      description:
        "Descubre cómo el mindfulness puede mejorar tu bienestar general.",
      content:
        "Descubre cómo el mindfulness puede mejorar tu bienestar general. y de todo tu hogar.",
      imageSrc: "images/sff-blog-img.jpg",
      desktopSrc: "images/sff-blog-full.jpg",
      date: "26 Nov 2024",
      type: "prueba",
    },
    {
      id: 11,
      title: "Los beneficios de practicar mindfulness",
      description:
        "Descubre cómo el mindfulness puede mejorar tu bienestar general.",
      content:
        "Descubre cómo el mindfulness puede mejorar tu bienestar general. y de todo tu hogar.",
      imageSrc: "images/sff-blog-img.jpg",
      desktopSrc: "images/sff-blog-full.jpg",
      date: "06 Dec 2024",
      type: "promocional",
    },
    {
      id: 12,
      title: "Los beneficios de practicar mindfulness",
      description:
        "Descubre cómo el mindfulness puede mejorar tu bienestar general.",
      content:
        "Descubre cómo el mindfulness puede mejorar tu bienestar general. y de todo tu hogar.",
      imageSrc: "images/sff-blog-img.jpg",
      desktopSrc: "images/sff-blog-full.jpg",
      date: "21 Feb 2024",
      type: "test",
    },
    {
      id: 13,
      title: "Cuando todo parece oscuro, la familia siempre sera nuestra luz",
      description:
        "Descubre cómo el mindfulness puede mejorar tu bienestar general.",
      content:
        "Descubre cómo el mindfulness puede mejorar tu bienestar general. y de todo tu hogar.",
      imageSrc: "images/sff-blog-img.jpg",
      desktopSrc: "images/sff-blog-full.jpg",
      date: "03 Sep 2024",
      type: "Sigue",
    },
    {
      id: 14,
      title:
        "La vida suele ser dura, pero lo importante es siempre seguir luchando",
      description:
        "Descubre cómo el mindfulness puede mejorar tu bienestar general.",
      content:
        "Descubre cómo el mindfulness puede mejorar tu bienestar general. y de todo tu hogar.",
      imageSrc: "images/sff-blog-img.jpg",
      desktopSrc: "images/sff-blog-full.jpg",
      date: "14 Nov 2024",
      type: "Ilumina",
    },
    {
      id: 15,
      title: "Cuando caemos, debemos siempre mirar alto",
      description:
        "Descubre cómo el mindfulness puede mejorar tu bienestar general.",
      content:
        "Descubre cómo el mindfulness puede mejorar tu bienestar general. y de todo tu hogar.",
      imageSrc: "images/sff-blog-img.jpg",
      desktopSrc: "images/sff-blog-full.jpg",
      date: "21 Nov 2024",
      type: "Guia",
    },
    {
      id: 16,
      title: "Esforzarte por tus sueños es la mayor satisfaccion en esta vida",
      description:
        "Descubre cómo el mindfulness puede mejorar tu bienestar general.",
      content:
        "Descubre cómo el mindfulness puede mejorar tu bienestar general. y de todo tu hogar.",
      imageSrc: "images/sff-blog-img.jpg",
      desktopSrc: "images/sff-blog-full.jpg",
      date: "26 Nov 2024",
      type: "Persevera",
    },
    {
      id: 17,
      title: "El destino que seguimos puede ser cambiado",
      description:
        "Descubre cómo el mindfulness puede mejorar tu bienestar general.",
      content:
        "Descubre cómo el mindfulness puede mejorar tu bienestar general. y de todo tu hogar.",
      imageSrc: "images/sff-blog-img.jpg",
      desktopSrc: "images/sff-blog-full.jpg",
      date: "06 Dec 2024",
      type: "Transformalo",
    },
    {
      id: 18,
      title: "Las pruebas de la vida",
      description:
        "Descubre cómo el mindfulness puede mejorar tu bienestar general.",
      content:
        "Descubre cómo el mindfulness puede mejorar tu bienestar general. y de todo tu hogar.",
      imageSrc: "images/sff-blog-img.jpg",
      desktopSrc: "images/sff-blog-full.jpg",
      date: "21 Feb 2024",
      type: "Logralo",
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
