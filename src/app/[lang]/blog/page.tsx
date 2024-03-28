'use client'
import { useI18nProvider } from '@/context/I18nProvider'
import Blog from '../../../components/blog-page'
import Footer from '../../../components/footer'
import Navbar from '../../../components/navbar'

export default function BlogPage() {
  const { t } = useI18nProvider()
  const blogs = t.blogs.bloginfo
  return (
    <>
      <Navbar />
      <Blog blogs={blogs} />
      <Footer />
    </>
  )
}
