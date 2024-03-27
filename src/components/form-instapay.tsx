import Link from 'next/link'
import { useState } from 'react'

import { useI18nProvider } from '@/context/I18nProvider'
export default function FormInstapay() {
  const { t } = useI18nProvider()
  const [formData, setFormData] = useState<{ [key: string]: string }>({
    name: '',
    email: '',
    company: '',
    phone: '',
    freightBroker: '',
    comments: ''
  })

  // Function to handle form submission
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    try {
      const response = await fetch('/api/submitForm', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        // eslint-disable-next-line no-console
        console.log('Form submitted successfully')
        // eslint-disable-next-line no-console
        console.log('response status: ' + response.status)
      } else {
        // eslint-disable-next-line no-console
        console.error('Failed to submit form', response)
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Error submitting form:', error)
    }
  }

  // Function to handle input changes
  const handleInputChange = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target
    // Update form data state with new value
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }))
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
              onSubmit={handleSubmit}
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
                    className="form-control mb-3 mb-md-1 px-3 bg-grey-transparent-instapay text-dark-blue"
                    id="fullname"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder={t.instapay.form[0].name}
                  ></input>
                </div>
                <div className="col">
                  <input
                    type="email"
                    className="form-control px-3 bg-grey-transparent-instapay text-dark-blue"
                    id="fullemail"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder={t.instapay.form[0].email}
                  ></input>
                </div>
              </div>
              <div className="row mb-3 flex-md-row flex-column">
                <div className="col">
                  <input
                    type="text"
                    className="form-control mb-3 mb-md-1 px-3 bg-grey-transparent-instapay text-dark-blue"
                    id="fullcompany"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    required
                    placeholder={t.instapay.form[0].company}
                  ></input>
                </div>
                <div className="col">
                  <input
                    type="number"
                    className="form-control px-3 bg-grey-transparent-instapay text-dark-blue"
                    id="fullphone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    placeholder={t.instapay.form[0].phone}
                  ></input>
                </div>
              </div>
              <div className="row mb-3 flex-md-row flex-column ">
                <div className="col-12 col-md-6">
                  <input
                    type="text"
                    className="form-control px-3 bg-grey-transparent-instapay text-dark-blue"
                    id="freight"
                    name="freight"
                    value={formData.freightBroker}
                    onChange={handleInputChange}
                    required
                    placeholder={t.instapay.form[0].broker}
                  ></input>
                </div>
              </div>
              <div className="mb-3 ">
                <textarea
                  className="form-control bg-grey-transparent-instapay text-dark-blue"
                  id="comments"
                  name="comments"
                  value={formData.comments}
                  onChange={handleInputChange}
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
