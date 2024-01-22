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
import Know from "@/components/know";

export default function AboutUs() {
  const title = (
    <p className="text-dark-blue">
      About <strong className="fw-bold">Us</strong>
    </p>
  );

  return (
    <>
      <Navbar />
      <Banners
        title={title}
        hideIcons
        mobileBackgroundImage="images/sff-about-us-mobile.jpg"
        backgroundImage="images/sff-about-us.jpg"
      />

      <Know />

      <Footer />
    </>
  );
}
