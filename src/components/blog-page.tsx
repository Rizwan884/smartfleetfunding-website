import React, { useState } from "react";
import Image from "react-bootstrap/Image";
import { Container, Row, Col, Carousel, Button, Card } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";
import Pagination from "react-bootstrap/Pagination";

type BlogItem = {
  id?: number;
  title?: string | JSX.Element;
  description?: string;
  type?: string;
  date?: string;
  more?: string;
  content?: string;
  imageSrc?: string;
  desktopSrc?: string;
};
type IProps = {
  blogs: BlogItem[];
};
export default function Blog({ blogs }: IProps) {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const [selectedBlogIndex, setSelectedBlogIndex] = useState<number | null>(
    null
  );
  const handleBlogClick = (index: number) => {
    setSelectedBlogIndex(index);
  };

  const handleBackButtonClick = () => {
    setSelectedBlogIndex(null);
  };

  const handlePreviousPostClick = () => {
    if (selectedBlogIndex !== null && selectedBlogIndex > 0) {
      setSelectedBlogIndex(selectedBlogIndex - 1);
    }
  };

  const handleNextPostClick = () => {
    if (
      selectedBlogIndex !== null &&
      selectedBlogIndex < blogs.length - 1 // Verifica que no estemos en el último artículo
    ) {
      setSelectedBlogIndex(selectedBlogIndex + 1);
    }
  };

  return (
    <>
      <div className="pt-5 px-4 px-md-5 pb-4 pb-md-5 mb-50 bg-search">
        <div className="d-flex flex-row font-montserrat mt-3 ms-1 m-md-3">
          <div className="d-flex flex-column">
            <div className="line width-bf fw-600 mb-2 ms-1 align-item-center"></div>
            <h1 className="fw-bold fs-2 text-left flex align-items-left gap-3">
              BLOG
            </h1>
          </div>
        </div>
      </div>
      <div id="blog" className="container pt-6 pb-5 mt-sm-1 mb-sm-2 mt-5 mb-6">
        {selectedBlogIndex != null ? (
          <div className="">
            {blogs[selectedBlogIndex].imageSrc && (
              <div
                className="banner-image"
                style={{ marginTop: isMobile ? "-71px" : "-20px" }}
              >
                <Image
                  src={blogs[selectedBlogIndex].imageSrc}
                  style={{
                    width: "100%",
                    marginBottom: "20px",
                  }}
                  className="card-img-top d-flex"
                  alt="..."
                />
              </div>
            )}

            <div className="row mb-5 mt-2">
              <div className="col text-start">
                <p className="card-text">
                  <small className=" text-gre font-montserrat ms-2 fs-6 ">
                    {blogs[selectedBlogIndex].type}
                  </small>
                </p>
              </div>
              <div className="col text-end ">
                <p className="card-text">
                  <small className="text-muted font-montserrat me-2 fs-6">
                    {blogs[selectedBlogIndex].date}
                  </small>
                </p>
              </div>
            </div>

            <h1 className=" mb-3 ms-2 me-2 fs-2">
              {blogs[selectedBlogIndex].title}
            </h1>
            <p className=" ms-2 me-2 fs-6">
              {blogs[selectedBlogIndex].content}
            </p>
            <div className="d-flex justify-content-center mt-5">
              <Button
                className="ms-5 me-2 border border-dark "
                variant="white"
                onClick={handlePreviousPostClick}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-arrow-left me-2"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
                  />
                </svg>
                Previous Post
              </Button>
              <Button
                className="ms-2 me-5 green-card btn-no-hover"
                variant=""
                onClick={handleNextPostClick}
              >
                Next Post
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-arrow-right ms-2"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                  />
                </svg>
              </Button>
            </div>
            <Button
              className="mt-5 ms-2 me-2 bg-dark-blue text-light"
              style={{ marginTop: "10%" }}
              onClick={handleBackButtonClick}
            >
              Back
            </Button>
          </div>
        ) : (
          <>
            {isMobile ? (
              <Row className="mt-5 ">
                {blogs.map((blog, index) => (
                  <Col key={index} md={4} className="mb-5 pb-3 px-5">
                    <div
                      className="card"
                      style={{ border: "10px" }}
                      onClick={() => handleBlogClick(index)}
                    >
                      <div className=" flex-column me-5 d-flex justify-content-start">
                        <a
                          href=""
                          className="btn green-card fs-6 text-dark-blue font-montserrat "
                          style={{
                            marginBottom: "-1rem",
                            transform: "translateX(-50%)",
                            zIndex: 1,
                          }}
                        >
                          {blog.type}
                        </a>
                      </div>
                      {blog.imageSrc && (
                        <Image
                          src={blog.imageSrc}
                          style={{
                            width: "100%",
                            marginTop: "-21px",
                            marginBottom: "20px",
                          }}
                          className="card-img-top"
                          alt="..."
                        />
                      )}
                      <div className="card-body">
                        <div className="row">
                          <div className="col text-start">
                            <p className="card-text">
                              <small className="text-muted font-montserrat text-claro fs-6 ">
                                20 Nov
                              </small>
                            </p>
                          </div>
                          <div className="col text-end ">
                            <p className="card-text">
                              <small className="text-muted font-montserrat fs-6">
                                2024
                              </small>
                            </p>
                          </div>
                        </div>
                        <br />
                        {blog.title && (
                          <h1 className="text-start fw-light fs-2 mt-1 mb-3 text-dark-blue font-montserrat">
                            {blog.title}
                          </h1>
                        )}
                        {blog.description && (
                          <p className="text-start fw-light fs-6 mt-1 text-dark-blue font-montserrat">
                            {blog.description}
                          </p>
                        )}
                        <p className=" text-start fw-light fs-6 mt-1 text-dark-blue font-montserrat">
                          Leer mas...
                        </p>
                      </div>
                    </div>
                  </Col>
                ))}
                <div className="d-flex justify-content-center">
                  <Pagination className="pagination bg-transparent">
                    <Pagination.Prev />
                    <Pagination.Item>{1}</Pagination.Item>
                    <Pagination.Item>{2}</Pagination.Item>
                    <Pagination.Item>{3}</Pagination.Item>
                    <Pagination.Item>{4}</Pagination.Item>
                    <Pagination.Item>{5}</Pagination.Item>
                    <Pagination.Item>{6}</Pagination.Item>
                    <Pagination.Next />
                  </Pagination>
                </div>
              </Row>
            ) : (
              <Row className="mt-5">
                {blogs.map((blog, index) => (
                  <Col
                    key={index}
                    md={4}
                    className="mb-5  "
                    onClick={() => handleBlogClick(index)}
                  >
                    <div className="card w-100" style={{ border: "10px" }}>
                      <div className="d-flex justify-content-start">
                        <a
                          href=""
                          className="btn green-card  fs-6 text-dark-blue font-montserrat align-self-start "
                          style={{
                            marginBottom: "-1rem",
                            transform: "translateX(-100%)",
                            zIndex: 1,
                          }}
                        >
                          {blog.type}
                        </a>
                      </div>
                      {blog.imageSrc && (
                        <Image
                          src={blog.imageSrc}
                          style={{
                            width: "100%",
                            marginTop: "-21px",
                            marginBottom: "20px",
                          }}
                          className="card-img-top"
                          alt="..."
                        />
                      )}
                      <div className="card-body">
                        <div className="row">
                          <div className="col text-start">
                            <p className="card-text">
                              <small className="text-muted font-montserrat text-claro">
                                20 Nov
                              </small>
                            </p>
                          </div>
                          <div className="col text-end ">
                            <p className="card-text">
                              <small className="text-muted font-montserrat">
                                2024
                              </small>
                            </p>
                          </div>
                        </div>
                        <br />
                        {blog.title && (
                          <h1 className="text-start fw-bold fs-4 mx-2 mt-1 mb-3 text-dark-blue font-montserrat">
                            {blog.title}
                          </h1>
                        )}
                        {blog.description && (
                          <p className="text-start fw-light fs-6 mt-1 text-dark-blue font-montserrat">
                            {blog.description}
                          </p>
                        )}

                        <p className=" text-start fw-light fs-6 mt-1 text-dark-blue font-montserrat">
                          Leer mas...
                        </p>
                      </div>
                    </div>
                  </Col>
                ))}
                <div className=" d-flex justify-content-center ">
                  <Pagination className=" pagination bg-transparent">
                    <Pagination.Prev />
                    <Pagination.Item>{1}</Pagination.Item>
                    <Pagination.Item>{2}</Pagination.Item>
                    <Pagination.Item>{3}</Pagination.Item>
                    <Pagination.Item>{4}</Pagination.Item>
                    <Pagination.Item>{5}</Pagination.Item>
                    <Pagination.Item>{6}</Pagination.Item>
                    <Pagination.Next />
                  </Pagination>
                </div>
              </Row>
            )}
          </>
        )}
      </div>
    </>
  );
}
