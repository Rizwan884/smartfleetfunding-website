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
    <p className="font-montserrat">
      Freight <strong className="fw-bold">Broker Program</strong>
    </p>
  );
  const titleMobile = (
    <p className="font-montserrat text-dark-blue">
      Freight <strong className="fw-bold">Broker Program</strong>
    </p>
  );
  const titleForm = "Drive Profits, Enhance Operations Get Started!";

  return (
    <>
      <Navbar />
      <Banners
        title={title}
        titleMobile={titleMobile}
        hideIcons
        backgroundImage="images/sff-freight.jpg"
        mobileBackgroundImage="images/sff-freight-mobile.jpg"
      />
      <Needs />
      <Programs />
      <Provides />
      <HelpYou />
      <FormFreight titleForm={titleForm} />
      <Footer />
    </>
  );
}
