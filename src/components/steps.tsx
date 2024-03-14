import { Container, Row } from 'react-bootstrap'
import { useI18nProvider } from '@/context/I18nProvider'
export default function Steps() {
  const { t } = useI18nProvider()
  const steps = t.instapay.steps

  return (
    <>
      <section className="py-5 bg-white-shadow font-montserrat">
        <Container>
          <h1 className="fw-bold fs-2 mb-0 mx-4">{t.instapay.stepstittle}</h1>
          <div className="line mt-0 mb-6 mx-4 mt-1 w-3"></div>
          <Row className="d-flex flex-column m-5 m-3rem">
            {steps.map((step, index) => (
              <div className="step-container" key={index}>
                <div className="step-number position-relative">
                  {index + 1}{' '}
                </div>
                <div className="lh-sm step-content fs-5">
                  <h3 className="fw-bold">{step.title}</h3>
                  <p className="fs-5">{step.text}</p>
                </div>
              </div>
            ))}
          </Row>
        </Container>
      </section>
    </>
  )
}
