import { Carousel } from 'react-bootstrap'
import Image from 'react-bootstrap/Image'
export default function Help() {
  return (
    <>
      <div className="container mt-5 ">
        <h1 className="fw-bold fs-2 text-center pt-5 flex-column align-items-center gap-3">
          We help you by
          <div className="line help-line"></div>
        </h1>
      </div>
      <div id="help" className="container mt-sm-1 mb-sm-2 mt-5 mb-6">
        <div className="d-none d-md-block">
          <div className="row mt-5 ">
            <div className="col-4 ">
              {' '}
              <div className="card " style={{ border: '10px' }}>
                <Image
                  src="images/sff-hp-1.svg"
                  style={{
                    width: '15%',
                    marginTop: '-21px',
                    marginBottom: '20px'
                  }}
                  className="card-img-top"
                  alt="..."
                ></Image>
                <div className="card-body">
                  <p className="card-text ">
                    <strong>
                      Always being there for you: <br />
                    </strong>{' '}
                    you call, we answer!
                  </p>
                </div>
              </div>
            </div>

            <div className="col-4">
              {' '}
              <div className="card " style={{ border: '10px' }}>
                <Image
                  src="images/sff-hp-2.svg"
                  style={{
                    width: '15%',
                    marginTop: '-21px',
                    marginBottom: '20px'
                  }}
                  className="card-img-top"
                  alt="..."
                ></Image>
                <div className="card-body">
                  <p className="card-text">
                    <strong>
                      Transparency and honesty: <br />
                    </strong>{' '}
                    Our lockdown clause is service, simple flat fee, no
                    penalties.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-4">
              {' '}
              <div className="card " style={{ border: '10px' }}>
                <Image
                  src="images/sff-hp-3.svg"
                  style={{
                    width: '15%',
                    marginTop: '-21px',
                    marginBottom: '20px'
                  }}
                  className="card-img-top"
                  alt="..."
                ></Image>
                <div className="card-body">
                  <p className="card-text">
                    <strong>
                      Money in your pocket instantly: <br />
                    </strong>{' '}
                    At lower rates: receive money for your loads in less than 12
                    business hours via direct deposit/ACH.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-6">
            <div className="col-4">
              {' '}
              <div className="card " style={{ border: '10px' }}>
                <Image
                  src="images/sff-hp-4.svg"
                  style={{
                    width: '15%',
                    marginTop: '-21px',
                    marginBottom: '20px'
                  }}
                  className="card-img-top"
                  alt="..."
                ></Image>
                <div className="card-body">
                  <p className="card-text">
                    <strong>
                      {' '}
                      More time for yourself: <br />
                    </strong>{' '}
                    Stop worrying about collecting from your brokers and
                    shippers, and reduce your short payments, charge-backs and
                    headaches.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-4">
              {' '}
              <div className="card " style={{ border: '10px' }}>
                <Image
                  src="images/sff-hp-5.svg"
                  style={{
                    width: '15%',
                    marginTop: '-21px',
                    marginBottom: '20px'
                  }}
                  className="card-img-top"
                  alt="..."
                ></Image>
                <div className="card-body">
                  <p className="card-text">
                    <strong>
                      Empowering you with control: <br />
                    </strong>{' '}
                    online access to reports and valuable information about your
                    loads.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-4">
              {' '}
              <div className="card " style={{ border: '10px' }}>
                <Image
                  src="images/sff-hp-6.svg"
                  style={{
                    width: '15%',
                    marginTop: '-21px',
                    marginBottom: '20px'
                  }}
                  className="card-img-top"
                  alt="..."
                ></Image>
                <div className="card-body">
                  <p className="card-text">
                    <strong>
                      Smooth operations: <br />
                    </strong>{' '}
                    Monitor all your loads in your portfolio. If any issues
                    require your attention, we promptly inform you.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="row mt-6"
            style={{ justifyContent: 'center', marginBottom: '13%' }}
          >
            <div className="col-4">
              {' '}
              <div className="card " style={{ border: '10px' }}>
                <Image
                  src="images/sff-hp-7.svg"
                  style={{
                    width: '15%',
                    marginTop: '-21px',
                    marginBottom: '20px'
                  }}
                  className="card-img-top"
                  alt="..."
                ></Image>
                <div className="card-body">
                  <p className="card-text">
                    <strong>
                      Informed decisions about your prospects: <br />
                    </strong>{' '}
                    Free credit checks.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-4">
              {' '}
              <div className="card " style={{ border: '10px' }}>
                <Image
                  src="images/sff-hp-8.svg"
                  style={{
                    width: '15%',
                    marginTop: '-21px',
                    marginBottom: '20px'
                  }}
                  className="card-img-top"
                  alt="..."
                ></Image>
                <div className="card-body">
                  <p className="card-text">
                    <strong>
                      Personalized Financial Guidance: <br />
                    </strong>{' '}
                    Our account executives offer tailored financial solutions
                    for your carrier business.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="carousel-mobile" className="d-block d-md-none pt-2">
          <Carousel
            controls={false}
            indicators={true}
            interval={null}
            touch={true}
            className="pb-5 pt-5"
          >
            <Carousel.Item className="p-2 pt-5">
              <div
                className="cards-mobile mx-3"
                style={{
                  border: '10px',
                  paddingBottom: '20px',
                  height: '152px'
                }}
              >
                <Image
                  src="images/sff-hp-1.svg"
                  style={{
                    width: '15%',
                    marginTop: '-30px',
                    marginBottom: '20px'
                  }}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <p className="card-text">
                    <strong>
                      Always being there for you: <br />
                    </strong>{' '}
                    you call, we answer!
                  </p>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item className="p-2 pt-5">
              <div
                className="cards-mobile mx-3 "
                style={{ border: '10px', paddingBottom: '20px' }}
              >
                <Image
                  src="images/sff-hp-2.svg"
                  style={{
                    width: '15%',
                    marginTop: '-30px',
                    marginBottom: '20px'
                  }}
                  className="card-img-top"
                  alt="..."
                ></Image>
                <div className="card-body">
                  <p className="card-text">
                    <strong>
                      Transparency and honesty: <br />
                    </strong>{' '}
                    Our lockdown clause is service, simple flat fee, no
                    penalties.
                  </p>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item className="p-2 pt-5">
              <div
                className="cards-mobile mx-3"
                style={{ border: '10px', paddingBottom: '20px' }}
              >
                <Image
                  src="images/sff-hp-3.svg"
                  style={{
                    width: '15%',
                    marginTop: '-30px',
                    marginBottom: '20px'
                  }}
                  className="card-img-top"
                  alt="..."
                ></Image>
                <div className="card-body">
                  <p className="card-text">
                    <strong>
                      Money in your pocket instantly: <br />
                    </strong>{' '}
                    At lower rates: receive money for your loads in less than 12
                    business hours via direct deposit/ACH.
                  </p>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item className="p-2 pt-5">
              <div
                className="cards-mobile mx-3 "
                style={{ border: '10px', paddingBottom: '20px' }}
              >
                <Image
                  src="images/sff-hp-4.svg"
                  style={{
                    width: '15%',
                    marginTop: '-30px',
                    marginBottom: '20px'
                  }}
                  className="card-img-top"
                  alt="..."
                ></Image>
                <div className="card-body">
                  <p className="card-text">
                    <strong>
                      {' '}
                      More time for yourself: <br />
                    </strong>{' '}
                    Stop worrying about collecting from your brokers and
                    shippers, and reduce your short payments, charge-backs and
                    headaches.
                  </p>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item className="p-2 pt-5">
              <div
                className="cards-mobile mx-3 "
                style={{ border: '10px', paddingBottom: '20px' }}
              >
                <Image
                  src="images/sff-hp-5.svg"
                  style={{
                    width: '15%',
                    marginTop: '-30px',
                    marginBottom: '20px'
                  }}
                  className="card-img-top"
                  alt="..."
                ></Image>
                <div className="card-body">
                  <p className="card-text">
                    <strong>
                      Empowering you with control: <br />
                    </strong>{' '}
                    online access to reports and valuable information about your
                    loads.
                  </p>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item className="p-2 pt-5">
              <div
                className="cards-mobile mx-3 "
                style={{ border: '10px', paddingBottom: '20px' }}
              >
                <Image
                  src="images/sff-hp-6.svg"
                  style={{
                    width: '15%',
                    marginTop: '-30px',
                    marginBottom: '20px'
                  }}
                  className="card-img-top"
                  alt="..."
                ></Image>
                <div className="card-body">
                  <p className="card-text">
                    <strong>
                      Smooth operations: <br />
                    </strong>{' '}
                    Monitor all your loads in your portfolio. If any issues
                    require your attention, we promptly inform you.
                  </p>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item className="p-2 pt-5">
              <div
                className="cards-mobile mx-3 "
                style={{ border: '10px', paddingBottom: '20px' }}
              >
                <Image
                  src="images/sff-hp-7.svg"
                  style={{
                    width: '15%',
                    marginTop: '-30px',
                    marginBottom: '20px'
                  }}
                  className="card-img-top"
                  alt="..."
                ></Image>
                <div className="card-body">
                  <p className="card-text">
                    <strong>
                      Informed decisions about your prospects: <br />
                    </strong>{' '}
                    Free credit checks.
                  </p>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item className="p-2 pt-5">
              <div
                className="cards-mobile "
                style={{ border: '10px', paddingBottom: '20px' }}
              >
                <Image
                  src="images/sff-hp-8.svg"
                  style={{
                    width: '15%',
                    marginTop: '-30px',
                    marginBottom: '20px'
                  }}
                  className="card-img-top"
                  alt="..."
                ></Image>
                <div className="card-body">
                  <p className="card-text">
                    <strong>
                      Personalized Financial Guidance: <br />
                    </strong>{' '}
                    Our account executives offer tailored financial solutions
                    for your carrier business.
                  </p>
                </div>
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </>
  )
}
