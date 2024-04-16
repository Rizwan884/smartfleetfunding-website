import { useI18nProvider } from '@/context/I18nProvider'
import Image from 'next/image'
export default function Road() {
  const { t } = useI18nProvider()
  return (
    <>
      <div className="d-md-none">
        <div className="text-left  p-5">
          <div className="fuel-card-road w-100 mx-auto">
            <Image
              alt="img"
              width={350}
              height={350}
              objectFit="cover"
              src="/images/sff-road-fuel-card-small.webp"
            />
          </div>
          <div className="d-flex justify-content-center pb-3">
            <div className="line"></div>
          </div>
          <h2 className="fs-6 fw-bold w-100 text-center">
            {t.fuelcard.road[0].title}
          </h2>

          <div className="lh-sm card-text-bottom fs-6 mx-auto text-center mt-5 fw-500">
            {t.fuelcard.road[0].descripcion}
          </div>
        </div>
      </div>
      <div className="d-none d-md-flex font-montserrat row m-2">
        <div className="col-7">
          <div className="text-left m-5 p-5">
            <h2 className="fs-4 fw-bold ">{t.fuelcard.road[0].title}</h2>
            <div className="line"></div>
            <div className="card-text-bottom fs-5  fw-400">
              {t.fuelcard.road[0].descripcion}
            </div>
          </div>
        </div>
        <div className="col-4 pt-5 ">
          <Image
            alt="img"
            width={500}
            height={400}
            objectFit="cover"
            src="/images/sff-road-fuel-card.webp"
          />
        </div>
      </div>
    </>
  )
}
