import { useI18nProvider } from '@/context/I18nProvider'
import Image from 'next/image'
import { Container, Row } from 'react-bootstrap'
import { useMediaQuery } from 'react-responsive'
export default function Programs() {
  const { t } = useI18nProvider()
  const isMobile = useMediaQuery({ maxWidth: 767 })
  return (
    <>
      {isMobile ? (
        <section className="py-5 bg-white-shadow font-montserrat">
          <Container>
            <h1 className="fw-bold  fs-3 mb-0 mx-4 w-100">
              {t.freightbroker.programtitle}
            </h1>
            <br />
            <div className="line-program mt-0 mx-4 mt-1 w-3"></div>
            <div className="container d-flex flex-column">
              <Row className="m-2">
                {t.freightbroker.programs.map((program, index) => (
                  <div
                    key={index}
                    className="d-flex mb-4 align-items-center gap-2 line-programs"
                  >
                    <div className="mt-2">
                      <h1 className="ms-2 fs-5 fw-600">{program.title}</h1>
                      <ul className="fs-5">
                        {program.items.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </Row>
            </div>
          </Container>
        </section>
      ) : (
        <section className="py-5 bg-white-shadow font-montserrat">
          <Container>
            <h1 className="fw-bold fs-2 mb-0 mx-4 w-75">
              {t.freightbroker.programtitleweb} <br />
              {t.freightbroker.programtitlewebbreak}
            </h1>
            <div className="line-program mt-0 mx-4 mt-1 w-3"></div>
            <br />
            <div className="container d-flex flex-column">
              <Row className="m-2">
                {t.freightbroker.programs.map((program, index) => (
                  <div
                    key={index}
                    className="d-flex mb-4 align-items-center gap-2 line-programs"
                  >
                    <Image
                      width={20}
                      height={20}
                      className={`testimonial-img${index + 1}`}
                      src={program.icon}
                      alt="testimonial-img"
                    ></Image>
                    <div className="mt-2">
                      <h1 className="ms-2  fs-5 fw-600">{program.title}</h1>
                      <ul className="fs-5">
                        {program.items.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </Row>
            </div>
          </Container>
        </section>
      )}
    </>
  )
}
