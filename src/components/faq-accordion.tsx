import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { useState } from "react";
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
  searchTerm: string;
  onSearch: (term: string) => void;
};

export default function FaqAccordion({
  items,
  headTitle,
  showIcons = false,
  height = 0,
  width = 0,
  searchTerm,
  onSearch,
}: IProps) {
  const [localSearchTerm, setLocalSearchTerm] = useState("");

  const handleLocalSearch = () => {
    onSearch(localSearchTerm.trim());
  };
  const filteredItems = items.filter((item) =>
    item.title?.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div className="container font-montserrat pt-5 pt-md-2">
      <Accordion className="accordion-mp" defaultActiveKey="0">
        {headTitle && (
          <h2 className="px-3 fw-bold mb-5 ">
            {headTitle}
            <div className="line w-md-2-line" style={{ width: "2.6%" }}></div>
          </h2>
        )}
        <div className="px-3 d-flex flex-md-row mb-6 flex d-md-none d-block column-reverse w-100  h-75">
          <input
            className="form-control me-2"
            type="search"
            placeholder="..."
            aria-label="Search"
            onChange={(e) => setLocalSearchTerm(e.target.value)}
          ></input>
          <button
            className="btn bg-green text-dark-blue fw-bold"
            type="submit"
            onClick={handleLocalSearch}
          >
            Buscar
          </button>
        </div>

        {filteredItems.map((item, key) => (
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
            <Accordion.Body>{item.description}</Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  );
}
