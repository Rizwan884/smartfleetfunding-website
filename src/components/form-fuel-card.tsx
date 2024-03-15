import Link from 'next/link'
import { FormEvent } from 'react'
import Image from 'react-bootstrap/Image'
import { useI18nProvider } from '@/context/I18nProvider'

type IProps = {
  backgroundImage?: string
  titleForm?: string | undefined
}

export default function FormFuelCard({ backgroundImage, titleForm }: IProps) {
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    await fetch(
      'https://flow.zoho.com/785473680/flow/webhook/incoming?zapikey=1001.1efe7f16cde72a5dc615d742476cc36e.fe77873c5c71e0bc95b7b8bb11dddbb8&isdebug=false',
      {
        method: 'POST',
        body: formData
      }
    )
  }
  const { t } = useI18nProvider()
  return (
    <>
      <div className="d-flex font-montserrat flex-column-reverse flex-md-row mt-6 pb-4">
        <div className="md-w-50 w-100 bg-dark-blue text-white">
          <form id="form" className="m-5" onSubmit={onSubmit}>
            <input
              id="form-name"
              name="form-name"
              value="fuel-card"
              type="hidden"
            ></input>
            <h1
              className=" fs-2 text-left fst-italic"
              style={{ marginBottom: '30px' }}
            >
              {titleForm}
              <div className="line "></div>
            </h1>
            <div className="row mb-3 flex-md-row flex-column">
              <div className="mb-3">
                <select
                  required
                  id="form-fuel-card"
                  className="form-select  bg-grey-transparent text-white"
                >
                  {t.fuelcard.formselectsoptions.map((option, index) => (
                    <option key={index} className="bg-dark-blue text-white" value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col ">
                <input
                  type="text"
                  className="form-control mb-3 mb-md-0 px-3 bg-grey-transparent text-white"
                  id="name"
                  name="name"
                  required
                  placeholder={t.fuelcard.formfullname}
                ></input>
              </div>
              <div className="col">
                <input
                  type="email"
                  className="form-control px-3 bg-grey-transparent text-white"
                  id="email"
                  name="email"
                  required
                  placeholder={t.fuelcard.formemail}
                ></input>
              </div>
            </div>
            <div className="row mb-3 flex-md-row flex-column">
              <div className="col">
                <input
                  type="text"
                  className="form-control mb-3 mb-md-0 px-3 bg-grey-transparent text-white"
                  id="company"
                  name="company"
                  required
                  placeholder={t.fuelcard.formcompany}
                ></input>
              </div>
              <div className="col">
                <input
                  type="number"
                  className="form-control px-3 bg-grey-transparent text-white"
                  id="phone"
                  name="phone"
                  required
                  placeholder={t.fuelcard.formphone}
                ></input>
              </div>
            </div>
            <div className="mb-3">
              <textarea
                className="form-control bg-grey-transparent text-white"
                id="message"
                name="message"
                required
                rows={3}
                placeholder={t.fuelcard.formmessage}
              ></textarea>
            </div>

            <div className=" col mb-3 form-check d-flex justify-content-between">
              <div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    {t.fuelcard.formcheck}
                    <Link
                      href="/privacy"
                      target="_blank"
                      className="text-decoration-none text-green"
                      passHref={true}
                    >
                      <strong>{t.fuelcard.formbreak}</strong>
                    </Link>
                  </label>
                </div>
              </div>

              <button type="submit" className="btn fw-600">
              {t.fuelcard.formbutton}
              </button>
            </div>
          </form>
        </div>
        <div className="md-w-50 w-100">
          <div className="position-relative h-100">
            <div style={{ width: '100%', height: '100%', overflow: 'hidden' }}>
              <Image
                className="w-100 h-100"
                style={{
                  objectFit: 'cover'
                }}
                src={backgroundImage || '/images/sff-fuel-card-form.webp'}
                alt="form"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
