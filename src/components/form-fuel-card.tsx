import Link from "next/link";
import { useState } from "react";
import Image from "next/image"
import { useI18nProvider } from '@/context/I18nProvider'

type IProps = {
  backgroundImage?: string
  titleForm?: string | undefined
}

export default function FormFuelCard({ backgroundImage, titleForm }: IProps) {
  const [formData, setFormData] = useState<{ [key: string]: string }>({
    option: "0",
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });

  // Function to handle form submission
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formData);
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
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = event.target;

    // Verificar si el evento es para un select
    const newValue =
      event.target instanceof HTMLSelectElement
        ? value
        : event.currentTarget.value;

    // Update form data state with new value
    setFormData((prevData) => ({
      ...prevData,
      [name]: newValue,
    }));
  };

  const { t } = useI18nProvider()
  return (
    <>
      <div className="d-flex font-montserrat flex-column-reverse flex-md-row mt-6 pb-4">
        <div className="md-w-50 w-100 bg-dark-blue text-white">
          <form id="form" className="m-5" onSubmit={handleSubmit}>
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
                  id="option"
                  name="option"
                  
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
                  value={formData.name}
                  onChange={handleInputChange}
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
                  value={formData.email}
                  onChange={handleInputChange}
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
                  value={formData.company}
                  onChange={handleInputChange}
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
                  value={formData.phone}
                  onChange={handleInputChange}
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
                value={formData.message}
                onChange={handleInputChange}
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

              {formData.option === "0" ? (
                <button type="submit" className="btn fw-600" disabled>
                  SEND
                </button>
              ) : (
                <button type="submit" className="btn fw-600">
                {t.fuelcard.formbutton}
                </button>
              )}
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
