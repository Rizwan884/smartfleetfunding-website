import React, { useState } from "react";
import Image from "react-bootstrap/Image";
import { Container, Row, Col, Carousel, Button, Card } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";
import Pagination from 'react-bootstrap/Pagination';

type BlogItem = {
  id?: number;
  title?: string | JSX.Element;
  description?: string;
  more?: string;
  content?: string;
  imageSrc?: string;
};
type IProps = {
  blogs: BlogItem[];
};
export default function Blog({ blogs }: IProps) {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const [selectedBlog, setSelectedBlog] = useState<BlogItem | null>(null);
  const handleBlogClick = (blog: BlogItem) => {
    setSelectedBlog(blog);
  };

  const handleBackButtonClick = () => {
    setSelectedBlog(null);
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
        {selectedBlog ? (
          <div>
            <Button variant="primary" onClick={handleBackButtonClick}>
              Back
            </Button>
            <h1>{selectedBlog.title}</h1>
            <p>{selectedBlog.content}</p>
          </div>
        ) : (
          <>
            {isMobile ? (
              <Row className="mt-5 ">
                {blogs.map((blog, index) => (
                  <Col
                    key={index}
                    md={4}
                    className="mb-5 pb-3 px-5"
                  >
                    <div className="card" style={{ border: "10px" }} onClick={() => handleBlogClick(blog)}>
                      <div className="card-header">
                        <a href="" className="btn green-card fs-6 text-dark-blue font-montserrat " style={{ position: 'absolute', bottom: '93%', left: '19%', transform: 'translateX(-50%)', zIndex: 1 }}>
                          Financial Tips
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
                            <p className="card-text"><small className="text-muted font-montserrat text-claro fs-6 ">20 Nov</small></p>
                          </div>
                          <div className="col text-end ">
                            <p className="card-text"><small className="text-muted font-montserrat fs-6">2024</small></p>
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
                <div className="pe-5 px-5 ">
                  <Pagination className="px-3">
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
                    onClick={() => handleBlogClick(blog)}
                  >
                    <div className="card" style={{ border: "10px" }}>
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
                            <p className="card-text"><small className="text-muted font-montserrat text-claro">20 Nov</small></p>
                          </div>
                          <div className="col text-end ">
                            <p className="card-text"><small className="text-muted font-montserrat">2024</small></p>
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
              </Row>
            )}
          </>
        )}
      </div>
    </>
  );
}
