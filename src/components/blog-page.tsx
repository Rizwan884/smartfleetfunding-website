import React, { useState } from "react";
import Image from "react-bootstrap/Image";
import { Container, Row, Col, Carousel, Button, Card } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";

type BlogItem = {
  id?: number;
  title?: string | JSX.Element;
  description?: string;
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
      <div className="container mt-7 font-montserrat">
        <div className="d-flex flex-column align-items-left">
          <h1 className="fw-bold fs-2 text-dark-blue flex gap-3">BLOG</h1>
          <div className="line width-bf mb-2 align-item-center"></div>
        </div>
      </div>
      <div id="blog" className="container mt-sm-1 mb-sm-2 mt-5 mb-6">
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
              <Carousel
                controls={false}
                indicators={true}
                interval={null}
                touch={true}
                className="pb-5 pt-5"
              >
                {blogs.map((blog, index) => (
                  <Carousel.Item
                    key={index}
                    className="p-2 pt-5"
                    onClick={() => handleBlogClick(blog)}
                  >
                    <div
                      className="cards-mobile h-100 w-auto mx-3"
                      style={{
                        border: "10px",
                        paddingBottom: "20px",
                        height: "152px",
                      }}
                    >
                      {blog.imageSrc && (
                        <Image
                          src={blog.imageSrc}
                          style={{
                            width: "15%",
                            marginTop: "-30px",
                            marginBottom: "20px",
                          }}
                          className="card-img-top"
                          alt="..."
                        />
                      )}
                      <div className="card-body ">
                        {blog.title && (
                          <h1 className="text-start fw-light fs-2 mt-1 mb-3 text-dark-blue font-montserrat">
                            {blog.title}
                          </h1>
                        )}
                        <p className="card-text">{blog.description}</p>
                      </div>
                    </div>
                  </Carousel.Item>
                ))}
              </Carousel>
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
                            width: "15%",
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
