import { useI18nProvider } from '@/context/I18nProvider'
import { Card } from 'react-bootstrap'
import Image from 'react-bootstrap/Image'
import { useMediaQuery } from 'react-responsive'
type ICard = {
  strong: string
  icon: string
}
export default function CardsFuel() {
  const { t } = useI18nProvider()
  const isMobile = useMediaQuery({ maxWidth: 768 })
  return (
    <>
      {isMobile ? (
        <div className="card-container font-montserrat mt-1 h-100 flex-column w-100">
          <div className="row mx-0 px-0 px-md-auto mx-md-auto mb-3 w-75 justify-content-center gap-3 gap-md-auto">
            {t.fuelcard.CardsFuel.map(
              ({ strong, icon }: ICard, key: number) => (
                <Card
                  key={key}
                  className="mx-3 w-100 bg-light text-dark h-100 d-flex align-items-center"
                >
                  <Card.Body className="text-start d-flex align-items-left">
                    <div className="w-75">
                      <Image alt="icons" src={icon} className="w-75 h-100" />
                    </div>
                    <div>
                      <Card.Text className="fs-6 lh-sm mt-1 text-left text-md-start">
                        <strong>{strong}</strong>
                      </Card.Text>
                    </div>
                  </Card.Body>
                </Card>
              )
            )}
          </div>
        </div>
      ) : (
        <div className="card-container font-montserrat mt-1 h-100 flex-column w-100">
          <div className="row mx-0 px-0 px-md-auto mx-md-auto mb-3 w-65 justify-content-center gap-3 gap-md-auto">
            {t.fuelcard.CardsFuel.map(
              ({ strong, icon }: ICard, key: number) => (
                <Card
                  key={key}
                  className="mx-3 mb-4 w-100 bg-light text-dark h-100 d-flex align-items-center"
                >
                  <Card.Body className="text-start d-flex align-items-left">
                    <div className="w-25px me-3">
                      <Image alt="icons" src={icon} className="w-75 h-100" />
                    </div>
                    <div>
                      <Card.Text className="fs-5 lh-sm mt-1 text-center text-md-start">
                        <strong>{strong}</strong>
                        <strong></strong>
                      </Card.Text>
                    </div>
                  </Card.Body>
                </Card>
              )
            )}
          </div>
        </div>
      )}
    </>
  )
}
