"use client";
import Image from "next/image";
import styles from "../app/styles/page.module.css";

import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Banners from "@/components/banner";
import Needs from "@/components/need";
import Programs from "@/components/program";
import Provides from "@/components/provide";
import HelpYou from "@/components/help-you";
import SectionForm from "../../components/form";
import FormFreight from "@/components/form-freight";

export default function Freight() {
  const title = (
    <p>
      Freight <strong className="fw-bold">Broker Program</strong>
    </p>
  );

  const titleForm = "Drive Profits, Enhance Operations Get Started!";

  return (
    <>
      <Navbar />
      <Banners
        title={title}
        hideIcons
        backgroundImage="images/sff-freight.jpg"
      />
      <Needs />
      <Programs />
      <Provides />
      <HelpYou />
      <FormFreight
        titleForm={titleForm}
        backgroundImage="/images/sff-form-freight.jpg"
      />
      <Footer />
    </>
  );
}
