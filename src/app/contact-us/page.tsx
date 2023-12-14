"use client";
import Image from "next/image";
import styles from "../app/styles/page.module.css";

import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

import Search from "@/components/search";
import Contact from "@/components/contact";
import FormContact from "@/components/form-contact";

export default function AboutUs() {
  return (
    <>
      <Navbar />
      <Contact />
      <FormContact />

      <Footer />
    </>
  );
}
