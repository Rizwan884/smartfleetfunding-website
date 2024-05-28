import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

import { useI18nProvider } from '@/context/I18nProvider'
type IProps = {
  backgroundImage?: string
  titleForm?: string | undefined
}

export default function FormContact({ backgroundImage, titleForm }: IProps) {
  const { t } = useI18nProvider()
  const [checkboxChecked, setCheckboxChecked] = useState(false)
  const [formData, setFormData] = useState<{ [key: string]: string }>({
    formName: 'Contact',
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  })
  const [error, setError] = useState<string>('')
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false)
  // Function to handle form submission
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!checkboxChecked) {
      setError(t.contact.checkboxError)
      return
    }

    try {
      const response = await fetch('/api/submitForm', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          message: ''
        })
        setCheckboxChecked(false)
        setFormSubmitted(true)
      } else {
        alert('Failed to submit form' + response)
      }
    } catch (error) {
      alert('Error submitting form:' + error)
    }
  }
  //function to handle checkbox field
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheckboxChecked(event.target.checked)
    setError('') // Clear error message when checkbox is checked
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
      <div className="container d-flex flex-column flex-md-row mp-contact font-montserrat ">
        <div className=" md-w-60  w-100">
          <div className="position-relative h-100">
            <Image
              src={`${backgroundImage || ''}`}
              style={{ objectFit: 'cover' }}
              alt="form"
              fill
            />
            <div className="position-relative ">
              <div className="container">
                <h1 className="p-4 pt-5 mt-5  mt-md-0 fs-3 position relative text-center text-md-start">
                  {t.contact.contactTitleForm}{' '}
                  <strong>
                    {t.contact.contactTitleStrong} <br />
                    {t.contact.contacttitleBreak}
                  </strong>
                </h1>
                <div className="line-contact m-4"></div>
                <div className="row ">
                  <div
                    className="text-left mt-3 mt-md-0 p-md-4 d-flex align-items-center gap-2 justify-content-center justify-content-md-start
                  "
                  >
                    <Image
                      className="img-style mt-1"
                      alt="icon"
                      width={30}
                      height={30}
                      src="/images/sff-contact-phone.svg"
                    />
                    <div className="lh-sm ">
                      <h2 className="fs-4 fw-600 text-dark-blue mt-1">
                        <a className="remove-link-styles" href="tel:8888755506">
                          +1 (888) 875-5506
                        </a>
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="row mt-md-14">
                  <div className="text-left mb-5 mb-md-0 p-2 p-md-4 d-flex align-items-center gap-2 justify-content-center justify-content-md-start">
                    <Image
                      className="img-style mt-1"
                      alt="icon"
                      width={28}
                      height={28}
                      src="/images/sff-contact-mail.svg"
                    />
                    <div className="">
                      <h2 className="fs-4 mt-3 fw-600 text-dark-blue">
                        <a
                          className="remove-link-styles"
                          href="mailto:info@smartfleetfunding.com"
                        >
                          info@smartfleetfunding.com
                        </a>
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="md-w-50 w-100  bg-dark-blue text-white">
          <form onSubmit={handleSubmit} id="form" className="m-3rem">
            <input
              id="form-name"
              name="form-name"
              value="contact"
              type="hidden"
            ></input>
            <h1
              className=" fs-2 d-flex flex-column align-items-center align-items-md-start pb-3 pb-md-0 fst-italic"
              style={{ marginBottom: '30px' }}
            >
              {titleForm}
              <div className="line text-center text-md-left "></div>
            </h1>
            <div className="row gap-2 gap-md-0 mb-2 mb-md-3 flex-md-row flex-column">
              <div className="col">
                <input
                  type="text"
                  className="form-control px-3 bg-grey-transparent text-white"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder={t.contact.formName}
                ></input>
              </div>
              <div className="col">
                <input
                  type="email"
                  className="form-control px-3 bg-grey-transparent text-white"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder={t.contact.formEmail}
                ></input>
              </div>
            </div>
            <div className="row gap-2 gap-md-0 mb-3 flex-md-row flex-column">
              <div className="col">
                <input
                  type="text"
                  className="form-control px-3 bg-grey-transparent text-white"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  required
                  placeholder={t.contact.formCompany}
                ></input>
              </div>
              <div className="col">
                <input
                  type="number"
                  className="form-control px-3 bg-grey-transparent text-white"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  placeholder={t.contact.formPhone}
                ></input>
              </div>
            </div>
            <div className="mb-3">
              <textarea
                className="form-control bg-grey-transparent text-white"
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={3}
                placeholder={t.contact.formMessage}
              ></textarea>
            </div>
            <div className="mb-3 form-check d-flex justify-content-between">
              <div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                    checked={checkboxChecked}
                    onChange={handleCheckboxChange}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    {t.contact.formCheck}
                    <Link
                      href="/privacy"
                      target="_blank"
                      className="text-decoration-none text-green"
                      passHref={true}
                    >
                      <strong>{t.contact.formBreak}</strong>
                    </Link>
                  </label>
                </div>
                {error && <div className="text-danger">{error}</div>}
              </div>

              <button type="submit" className="btn fw-600 me-1 ">
                {t.contact.formButton}
              </button>
            </div>
            {formSubmitted && (
              <strong>
                <div className="text-green">{t.contact.formSubmitted}</div>
              </strong>
            )}
          </form>
        </div>
      </div>
    </>
  )
}
