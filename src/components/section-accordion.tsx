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
  height?: number;
  width?: number;
};

export default function SectionAccordion({
  items,
  headTitle,
  showIcons = false,
  height = 0,
  width = 0,
}: IProps) {
  return (
    <div className="container font-montserrat pt-5 pt-md-2">
      <Accordion className="accordion-mp" defaultActiveKey="0">
        {headTitle && (
          <h2 className="px-3 fw-bold mb-5 ">
            {headTitle}
            <div className="line w-md-2-line" style={{ width: "2.6%" }}></div>
          </h2>
        )}

        {items.map((item, key) => (
          <Accordion.Item
            className="py-2"
            key={key}
            eventKey={item.eventKey.toString()}
          >
            <Accordion.Header className="fw-bold">
              {showIcons && (
                <Image
                  src={item.icon ? item.icon : ""}
                  alt="user"
                  width={width}
                  height={height}
                  style={{ marginRight: "15px" }}
                ></Image>
              )}
              <div id="title-mobile">{item.title}</div>
            </Accordion.Header>
            <Accordion.Body className="text-start">
              {item.description}
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  );
}
