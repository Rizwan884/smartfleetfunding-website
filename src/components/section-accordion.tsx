import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { Accordion } from "react-bootstrap";
type AccordionItem = {
  title?: string;
  description?: string | JSX.Element;
  icon?: string | StaticImport;
  eventKey: number;
};
type IProps = {
  items: AccordionItem[];
  headTitle?: string;
  showIcons?: boolean;
};

export default function SectionAccordion({
  items,
  headTitle,
  showIcons = false,
}: IProps) {
  return (
    <div className="container font-montserrat">
      <Accordion
        style={{ marginTop: "10%", paddingBottom: "12%" }}
        defaultActiveKey="0"
      >
        {headTitle && (
          <h2 className="fw-600 mb-5 ">
            {headTitle}
            <div className="line" style={{ width: "2.6%" }}></div>
          </h2>
        )}

        {items.map((item, key) => (
          <Accordion.Item key={key} eventKey={`${item.eventKey}`}>
            <Accordion.Header className="fw-bold">
              {showIcons && (
                <Image
                  src={item.icon ? item.icon : ""}
                  alt="user"
                  width={35}
                  height={34}
                  style={{ marginRight: "15px" }}
                ></Image>
              )}
              {item.title}
            </Accordion.Header>
            <Accordion.Body>{item.description}</Accordion.Body>
          </Accordion.Item>
        ))}
        {/* <Accordion.Item eventKey="1">
          <Accordion.Header className="fw-bold">
            {hideIcons && (
              <Image
                src="images/sff-acr-user.svg"
                alt="user"
                width={35}
                height={34}
                style={{ marginRight: "15px" }}
              ></Image>
            )}
            {title}
          </Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item> */}
      </Accordion>
    </div>
  );
}
