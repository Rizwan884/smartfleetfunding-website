import Cards from "./cards";
import CardsInfo from "./cards-info";
import ImgInfo from "./section-info";
import SectionAccordion from "./section-accordion";
export default function FuelCardSections() {
  const accordionItems = [
    {
      title: "Convenience",
      description:
        "Opening an account typically takes 1-2 business days, once all necessary documentation is provided and verified.",

      eventKey: 1,
    },
    {
      title: "Control",
      description:
        "Our aim is same-day funding, which means we process and payout your invoices on the day of receipt. However, depending on invoice confirmation and credit review, it may take up to 24 hours or longer.",

      eventKey: 2,
    },
    {
      title: "Compliance",
      description:
        "Our aim is same-day funding, which means we process and payout your invoices on the day of receipt. However, depending on invoice confirmation and credit review, it may take up to 24 hours or longer.",

      eventKey: 3,
    },
    {
      title: "Cost Savings",
      description:
        "Our aim is same-day funding, which means we process and payout your invoices on the day of receipt. However, depending on invoice confirmation and credit review, it may take up to 24 hours or longer.",

      eventKey: 4,
    },
    {
      title: "Customer Support",
      description:
        "Our aim is same-day funding, which means we process and payout your invoices on the day of receipt. However, depending on invoice confirmation and credit review, it may take up to 24 hours or longer.",

      eventKey: 5,
    },
  ];
  return (
    <>
      <SectionAccordion items={accordionItems} width={35} height={34} />
    </>
  );
}
