import Cards from "./cards";
import CardsInfo from "./cards-info";
import ImgInfo from "./section-info";
import SectionAccordion from "./section-accordion";
import Ideas from "./ideas";
export default function FuelCardSections() {
  const accordionItems = [
    {
      title: "Convenience",
      description:
        "Accepted at over 99% of fuel locations in the U.S. and over 1,200 locations in Canada.",

      eventKey: 1,
    },
    {
      title: "Control",
      description:
        "Control how much your drivers spend and what they buy with policy based limits. Secure 2-party authentication through the WEX Card Control mobile app to eliminate card-skimming fraud.",

      eventKey: 2,
    },
    {
      title: "Compliance",
      description:
        "Controls at the point of purchase that prompt for important information necessary for fuel tax compliance and robust transaction details.",

      eventKey: 3,
    },
    {
      title: "Cost Savings",
      description:
        "Cash price or less with fuel discounts at over 1,500 U.S. truck stop sites, fuel management and access to Cash Services, plus FREE Online Account Management, and more!",

      eventKey: 4,
    },
    {
      title: "Customer Support",
      description:
        "24/7/365 always available Customer Care with language line for all.",

      eventKey: 5,
    },
  ];

  return (
    <>
      <div className="container font-montserrat mt-5 text-center text-md-start ">
        <p className="fw-600 fs-4 pt-3 mb-n5">
          The Smart Fleet Funding Over The Road Fuel Card also provides you with
          huge benefits so you can stop worrying and start focusing on growing
          your business!
        </p>
        <SectionAccordion items={accordionItems} width={35} height={35} />
        <p className=" container fw-600 fs-6 mt-n5 ">
          *Cash price may vary by merchant location. WEX, Inc. makes no
          guarantees of cash price and will not be held responsible for
          variance. Inquire for full program details.
        </p>
      </div>
    </>
  );
}
