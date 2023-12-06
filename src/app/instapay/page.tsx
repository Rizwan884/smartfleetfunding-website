"use client";
import Image from "next/image";
import styles from "../app/styles/page.module.css";

import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Banners from "@/components/banner";
import Welcome from "@/components/welcome";
import Steps from "@/components/steps";
import Benefits from "@/components/benefits";
import FormInstapay from "@/components/form-instapay";

export default function Instapay() {
  const title = (
    <p>
      Fast, Easy and <strong>Secure Payment</strong>
    </p>
  );

  return (
    <>
      <Navbar />
      <Banners
        hideIcons={true}
        title={title}
        backgroundImage="images/sff-full-facts.jpg"
      />
      <Welcome />
      <Steps />
      <Benefits />
      <FormInstapay />
      <Footer />
    </>
  );
}
