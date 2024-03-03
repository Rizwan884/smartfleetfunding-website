import { useI18nProvider } from '@/context/I18nProvider'
import Image from 'react-bootstrap/Image'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { usePathname, useRouter } from 'next/navigation'

export default function LanguageSwitcher() {
  const { t } = useI18nProvider()
  const pathname = usePathname()

  return (
    <NavDropdown
      id="basic-nav-dropdown"
      className="mx-auto"
      title={
        <>
          <span className="text-green fw-bold mx-2">{t.languages.current.title}</span>
          <Image
            src="images/sff-arrow-down-green.svg"
            alt="Dropdown Icon"
            className="w-13 h-10"
          />
        </>
      }
    >
      {t.languages.available.map((language: { title: string, locale: string }, i: number) => {
        const newPathname = pathname.replace(t.languages.current.locale, language.locale)
        return (
          <NavDropdown.Item key={i} href={newPathname}>{language.title}</NavDropdown.Item>
        )
      })}
    </NavDropdown>
  )

}