import Link from 'next/link'
import { FormEvent } from 'react'
import { useI18nProvider } from '@/context/I18nProvider'
export default function FormInstapay() {
  const { t } = useI18nProvider()
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
  return (
    <>
      <div className=" mt-6 font-montserrat fi-img">
        <div className="pt-5 px-5">
          <h1 className="fw-600 fs-2 text-center text-md-start fst-italic text-dark-blue w-100 w-md-65">
            {t.instapay.form[0].title}
          </h1>
        </div>
        <div className="d-flex">
          {' '}
          <div className="h-100 w-50 w-md-100 text-dark-blue">
            <form
              onSubmit={onSubmit}
              id="form-instapay"
              className="mx-5 my-5 m-md-5"
            >
              <input
                id="form-name"
                name="form-name"
                value="instapay"
                type="hidden"
              ></input>
              <div className="row mb-3 flex-md-row flex-column ">
                <div className="col">
                  <input
                    type="text"
                    className="form-control mb-3 mb-md-1 px-3 bg-grey-transparent text-dark-blue"
                    id="fullname"
                    name="name"
                    required
                    placeholder={t.instapay.form[0].name}
                  ></input>
                </div>
                <div className="col">
                  <input
                    type="email"
                    className="form-control px-3 bg-grey-transparent text-dark-blue"
                    id="fullemail"
                    name="email"
                    required
                    placeholder={t.instapay.form[0].email}
                  ></input>
                </div>
              </div>
              <div className="row mb-3 flex-md-row flex-column">
                <div className="col">
                  <input
                    type="text"
                    className="form-control mb-3 mb-md-1 px-3 bg-grey-transparent text-dark-blue"
                    id="fullcompany"
                    name="company"
                    required
                    placeholder={t.instapay.form[0].company}
                  ></input>
                </div>
                <div className="col">
                  <input
                    type="number"
                    className="form-control px-3 bg-grey-transparent text-dark-blue"
                    id="fullphone"
                    name="phone"
                    required
                    placeholder={t.instapay.form[0].phone}
                  ></input>
                </div>
              </div>
              <div className="row mb-3 flex-md-row flex-column ">
                <div className="col-12 col-md-6">
                  <input
                    type="text"
                    className="form-control px-3 bg-grey-transparent text-dark-blue"
                    id="freight"
                    name="freight"
                    required
                    placeholder={t.instapay.form[0].broker}
                  ></input>
                </div>
              </div>
              <div className="mb-3 ">
                <textarea
                  className="form-control bg-grey-transparent text-dark-blue"
                  id="comments"
                  name="comments"
                  required
                  rows={3}
                  placeholder={t.instapay.form[0].comments}
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
                      className="text-dark-blue"
                      htmlFor="flexCheckDefault"
                    >
                      {t.instapay.form[0].check}
                      <Link
                        href="/privacy"
                        target="_blank"
                        className="text-decoration-none text-dark-blue"
                        passHref={true}
                      >
                        <strong>{t.instapay.form[0].strong}</strong>
                      </Link>
                    </label>
                  </div>
                </div>

                <button type="submit" className="btn fw-600">
                {t.instapay.form[0].button}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
