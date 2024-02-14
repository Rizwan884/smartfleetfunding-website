import React, { useState } from "react";
import Image from "react-bootstrap/Image";
import { Container, Row, Col, Carousel, Button, Card } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";

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
                  className="mb-4 pb-3"
                >
                  <div className="card" style={{ border: "10px" }} onClick={() => handleBlogClick(blog)}>
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
                      {blog.title && (
                        <h1 className="text-start fw-light fs-2 mt-1 mb-3 text-dark-blue font-montserrat">
                          {blog.title}
                        </h1>
                      )}
                      {blog.description && (
                        <p className="text-start fw-light fs-4 mt-1 text-dark-blue font-montserrat">
                          {blog.description}
                        </p>
                      )}
                      <p className="text-start fw-light fs-4 mt-1 text-dark-blue font-montserrat">
                        hola 
                      </p>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
            ) : (
              <Row className="mt-5">
                {blogs.map((blog, index) => (
                  <Col
                    key={index}
                    md={4}
                    className="mb-4"
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
