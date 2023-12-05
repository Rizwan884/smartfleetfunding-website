"use client";
import Image from "next/image";
import styles from "../app/styles/page.module.css";

import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Banners from "@/components/banner";
import Ideas from "@/components/ideas";
import Help from "@/components/help";
import SectionForm from "../../components/form";
import TestimonialCarousel from "../../components/testimonial";
import SectionAccordion from "../../components/section-accordion";

export default function fullFact() {
  const title = (
    <p>
      Full <strong>Factoring Solution</strong>
    </p>
  );

  return (
    <>
      <Navbar />
      <Banners title={title} backgroundImage="images/sff-full-facts.jpg" />
      <Ideas />
      <Help />
      <SectionForm />
      <TestimonialCarousel />
      <SectionAccordion />
      <Footer />
    </>
  );
}
