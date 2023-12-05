import { Button } from "react-bootstrap";
import Image from "react-bootstrap/Image";

type IProps = {
  title?: JSX.Element;
  backgroundImage?: string;
  hideIcons?: boolean;
};

export default function Banners({
  title,
  backgroundImage,
  hideIcons = false,
}: IProps) {
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
          src={` ${backgroundImage ? backgroundImage : ""}`}
          fluid
          alt="banner"
        />
        ;
        <div className=" banner-container mx-4">
          {hideIcons ? (
            <div style={{ height: 88, width: 497 }}> </div>
          ) : (
            <div className="d-flex gap-3">
              <div>
                <Image src="images/sff-ff-food.svg"></Image>
              </div>
              <div>
                {" "}
                <Image src="images/sff-ff-tea.svg"></Image>
              </div>
              <div>
                {" "}
                <Image src="images/sff-ff-gift.svg"></Image>
              </div>
              <div>
                {" "}
                <Image src="images/sff-ff-gasoline.svg"></Image>
              </div>
            </div>
          )}

          <div className="mt-4 line"></div>
          {title && (
            <div>
              <h1 className="text-start fw-light fs-1 mt-2 text-white">
                {title}
              </h1>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
