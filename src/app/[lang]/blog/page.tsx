"use client";
import Navbar from "../../../components/navbar";
import Footer from "../../../components/footer";
import Blog from "../../../components/blog-page";
import { useI18nProvider } from "@/context/I18nProvider";

export default function BlogPage() {
  const { t } = useI18nProvider()
  const blogs = t.blogs.bloginfo
  return (
    <>
      <Navbar />
      <Blog blogs={blogs} />
      <Footer />
    </>
  );
}
