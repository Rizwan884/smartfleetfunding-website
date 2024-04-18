import { useI18nProvider } from '@/context/I18nProvider'
import { Container, Row } from 'react-bootstrap'
export default function Steps() {
  const { t } = useI18nProvider()
  const steps = t.fespay.steps

  return (
    <>
      <section className="py-5 bg-white-shadow font-montserrat">
        <Container>
          <h1 className="fw-bold fs-2 mb-0 mx-4">{t.fespay.stepsTitle}</h1>
          <div className="line mt-0 mb-6 mx-4 mt-1 w-3"></div>
          <Row className="d-flex flex-column m-5 m-3rem">
            {steps.map((step, index) => (
              <div className="step-container" key={index}>
                <div className="step-number position-relative">
                  {index + 1}{' '}
                </div>
                <div className="lh-sm step-content fs-5">
                  <h3 className="fw-bold" id="step-title">
                    {step.title}
                  </h3>
                  <p className="fs-6">{step.text}</p>
                </div>
              </div>
            ))}
          </Row>
        </Container>
      </section>
    </>
  )
}
