'use client'
import Banners from '@/components/banner'
import Know from '@/components/know'
import { useI18nProvider } from '@/context/I18nProvider'
import Footer from '../../../components/footer'
import Navbar from '../../../components/navbar'

export default function AboutUs() {
  const { t } = useI18nProvider()
  const title = (
    <p className="font-montserrat">
      {t.about.pageTitle}{' '}
      <strong className="fw-bold">{t.about.pagestrong}</strong>
    </p>
  )
  const titleMobile = (
    <p className="text-dark-blue">
      {t.about.pageTitle}{' '}
      <strong className="fw-bold">{t.about.pagestrong}</strong>
    </p>
  )

  return (
    <>
      <head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-0XVT3QM87R"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-0XVT3QM87R');
          `
          }}
        />
      </head>
      <Navbar />
      <Banners
        title={title}
        titleMobile={titleMobile}
        hideIcons
        mobileBackgroundImage="/images/sff-about-us-mobile.webp"
        backgroundImage="/images/sff-about-us.webp"
      />
      <Know />
      <Footer />
    </>
  )
}
