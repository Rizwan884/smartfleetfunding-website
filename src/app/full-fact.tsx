"use client";

import Image from "next/image";
import styles from "./styles/page.module.css";
import { Carousel } from "react-bootstrap";
import Navbar from "../components/navbar";
import Slider from "../components/slider";
import CardsSections from "../components/cards_sections";
import Footer from "@/components/footer";

export default function fullFact() {
  return (
    <>
      <Navbar></Navbar>

      <Footer></Footer>
    </>
  );
}
