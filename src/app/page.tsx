"use client";

import Navbar from "../components/navbar";
import Slider from "../components/slider";
import CardsSections from "../components/cards_sections";
import Footer from "../components/footer";
import SectionVideo from "../components/section-video";
import Privacy from "./privacy/page";
export default function Home() {
  return (
    <>
      <Navbar />
      <Slider />
      <CardsSections />
      <SectionVideo />
      <Footer />
    </>
  );
}
