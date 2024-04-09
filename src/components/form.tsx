import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

import { useI18nProvider } from '@/context/I18nProvider'
type IProps = {
  backgroundImage?: string
  titleForm?: string | undefined
}

export default function SectionForm({ backgroundImage, titleForm }: IProps) {
  const { t } = useI18nProvider()
  const [checkboxChecked, setCheckboxChecked] = useState(false)
  const [formData, setFormData] = useState<{ [key: string]: string }>({
    formName: 'Full Fact',
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  })
  const [error, setError] = useState<string>('')
  // Function to handle form submission
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!checkboxChecked) {
      setError(t.fullcard.form[0].checkboxError)
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
      <div className="d-flex flex-column-reverse flex-md-row mt-6">
        <div className="md-w-50 w-100 bg-dark-blue text-white">
          <form onSubmit={handleSubmit} id="form" className="m-5">
            <input
              id="form-full-fact"
              name="form-full-fact"
              value="full-fact"
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
              <div className="col ">
                <input
                  type="text"
                  className="form-control mb-3 mb-md-0 px-3 bg-grey-transparent text-white"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder={t.fullcard.form[0].name}
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
                  placeholder={t.fullcard.form[0].email}
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
                  value={formData.company}
                  onChange={handleInputChange}
                  required
                  placeholder={t.fullcard.form[0].company}
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
                  placeholder={t.fullcard.form[0].phone}
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
                placeholder={t.fullcard.form[0].descripcion}
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
                    {t.fullcard.form[0].check}
                    <Link
                      href="/privacy"
                      target="_blank"
                      className="text-decoration-none text-green"
                      passHref={true}
                    >
                      <strong>{t.fullcard.form[0].strong}</strong>
                    </Link>
                  </label>
                </div>
                {error && <div className="text-danger">{error}</div>}
              </div>

              <button type="submit" className="btn fw-600">
                {t.fullcard.form[0].button}
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
                src={backgroundImage || '/images/sff-form.webp'}
                alt="form"
                width={1920}
                height={1080}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
