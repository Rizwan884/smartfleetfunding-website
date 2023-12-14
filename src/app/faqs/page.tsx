"use client";
import Image from "next/image";
import styles from "../app/styles/page.module.css";

import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

import SectionAccordion from "@/components/section-accordion";
import Search from "@/components/search";

export default function Faqs() {
  const accordionInstaItems = [
    {
      title: "What is Freight Factoring?",
      description: (
        <ul>
          <li>
            Is a financial service designed specifically for trucking and
            transportation companies. It enables these businesses to turn their
            unpaid freight invoices into immediate working capital. Smart Fleet
            Funding purchases these invoices at a discounted rate, allowing you
            to maintain cash flow and focus on growing your business.
          </li>
        </ul>
      ),
      icon: "images/sff-search-arrow.svg",
      eventKey: 1,
      width: 18,
      heiight: 26,
    },
    {
      title: "How does factoring work?",
      description: (
        <ul>
          <li>
            With Smart Fleet Funding, is easy! Once you sign up and your account
            is approved, send us an invoice, your signed bill of lading, and a
            rate confirmation once you deliver a load by uploading them via your
            client portal or our mobile app. Once we receive them, up to 98% of
            the funds involved will be transferred to your bank account within
            24 hours of submission.
          </li>
        </ul>
      ),
      icon: "images/sff-search-arrow.svg",
      eventKey: 2,
    },
    {
      title: "Who can benefit from Smart Fleet Funding's factoring services?",
      description: (
        <ul>
          <li>
            Our services are tailored for small and medium-sized trucking
            companies, owner-operators, and transportation businesses. If you
            generate invoices for reliable shippers or brokers, we can help you
            stabilize cash flow and facilitate growth.
          </li>
        </ul>
      ),
      icon: "images/sff-search-arrow.svg",
      eventKey: 3,
    },
    {
      title:
        "What sets Smart Fleet Funding apart from other factoring companies?",
      description: (
        <ul>
          <li>
            Smart Fleet Funding distinguishes itself through personalized
            service, competitive rates, and a deep understanding of the unique
            challenges facing trucking and transportation companies. Our team is
            committed to providing flexible solutions that meet the specific
            needs of your business.
          </li>
        </ul>
      ),
      icon: "images/sff-search-arrow.svg",
      eventKey: 4,
    },
    {
      title:
        "Is factoring only available for businesses with a certain level of revenue?",
      description: (
        <ul>
          <li>
            Factoring is suitable for businesses of various sizes, from startups
            to large enterprises. It{"'"}s more about the creditworthiness of
            your clients.
          </li>
        </ul>
      ),
      icon: "images/sff-search-arrow.svg",
      eventKey: 5,
    },
    {
      title: "Will factoring affect my relationship with my customers?",
      description: (
        <ul>
          <li>
            Factoring can actually improve customer relationships by ensuring
            you have the resources to deliver products or services on time.
          </li>
        </ul>
      ),
      icon: "images/sff-search-arrow.svg",
      eventKey: 6,
    },
    {
      title: "What are the criteria for qualifying for factoring services?",
      description: (
        <ul>
          <li>
            Typically, factoring companies assess the creditworthiness of your
            clients and the quality of your invoices.
          </li>
        </ul>
      ),
      icon: "images/sff-search-arrow.svg",
      eventKey: 7,
    },
    {
      title: "Can factoring help with cash flow problems?",
      description: (
        <ul>
          <li>
            Absolutely. Factoring provides an immediate injection of cash, which
            can help businesses cover operational expenses, payroll, and other
            financial obligations.
          </li>
        </ul>
      ),
      icon: "images/sff-search-arrow.svg",
      eventKey: 8,
    },
    {
      title: "Are there any long-term contracts or hidden fees?",
      description: (
        <ul>
          <li>
            We believe in transparency. Smart Fleet Funding offers flexible
            terms with no hidden fees. We work with you to create a factoring
            agreement that suits your business{"'"}s requirements. You{"'"}re
            not locked into long-term contracts, giving you the freedom to
            factor as much or as little as you need.
          </li>
        </ul>
      ),
      icon: "images/sff-search-arrow.svg",
      eventKey: 9,
    },
    {
      title:
        "How do recourse and non-recourse factoring differ, and which is more suitable for my business?",
      description: (
        <ul>
          <li>
            Recourse factoring means the business is responsible for any unpaid
            invoices, while non-recourse factoring means the factoring company
            assumes the risk of non-payment. The choice depends on your risk
            tolerance and the creditworthiness of your clients.
          </li>
        </ul>
      ),
      icon: "images/sff-search-arrow.svg",
      eventKey: 10,
    },
    {
      title:
        "What steps do factoring companies take to ensure the creditworthiness of my clients before approving an invoice for funding?",
      description: (
        <ul>
          <li>
            Factoring companies conduct credit checks on your clients to assess
            their ability to pay. This helps determine the advance rate and
            reduces the risk of non-payment.
          </li>
        </ul>
      ),
      icon: "images/sff-search-arrow.svg",
      eventKey: 11,
    },
    {
      title:
        "How does the factoring process impact customer relationships and their perceptions of my business?",
      description: (
        <ul>
          <li>
            Factoring is a common financial practice, and many businesses see it
            as a sign of stability. It ensures you have the resources to fulfill
            orders promptly, which can enhance your reputation.
          </li>
        </ul>
      ),
      icon: "images/sff-search-arrow.svg",
      eventKey: 12,
    },
    {
      title: "What payment methods do you accept for factoring transactions?",
      description: (
        <ul>
          <li>
            Currently, we only accept payments through checks and direct
            deposits (EFT-ACH). This ensures a secure and efficient transaction
            process.
          </li>
        </ul>
      ),
      icon: "images/sff-search-arrow.svg",
      eventKey: 13,
    },
    {
      title: "In which currencies can payments be made?",
      description: (
        <ul>
          <li>
            We have accounts in both Canadian dollars (CAD) and US dollars (USD)
            to provide flexible payment options that cater to the needs of our
            clients.
          </li>
        </ul>
      ),
      icon: "images/sff-search-arrow.svg",
      eventKey: 14,
    },
    {
      title:
        "Are there any additional services or resources provided by factoring companies to help me manage my cash flow more effectively?",
      description: (
        <ul>
          <li>
            Yes, in addition to our factoring services, Smart Fleet Funding
            offers a range of supplementary resources and services to support
            your business:
            <ul
              className="mt-2"
              style={{ listStyleType: "upper-alpha", marginLeft: "1em" }}
            >
              <li>
                <strong className="fw-bold">Fuel Card Program:</strong> We
                provide access to a fuel card program that offers discounts on
                fuel purchases at major truck stops nationwide. This helps you
                save money on one of your most significant operational expenses.
              </li>
              <li>
                <strong className="fw-bold">Insurance Assistance:</strong> We
                can connect you with reputable insurance providers who
                specialize in commercial trucking insurance. This ensures that
                you have the coverage you need to operate your business safely
                and in compliance with industry regulations.
              </li>
              <li>
                <strong className="fw-bold"> Customer Support: </strong>Our
                dedicated customer support team is available to assist you with
                any questions or concerns you may have. Whether it{"'"}s about
                your factoring account, fuel card, or insurance, we{"'"}re here
                to help.
              </li>
              <li>
                <strong className="fw-bold">Industry Expertise:</strong> Our
                team has extensive knowledge of the transportation industry and
                can provide valuable insights and advice on best practices for
                managing your cash flow, optimizing routes, and improving
                operational efficiency.
              </li>
            </ul>
          </li>
        </ul>
      ),
      icon: "images/sff-search-arrow.svg",
      eventKey: 15,
    },
  ];

  return (
    <>
      <Navbar />
      <Search />
      <SectionAccordion
        items={accordionInstaItems}
        headTitle="Some questions"
        showIcons
        width={16}
        height={28}
      />
      <Footer />
    </>
  );
}
