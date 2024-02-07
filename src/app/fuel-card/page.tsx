"use client";
import CardsFuel from "@/components/cards-fuel";
import Road from "@/components/road";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import FuelCardSections from "../../components/fuel-card-section";
import Banners from "@/components/banner";
import FormFuelCard from "@/components/form-fuel-card";

export default function fuelCard() {
  const title = (
    <p className="font-montserrat text-white">
      Over The Road <strong className="fw-bold">Fuel Card</strong>
    </p>
  );

  const titleForm = "Start Saving with the Smart Fleet Funding Fuel Card!";

  const accordionItems = [
    {
      title: "How long does it take to open an account?",
      description:
        "Opening an account typically takes 1-2 business days, once all necessary documentation is provided and verified.",
      icon: "images/sff-acr-user.svg",
      eventKey: 1,
    },
    {
      title: "How long does it take for invoice payments to be processed?",
      description:
        "Our aim is same-day funding, which means we process and payout your invoices on the day of receipt. However, depending on invoice confirmation and credit review, it may take up to 24 hours or longer.",
      icon: "images/sff-acr-dollar.svg",
      eventKey: 2,
    },
    {
      title: "How do I submit my invoices?",
      description: (
        <p>
          You can submit your invoices by emailing them to{" "}
          <a href="invoices@smartfleetfunding.com.">
            invoices@smartfleetfunding.com.
          </a>{" "}
          Make sure to include all necessary details and documents in a legible
          format. (This is how)
        </p>
      ),

      icon: "images/sff-acr-book.svg",
      eventKey: 3,
    },
    {
      title:
        "What is the typical charge per invoice and what benefits do I receive from paying that fee?",
      description:
        "The typical charge per invoice depends on the specific details of your agreement. This fee covers the cost of factoring services and ensures you receive prompt payment. Additionally, by paying this fee, you benefit from streamlined cash flow, reduced administrative burden by eliminating collecting your receivables, receiving and applying payments, review and manage the aging on your accounts efficiently, running credit reports on your potential costumers and many other day to day activities related to operation. We manage and you focus on growing your business.",
      icon: "images/sff-acr-hand.svg",
      eventKey: 4,
    },
  ];

  return (
    <>
      <Navbar />
      <Banners
        hideIcons
        title={title}
        backgroundImage="images/sff-fuel-card.jpg"
        mobileBackgroundImage="images/sff-fuel-card-mobile.jpg"
      />
      <Road />
      <CardsFuel />
      <FuelCardSections />
      <FormFuelCard titleForm={titleForm} />
      <Footer />
    </>
  );
}
