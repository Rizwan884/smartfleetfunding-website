import { useMediaQuery } from "react-responsive";
import Image from "next/image";
export default function Road() {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return (
    <>
      <div className="d-md-none">
        <div className="text-left  p-5">
          <div className=" w-100 mx-auto">
            <Image
              alt="img"
              width={350}
              height={350}
              objectFit="cover"
              src="/images/sff-road-fuel-card-small.webp"
            />
          </div>
          <div className="d-flex justify-content-center pb-3">
            <div className="line"></div>
          </div>
          <h2 className="fs-6 fw-bold w-100 text-center">
            The Smart Fleet Funding Over The Road Fuel Card is a fleet fueling
            program offered exclusively to Smart Fleet Funding customers
          </h2>

          <div className="lh-sm card-text-bottom fs-6 mx-auto text-center mt-5 fw-500">
            It helps its customers control fuel spending in today’s volatile
            fuel market with negotiated discounts, proactive notices, fuel
            management, and advanced reporting tools. As Smart Fleet Funding
            customer when you use our Fuel Card instead of your credit or debit
            card, you’ll get incredible savings on your fuel and maintenance
            purchases with:
          </div>
        </div>
      </div>
      <div className="d-none d-md-flex font-montserrat row m-2">
        <div className="col-7">
          <div className="text-left m-5 p-5">
            <h2 className="fs-4 fw-bold ">
              The Smart Fleet Funding Over The Road Fuel Card is a fleet fueling
              program offered exclusively to Smart Fleet Funding customers.
            </h2>
            <div className="line"></div>
            <div className="card-text-bottom fs-5  fw-400">
              It helps its customers control fuel spending in today’s volatile
              fuel market with negotiated discounts, proactive notices, fuel
              management, and advanced reporting tools. As Smart Fleet Funding
              customer when you use our Fuel Card instead of your credit or
              debit card, you’ll get incredible savings on your fuel and
              maintenance purchases with:
            </div>
          </div>
        </div>
        <div className="col-4 pt-5 ">
          <Image
            alt="img"
            width={500}
            height={400}
            objectFit="cover"
            src="/images/sff-road-fuel-card.webp"
          />
        </div>
      </div>
    </>
  );
}
