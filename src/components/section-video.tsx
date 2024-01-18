import { useMediaQuery } from "react-responsive";
export default function SectionVideo() {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return (
    <>
      {isMobile ? (
        <div className="font-montserrat bg-white-rgb row pb-5">
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
          <div className=" embed-responsive embed-responsive-16by9 m-0 p-5 ">
            <iframe
              className="shadow embed-responsive-item 0 mb-5 pb-1 w-100 h-100 rounded-5"
              src="https://www.youtube.com/embed/kGY6N9DL4Jw"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      ) : (
        <div className="font-montserrat row m-2">
          <div className="col-6">
            <div className="text-left m-5 p-5">
              <h2 className="fs-3 fw-bold ">
                Explore the power of factoring <br /> with Smart Fleet Funding!
              </h2>
              <div className="line"></div>
              <div className="card-text-bottom fs-5  fw-400">
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
          <div className="col-5 embed-responsive embed-responsive-16by9  m-4 p-4 ">
            <iframe
              className="embed-responsive-item 0 mt-4 w-100 h-100 rounded-5"
              src="https://www.youtube.com/embed/kGY6N9DL4Jw"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
}
