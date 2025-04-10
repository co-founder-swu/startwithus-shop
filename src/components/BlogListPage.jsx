import React from "react";
import { Link, Route, Routes, Outlet } from "react-router-dom";
import BlogPage1 from "./BlogPage1";
import BlogPage2 from "./BlogPage2";
import BlogPage3 from "./BlogPage3";
import Section from "./Section";
import { blogList } from "../constants";
import JewelleryBlog from "./JewelleryBlogPage";

const BlogListPage = () => (
  <Section className="overflow-hidden" id="bloglist">
    <div className="container px-4 sm:px-6 lg:px-8 md:pb-10">
      <div className="flex flex-col items-center mt-10 mb-4">
        <h1
          id="title"
          className="font-poppins font-semibold mt-15 h2 mb-5 text-center"
        >
          <span className="text-gradient">Case Studies and Blog Posts</span>
        </h1>
      </div>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-8 gap-y-10 p-6">
  {blogList.map((item) => (
    <div
      className="relative p-10 neon-border bg-gradient-to-tr from-n-8 via-n-11/30 to-n-13/50 rounded-[2.4375rem] overflow-hidden flex flex-col justify-between h-full"
      key={item.id}
    >
      <div className="relative z-1 flex flex-col h-full">
        <div className="mb-6 mx-auto w-full h-[200px] overflow-hidden rounded-md flex items-center justify-center bg-white/5">
          <img
            src={item.imageUrl}
            className="object-contain w-full h-full"
            alt={item.title}
          />
        </div>

        <h4 className="h4 mb-6 text-center">{item.title}</h4>
        <p className="body-2 text-n-1 font-thin mb-6 text-center">{item.summary}</p>
        <div className="flex justify-center mt-auto">
          <Link
            to={`/blogs/${item.id}`}
            className="btn underline underline-offset-8 font-poppins text-gradient decoration-n-14"
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  ))}
</div>
    </div>
  </Section>
);

const BlogList = () => (
  <div>
    <Routes>
      <Route path="/" element={<BlogListPage />} />
      <Route path="blogs/strong-online-presence-business-success" element={<BlogPage1 />} />
      <Route path="/blogs/custom-web-solutions-to-boost-business" element={<BlogPage2 />} />
      <Route path="/blogs/branding-to-build-customer-loyalty" element={<BlogPage3 />} />
      <Route
        path="/blogs/transform-your-jewellery-brand-along-hyper-realistic-ai-model-photography"
        element={<JewelleryBlog />}
      />
    </Routes>
    <Outlet />
  </div>
);

export default BlogListPage;