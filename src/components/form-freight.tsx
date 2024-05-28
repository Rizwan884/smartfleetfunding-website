import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

import { useI18nProvider } from '@/context/I18nProvider'
type IProps = {
  backgroundImage?: string
  titleForm?: string | undefined
}

export default function FormFreight({ backgroundImage, titleForm }: IProps) {
  const [checkboxChecked, setCheckboxChecked] = useState(false)
  const [formData, setFormData] = useState<{ [key: string]: string }>({
    formName: 'Freight Broker',
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
      setError(t.freightbroker.checkboxError)
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
  const { t } = useI18nProvider()
  return (
    <>
      <div className="d-flex flex-column-reverse flex-md-row mt-6">
        <div className="md-w-50 w-100 bg-dark-blue text-white">
          <form onSubmit={handleSubmit} id="form" className="m-5">
            <input
              id="form-name"
              name="form-name"
              value="freight"
              type="hidden"
            ></input>
            <h1
              className="fw-normal fs-2 text-left fst-italic"
              style={{ marginBottom: '30px' }}
            >
              {titleForm}
              <div className="line "></div>
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
                  placeholder={t.freightbroker.formFullName}
                ></input>
              </div>
              <div className="col">
                <input
                  type="text"
                  className="form-control px-3 bg-grey-transparent text-white"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  required
                  placeholder={t.freightbroker.formCompany}
                ></input>
              </div>
            </div>
            <div className="row gap-2 gap-md-0 mb-3 flex-md-row flex-column">
              <div className="col">
                <input
                  type="email"
                  className="form-control px-3 bg-grey-transparent text-white"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder={t.freightbroker.formEmail}
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
                  placeholder={t.freightbroker.formPhone}
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
                placeholder={t.freightbroker.formMessage}
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
                    {t.freightbroker.formCheck}
                    <Link
                      href="/privacy"
                      target="_blank"
                      className="text-decoration-none text-green"
                      passHref={true}
                    >
                      <strong>{t.freightbroker.formBreak}</strong>
                    </Link>
                  </label>
                </div>
                {error && <div className="text-danger">{error}</div>}
              </div>

              <button type="submit" className="btn fw-600">
                {t.freightbroker.formButton}
              </button>
            </div>
            {formSubmitted && (
              <strong>
                <div className="text-green">
                  {t.freightbroker.formSubmitted}
                </div>
              </strong>
            )}
          </form>
        </div>
        <div className="md-w-50 w-100">
          <div style={{ width: '100%', height: '100%', overflow: 'hidden' }}>
            <Image
              className="w-100 h-100"
              style={{
                objectFit: 'cover'
              }}
              src={backgroundImage || '/images/sff-form-freight.webp'}
              alt="form"
              width={1920}
              height={1080}
            />
          </div>
        </div>
      </div>
    </>
  )
}
