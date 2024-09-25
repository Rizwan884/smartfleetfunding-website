'use client'
import { useI18nProvider } from '@/context/I18nProvider'
import Blog from '../../../components/blog-page'
import Footer from '../../../components/footer'
import Navbar from '../../../components/navbar'

export default function BlogPage() {
  const { t } = useI18nProvider()
  const blogs = t.blogs.blogInfo
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
      <Blog blogs={blogs} />
      <Footer />
    </>
  )
}
