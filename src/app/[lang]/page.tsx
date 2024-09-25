'use client'

import SectionVideo from '@/components/section-video'
import Trustpilot from '@/components/trustpilot'
import CardsSections from '../../components/cards_sections'
import Footer from '../../components/footer'
import Navbar from '../../components/navbar'
import Slider from '../../components/slider'
export default function Home() {
  return (
    <>
      <head>
        <meta
          name="google-site-verification"
          content="rakFQL2ifWxbIOmUvCc7aHUjsN1R252vfJX9sEF2dKY"
        />
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
      <Slider />
      <CardsSections />
      <SectionVideo />
      <Trustpilot />
      <Footer />
    </>
  )
}
