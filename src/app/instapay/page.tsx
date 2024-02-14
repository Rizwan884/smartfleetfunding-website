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
import SectionAccordion from "@/components/section-accordion";

export default function Instapay() {
  const title = (
    <p>
      Fast, Easy and <strong className="fw-bold">Secure Payment</strong>
    </p>
  );
  const titleMobile = (
    <p>
      Fast, Easy and <strong className="fw-bold">Secure Payment</strong>
    </p>
  );
  const accordionInstaItems = [
    {
      title: "What Are the Conditions for Instapay?",
      description: (
        <ul>
          <li>
            The FB that you are hauling for must be a member of our Instapay
            Network.
          </li>
          <li>
            Load has to be completed and paperwork has to be submmited to
            instapay@smartfleetfunding.com instead of the Freight Broker.
          </li>
        </ul>
      ),
      eventKey: 1,
    },
    {
      title: "Are There Any Hidden Fees?",
      description: (
        <ul>
          <li>
            Absolutely not. Instapay operates on a transparent flat fee
            structure, ensuring you know exactly what to expect.
          </li>
        </ul>
      ),

      eventKey: 2,
    },
    {
      title: "What Documents Do I Need to Submit?",
      description: (
        <ul>
          <li>
            Submit invoice, carrier confirmation, BOL property signed and
            accesorialls or lumper receipts.
          </li>
        </ul>
      ),
      eventKey: 3,
    },
    {
      title: "How Is the Service Personalized?",
      description: (
        <ul>
          <li>
            Each driver is assigned a dedicated account executive, ensuring you
            receive the tailored support you deserve.
          </li>
        </ul>
      ),
      eventKey: 4,
    },
    {
      title: "Do I need to switch companies in order to benefit with Instapay?",
      description: (
        <ul>
          <li>
            Require letter of release for the particular freight broker
            participating in the instapay program.
          </li>
        </ul>
      ),
      eventKey: 5,
    },
    {
      title: "Would I have a credit limit ?",
      description: (
        <ul>
          <li>
            No, with the participating freight broker there are not credit
            limits
          </li>
        </ul>
      ),
      eventKey: 6,
    },
  ];

  return (
    <>
      <Navbar />
      <Banners
        hideIcons={true}
        title={title}
        titleMobile={titleMobile}
        backgroundImage="images/sff-instapay.webp"
        mobileBackgroundImage="images/sff-instapay-mobile.jpg"
      />
      <Welcome />
      <Steps />
      <Benefits />
      <FormInstapay />
      <SectionAccordion
        items={accordionInstaItems}
        headTitle="List of question that may arise"
      />
      <Footer />
    </>
  );
}
