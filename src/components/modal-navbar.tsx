import { useI18nProvider } from '@/context/I18nProvider'
import { Button, Modal } from 'react-bootstrap'
export default function LoginModal({
  show,
  handleClose
}: {
  show: boolean
  handleClose: () => void
}) {
  const { t } = useI18nProvider()
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header className="bg-white" closeButton></Modal.Header>
      <Modal.Body className="bg-white">
        <div className="nv-modal">
          <div>
            <h5>{t.modalNavbar.titleCn}</h5>
            <Button
              className="contact_slide fw-bold d-inline-block"
              variant="btn btn-custom"
              href="https://smartfleetfundingca.profitstars.com/ "
            >
              {t.navbar.login}
            </Button>
          </div>
          <div>
            <h5>{t.modalNavbar.titleUs}</h5>
            <Button
              className="contact_slide fw-bold d-inline-block"
              variant="btn btn-custom"
              href="https://smartfleetfundingus.profitstars.com/"
            >
              {t.navbar.login}
            </Button>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer className="bg-white">
        <Button variant="danger" onClick={handleClose}>
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  )
}
