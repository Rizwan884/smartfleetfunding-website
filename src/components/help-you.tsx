import Image from 'next/image'
import { Container, Row } from 'react-bootstrap'
import Dropdown from 'react-bootstrap/Dropdown'
import { useI18nProvider } from '@/context/I18nProvider'
export default function HelpYou() {
  const { t } = useI18nProvider()
  return (
    <>
      <Container className="mt-6 pt-5 font-montserrat">
        <h1 className="fw-bold fs-2 mb-0 mx-4 w-75">How we help you</h1>
        <div className="line mt-0 mx-4 mt-1 w-3"></div>
        <div className="container d-flex flex-column pt-5">
          <Row className="m-2">
            <Image
              alt="img"
              width={200}
              height={270}
              src={t.freightbroker.helpyou.image}
            ></Image>
          </Row>
        </div>
        <div className="row pb-5">
        {t.freightbroker.helpyou.items.map((section, index) => (
            <div key={index} className="col-6 d-flex justify-content-end h-100">
              <div className="card w-20rem me-5 d-md-block d-none">
                <div className="card-body">
                  <h5 className="card-title fs-4 text-start fw-bold">{section.title}</h5>
                  <div className="line-programs"></div>
                  {section.details.map((detail, idx) => (
                    <div key={idx} className={`d-flex mb-4 lh-sm align-items-center gap-2 ${idx !== section.details.length - 1 ? 'line-programs' : ''}`}>
                      <Image
                        width={20}
                        height={20}
                        className="mt-14"
                        src={detail.icon}
                        alt="testimonial-img"
                      />
                      <div>
                        <p className="ms-2 mt-3 fs-5 fw-500 text-start">{detail.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <Dropdown className="row mx-3 flex-column d-lg-none">
                <Dropdown.Toggle variant="light" id="dropdown-basic">
                  <h5 className="card-title fs-6 text-start fw-bold">{section.title}</h5>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  {section.details.map((detail, idx) => (
                    <Dropdown.Item key={idx} href="#/action-1">
                      <div className={`d-flex mb-4 lh-sm align-items-center gap-2 ${idx !== section.details.length - 1 ? 'line-programs' : ''}`}>
                        <Image
                          width={20}
                          height={20}
                          className="mt-14"
                          src={detail.icon}
                          alt="testimonial-img"
                        />
                        <div>
                          <p className="ms-2 mt-3 fs-7 fw-30 text-start" style={{ maxWidth: '150px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'normal' }}>{detail.text}</p>
                        </div>
                      </div>
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            </div>
          ))}
        </div>
      </Container>
    </>
  )
}
