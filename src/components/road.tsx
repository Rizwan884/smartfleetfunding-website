import { useMediaQuery } from "react-responsive";
import Image from "next/image";
export default function Road() {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return (
    <>
      {/* {isMobile ? (
        <div className="font-montserrat bg-white-rgb pb-5">
          <div className="">
            <div className="text-left mt-5 p-5">
              <h2 className="fs-5 fw-bold  text-center">
                Explore the power of factoring with Smart Fleet Funding!
              </h2>
              <div className="d-flex justify-content-center">
                <div className="line"></div>
              </div>

              <div className="lh-sm card-text-bottom fs-6 mx-auto text-center mt-5 fw-500">
                Watch this concise video to understand how your invoices can
                turn into immediate cash, allowing you to focus on what you do
                best - delivering goods.{" "}
                <strong className="text-gray-dark">
                  With over 30 years of experience, we{"'"}re here to guide you
                  through every step.
                </strong>
              </div>
            </div>
          </div>
          <div className=" embed-responsive embed-responsive-16by9 m-0 p-5">
            <iframe
              className="shadow embed-responsive-item 0 mb-5 pb-1 w-100 h-100 h-280 rounded-5"
              src="https://www.youtube.com/embed/k2DVZun_AEY?si=wbtUsCmF9gatmdY9"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      ) : ( */}
        <div className="font-montserrat row m-3">
          <div className="col-5  mx-4 ">
            <div className="text-left my-5 p-1">
             
              <div className="line"></div>

              <h2 className="fs-4 fw-bold ">
              The Smart Fleet Funding Over The Road Fuel Card is a fleet fueling program offered exclusively to Smart Fleet Funding customers.
              </h2>
              <div className="card-text-bottom fs-5  fw-400">
              It helps its customers control fuel spending in today’s volatile fuel market with negotiated discounts, proactive notices, fuel management, and advanced reporting tools. As Smart Fleet Funding customer when you use our Fuel Card instead of your credit or debit card, you’ll get incredible savings on your fuel and maintenance purchases with:{" "}
                
              </div>
            </div>
          </div>
          <div className="col-6   mx-1 p-1 ">
          <Image
              alt="img"
              width={784}
              height={594}
              src="/images/sff-road-fuel-card.jpg"
            ></Image>
          </div>
        </div>
      {/* }) */}
    </>
  );
}
