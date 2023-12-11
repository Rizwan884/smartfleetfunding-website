"use client";
import Image from "next/image";
import styles from "../app/styles/page.module.css";

import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Banners from "@/components/banner";
import Needs from "@/components/need";

export default function fullFact() {
  const title = (
    <p>
      Freight <strong>Broker Program</strong>
    </p>
  );

  return (
    <>
      <Navbar />
      <Banners
        title={title}
        hideIcons
        backgroundImage="images/sff-freight.jpg"
      />
      <Needs />
      <Footer />
    </>
  );
}
