import { Button } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import { useMediaQuery } from "react-responsive";
type IProps = {
  title?: JSX.Element;
  backgroundImage?: string;
  mobileBackgroundImage?: string;
  hideIcons?: boolean;
};

export default function Banners({
  title,
  backgroundImage,
  mobileBackgroundImage,
  hideIcons = false,
}: IProps) {
  const isMobile = useMediaQuery({ maxWidth: 650 });
  return (
    <>
      <div
        style={{
          height: "auto",
          maxWidth: "100%",
          position: "relative",
        }}
      >
        <Image
          src={` ${isMobile ? mobileBackgroundImage : backgroundImage}`}
          fluid
          alt="banner"
        />
        {isMobile ? (
          <div className=" banner-container">
            {hideIcons ? (
              <div style={{ height: 88, width: 497 }}> </div>
            ) : (
              <div className="d-flex gap-1 ">
                <div>
                  <Image
                    alt="icons"
                    className="h-75"
                    src="images/sff-ff-food.svg"
                  ></Image>
                </div>
                <div>
                  {" "}
                  <Image
                    alt="icons"
                    className="h-75"
                    src="images/sff-ff-tea.svg"
                  ></Image>
                </div>
                <div>
                  {" "}
                  <Image
                    alt="icons"
                    className="h-75"
                    src="images/sff-ff-gift.svg"
                  ></Image>
                </div>
                <div>
                  {" "}
                  <Image
                    alt="icons"
                    className="h-75"
                    src="images/sff-ff-gasoline.svg"
                  ></Image>
                </div>
              </div>
            )}

            <div className="mt-4 line"></div>
            {title && (
              <div className="w-100">
                <h1 className="text-start fw-light fs-1 mt-2 text-white font-montserrat">
                  {title}
                </h1>
              </div>
            )}
          </div>
        ) : (
          <div className=" banner-container mx-4">
            {hideIcons ? (
              <div style={{ height: 88, width: 497 }}> </div>
            ) : (
              <div className="d-flex gap-3">
                <div>
                  <Image alt="icons" src="images/sff-ff-food.svg"></Image>
                </div>
                <div>
                  {" "}
                  <Image alt="icons" src="images/sff-ff-tea.svg"></Image>
                </div>
                <div>
                  {" "}
                  <Image alt="icons" src="images/sff-ff-gift.svg"></Image>
                </div>
                <div>
                  {" "}
                  <Image alt="icons" src="images/sff-ff-gasoline.svg"></Image>
                </div>
              </div>
            )}

            <div className="mt-4 line"></div>
            {title && (
              <div>
                <h1 className="text-start fw-light fs-1 mt-2 text-white font-montserrat">
                  {title}
                </h1>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
}
