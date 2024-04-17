import { useI18nProvider } from '@/context/I18nProvider'
import Image from 'next/image'
import { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import { useMediaQuery } from 'react-responsive'
type ICard = {
  title: string
  descripcion: string
  strong: string
}
export default function SectionVideo() {
  const isMobile = useMediaQuery({ maxWidth: 770 })
  const [showModal, setShowModal] = useState(false)
  const { t } = useI18nProvider()
  const openModal = () => setShowModal(true)
  const closeModal = () => setShowModal(false)
  return (
    <>
      {isMobile ? (
        <div className="font-montserrat bg-white-rgb pb-5">
          {t.home.sectionvideo.map(
            ({ title, descripcion, strong }: ICard, key: number) => (
              <div key={key} className="">
                <div className="text-left mt-5 p-5">
                  <h2 className="fs-5 fw-bold  text-center">{title}</h2>
                  <div className="d-flex justify-content-center">
                    <div className="line"></div>
                  </div>

                  <div className="lh-sm card-text-bottom fs-6 mx-auto text-center mt-5 fw-500">
                    {descripcion}
                    <strong className="text-gray-dark">{strong}</strong>
                  </div>
                </div>
              </div>
            )
          )}
          <div className="col-12 md-col-5 embed-responsive embed-responsive-16by9 p-4 text-center  m-md-2 p-md-4 rounded-3">
            <a href="#" onClick={openModal} className="position-relative">
              <Image
                className="rounded-5"
                src="/images/sff-banner-video.webp"
                alt="Previsualización"
                width={370}
                height={300}
              />
              <div className="position-absolute top-50 start-50 translate-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="64"
                  height="64"
                  className="bi bi-play-circle-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill="var(--green)"
                    d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM6.5 5.25A.5.5 0 0 0 6 5.75v4.5a.5.5 0 0 0 .75.43l3.5-2.25a.5.5 0 0 0 0-.86l-3.5-2.25a.5.5 0 0 0-.25-.07z"
                  />
                </svg>
              </div>
            </a>
            <Modal size="lg" show={showModal} onHide={closeModal} centered>
              <Modal.Body className=" bg-dark-blue p-0 d-flex align-self-center">
                <iframe
                  src="https://www.youtube.com/embed/aRyiUJ4aneM?si=7YRI_tSSHRM6Ylgf"
                  width="420"
                  height="360"
                  title="National Truck Drive Appreciation Week 2023 - Smart Fleet"
                  allowFullScreen
                ></iframe>
              </Modal.Body>
            </Modal>
          </div>
        </div>
      ) : (
        <div className="font-montserrat row m-2">
          {t.home.sectionvideo.map(
            ({ title, descripcion, strong }: ICard, key: number) => (
              <div key={key} className="col-6">
                <div className="text-left m-5 p-5">
                  <h2 className="fs-3 fw-bold ">{title}</h2>
                  <div className="line"></div>
                  <div className="card-text-bottom fs-5  fw-400">
                    {descripcion}
                    <strong className="text-gray-dark">{strong}</strong>
                  </div>
                </div>
              </div>
            )
          )}
          <div className="col-5 align-self-center m-4 p-4 rounded-3">
            <a href="#" onClick={openModal} className="position-relative">
              <Image
                className="rounded-5"
                src="/images/sff-banner-video.webp"
                alt="Previsualización"
                width={550}
                height={300}
              />
              <div className="position-absolute top-50 start-50 translate-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  className="bi bi-play-circle-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill="var(--green)"
                    d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM6.5 5.25A.5.5 0 0 0 6 5.75v4.5a.5.5 0 0 0 .75.43l3.5-2.25a.5.5 0 0 0 0-.86l-3.5-2.25a.5.5 0 0 0-.25-.07z"
                  />
                </svg>
              </div>
            </a>
            <Modal size="lg" show={showModal} onHide={closeModal} centered>
              <Modal.Body className=" bg-dark-blue p-0 d-flex align-self-center">
                <iframe
                  src="https://www.youtube.com/embed/aRyiUJ4aneM?si=7YRI_tSSHRM6Ylgf"
                  width="720"
                  height="360"
                  title="National Truck Drive Appreciation Week 2023 - Smart Fleet"
                  allowFullScreen
                ></iframe>
              </Modal.Body>
            </Modal>
          </div>
        </div>
      )}
    </>
  )
}
