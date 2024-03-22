import { useI18nProvider } from '@/context/I18nProvider'
import { Button, Card } from 'react-bootstrap'
import Image from 'react-bootstrap/Image'

type NeedsItems = {
  title: string
  descripcion: string
  icon: string
}
export default function Needs() {
  const { t } = useI18nProvider()
  return (
    <>
      <div className="container mt-7 font-montserrat">
        <div className="d-flex flex-column align-items-center">
          <div className="line width-bf fw-600 mb-2 ms-3 align-item-center"></div>
          <h1 className="fw-600 fs-2 text-center  text-dark-blue flex  align-items-center gap-3">
            {t.freightbroker.needstitle}
          </h1>
        </div>
      </div>
      <div className="card-container font-montserrat mt-5 h-100 flex-column w-100">
        <div className="row mx-0 px-0 px-md-auto mx-md-auto mb-3 justify-content-center  gap-3 gap-md-auto">
          {t.freightbroker.needs.map(
            ({ title, descripcion, icon }: NeedsItems, key: number) => (
              <Card
                key={key}
                className="mx-3 w-18rem bg-dark-blue text-white h-100"
              >
                <Card.Body className="text-start">
                  <Image alt="icons" src={icon} className="w-30px mb-4"></Image>
                  <Card.Text className="fs-5 lh-sm mt-1">
                    <strong className="text-green">{title}</strong>
                    {descripcion}
                  </Card.Text>
                </Card.Body>
              </Card>
            )
          )}
          {t.freightbroker.needstwo.map(
            ({ title, descripcion, icon }: NeedsItems, key: number) => (
              <Card
                key={key}
                className="mx-3 d-lg-none w-18rem bg-dark-blue text-white h-100"
              >
                <Card.Body className="text-start">
                  <Image alt="icons" src={icon} className="w-30px mb-4" />
                  <Card.Text className="fs-5 lh-sm mt-3">
                    <strong className="text-green">{title}</strong>
                    {descripcion}{' '}
                  </Card.Text>
                </Card.Body>
              </Card>
            )
          )}
        </div>
        <div className="row mx-0 px-0 px-md-auto mx-md-auto justify-content-center gap-3 gap-md-auto">
          {t.freightbroker.needstwo.map(
            ({ title, descripcion, icon }: NeedsItems, key: number) => (
              <Card
                key={key}
                className="mx-3 d-md-block d-none w-18rem bg-dark-blue text-white h-100"
              >
                <Card.Body className="text-start">
                  <Image alt="icons" src={icon} className="w-30px mb-4" />
                  <Card.Text className="fs-5 lh-sm mt-3">
                    <strong className="text-green">{title}</strong>
                    {descripcion}{' '}
                  </Card.Text>
                </Card.Body>
              </Card>
            )
          )}
        </div>
        <div className="mx-2 text-center">
          <Button
            href="/"
            className="contact_slide fw-bold fs-4 me-5 my-4 h-25 d-inline-block"
            variant="btn btn-custom"
          >
            {t.freightbroker.needsbutton}
          </Button>
          <Button
            href="https://outlook.office365.com/owa/calendar/WebPageSales@smartfleetfunding.com/bookings/ "
            className="contact_slide fw-bold fs-4  my-4 h-25 d-inline-block"
            variant="btn btn-custom"
          >
            {t.freightbroker.needsbuttontwo}
          </Button>
        </div>
      </div>
      <div className="container mt-7 pb-5 font-montserrat">
        <div className="d-flex flex-column align-items-center">
          <h1 className="f-500 pb-5 fs-2rem  text-center align-items-center gap-3  text-dark-blue">
          {t.freightbroker.needsfinaltext} <br />
            <strong className="text-dark-blue f-bold">
            {t.freightbroker.needsfinaltextstrong}
            </strong>
          </h1>
        </div>
      </div>
    </>
  )
}
