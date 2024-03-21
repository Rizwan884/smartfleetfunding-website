import Link from "next/link";
import { useState } from "react";
import Image from "next/image"

import { useI18nProvider } from '@/context/I18nProvider'
type IProps = {
  backgroundImage?: string
  titleForm?: string | undefined
}

export default function FormFreight({ backgroundImage, titleForm }: IProps) {
  const [formData, setFormData] = useState<{ [key: string]: string }>({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });

  // Function to handle form submission
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await fetch("/api/submitForm", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Form submitted successfully");
        console.log("response status: " + response.status);
      } else {
        console.error("Failed to submit form", response);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  // Function to handle input changes
  const handleInputChange = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    // Update form data state with new value
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
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
                  placeholder={t.freightbroker.formfullname}
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
                  placeholder={t.freightbroker.formcompany}
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
                  placeholder={t.freightbroker.formemail}
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
                  placeholder={t.freightbroker.formphone}
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
                placeholder={t.freightbroker.formmessage}
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
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    {t.freightbroker.formcheck}
                    <Link
                      href="/privacy"
                      target="_blank"
                      className="text-decoration-none text-green"
                      passHref={true}
                    >
                      <strong>{t.freightbroker.formbreak}</strong>
                    </Link>
                  </label>
                </div>
              </div>

              <button type="submit" className="btn fw-600">
              {t.freightbroker.formbutton}
              </button>
            </div>
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
            />
          </div>
        </div>
      </div>
    </>
  )
}
