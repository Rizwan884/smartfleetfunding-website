import { useI18nProvider } from '@/context/I18nProvider'
import { Card } from 'react-bootstrap'
export default function Know() {
  const { t } = useI18nProvider()
  return (
    <>
      <div className="container px-5 px-md-auto mt-7 font-montserrat">
        <div className="d-flex flex-column align-items-center">
          <div className="line width-bf fw-600 mb-2 ms-md-3 align-item-center"></div>
          <h1 className="d-md-block d-none fw-regular fs-2 text-center flex  align-items-center gap-3">
            {t.about.knowTitle} <strong>{t.about.knowStrong}</strong>
          </h1>
          <h1 className="d-md-none  fw-regular fs-2 text-center flex  align-items-center gap-3">
            {t.about.knowTitle}{' '}
            <strong>
              {' '}
              <br />
              {t.about.knowStrong}
            </strong>
          </h1>
        </div>
      </div>
      <div className="card-container font-montserrat mt-5 mb-5 h-100 flex-column w-100">
        <div className="row px-0 mx-0 px-md-auto mx-md-auto mb-3 justify-content-center gap-3 gap-md-3">
          {t.about.cards.map((card, index) => (
            <Card
              key={index}
              className="mx-3 w-18rem bg-white text-white h-100 al-left"
            >
              <Card.Body className="text-start">
                <Card.Text className="fs-6 lh-sm mt-4 ms-auto text-dark-blue">
                  {card.title}
                  <br />
                  <p className="mt-1">
                    <strong className="fs-5 pt-3">{card.text}</strong>
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
          ))}
        </div>
        <div className="row px-0 mx-0 px-md-auto mx-md-auto justify-content-center gap-3 gap-md-3 ">
          {t.about.cardsTwo.map((card, index) => (
            <Card
              key={index}
              className="mx-3 w-18rem bg-white text-white h-100 al-left"
            >
              <Card.Body className="text-start">
                <Card.Text className="fs-6 lh-sm mt-2 ms-auto text-dark-blue">
                  {card.title}
                  <br />
                  <p className="mt-1">
                    <strong className="fs-5">{card.text}</strong>
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
      <div className="container px-5 px-md-auto pt-6 pb-6 font-montserrat">
        {t.about.knowSection.map((know, index) => (
          <div
            key={index}
            className={`row pt-5 pb-5 ${index !== t.about.knowSection.length - 1 ? 'line-programs' : ''}`}
          >
            <div className="col-md-4">
              {' '}
              <h1 className="fw-bold fs-3 mb-0  w-75">{know.title}</h1>
              <div className="line-program mt-0 mb-3 mt-1 w-3"></div>
            </div>
            <div className="col-md-8">
              {know.descripcion}
              <strong>{know.strong}</strong>
            </div>
          </div>
        ))}
        {/* <div className="row line-programs pb-5">
          <div className="col-md-4">
            {' '}
            <h1 className="fw-bold fs-3 mb-0   w-75">Who We Are</h1>
            <div className="line-program mt-0 mb-3 mt-1 w-3"></div>
          </div>
          <div className="col-md-8">
            With over 30 years of experience in the factoring market, Smart
            Fleet Funding has been a key player in providing support and funding
            to various industries, with a particular focus on transportation.{' '}
            <strong>
              {' '}
              We have a proven track record of successfully running the Instapay
              Program (FES Pay) for major Freight Brokers in North America.
              Currently, we proudly serve clients across all of North America.
            </strong>
          </div>
        </div>
        <div className="row line-programs pt-5 pb-5">
          <div className="col-md-4">
            {' '}
            <h1 className="fw-bold fs-3 mb-0  w-75">Our Commitment</h1>
            <div className="line-program mt-0 mb-3 mt-1 w-3"></div>
          </div>
          <div className="col-md-8">
            At Smart Fleet Funding, we{"'"}ve designed a system that simplifies
            the process of getting paid. Our mission is to remove the
            complexities and delays associated with unpaid invoices, turning
            them into immediate cash with a simple click.{' '}
            <strong>
              {' '}
              We understand that steady cash-flow is crucial for any business to
              thrive, and we{"'"}
              re dedicated to ensuring our clients{"'"} success.
            </strong>
          </div>
        </div>
        <div className="row line-programs pt-5 pb-5">
          <div className="col-md-4">
            {' '}
            <h1 className="fw-bold fs-3 mb-0  w-75">What Sets Us Apart</h1>
            <div className="line-program mt-0 mb-3 mt-1 w-3"></div>
          </div>
          <div className="col-md-8">
            Our dedication to innovation and building strong client
            relationships sets us apart. We prioritize financial accountability
            and transparency as the cornerstone of every successful business.
            Each client, regardless of size, receives our utmost attention.{' '}
            <strong>
              {' '}
              We continually seek new ways to expedite processes, ensuring that
              every client feels valued and prioritized.
            </strong>
          </div>
        </div>
        <div className="row  pt-5 pb-5">
          <div className="col-md-4 ">
            {' '}
            <h1 className="fw-bold fs-3 mb-0 w-75">
              Why Choose Smart Fleet Funding
            </h1>
            <div className="line-program mt-0  mb-3 mt-1 w-3"></div>
          </div>
          <div className="col-md-8">
            Choosing Smart Fleet Funding means choosing a partner invested in
            your success. We specialize in tailoring funding solutions for
            trucking companies, enabling them to get paid faster and offering
            significant discounts to boost profitability.{' '}
            <strong>
              {' '}
              With us, you{"'"}re not just a client; you{"'"}re a valued partner
              <br />
              on the path to success.
            </strong>
          </div>
        </div> */}
      </div>
    </>
  )
}
