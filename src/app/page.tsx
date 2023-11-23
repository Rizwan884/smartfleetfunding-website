"use client";

import Image from "next/image";
import styles from "./styles/page.module.css";
import { Carousel } from "react-bootstrap";
import SFFNavbar from "../components/sff_navbar";
import SFFslider from "../components/sff_slider";
import SFFcards from "../components/sff_cards";

export default function Home() {
  return (
    <>
      <SFFNavbar></SFFNavbar>
      <SFFslider></SFFslider>
      <SFFcards></SFFcards>
    </>
  );
}
