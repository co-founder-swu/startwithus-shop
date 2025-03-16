import React from "react";
import { Link, Route, Routes, Outlet } from "react-router-dom";
import BlogPage1 from "./BlogPage1";
import BlogPage2 from "./BlogPage2";
import BlogPage3 from "./BlogPage3";
import Section from "./Section";
import { blogList } from "../constants"; // Import the updated blogList
import { BP1Intro, BP2Intro, BP3Intro } from "../assets";

const BlogListPage = () => (
  <Section className="overflow-hidden" id="bloglist">
    <div className="container px-4 sm:px-6 lg:px-8 md:pb-10">
      <div className="flex flex-col items-center mt-10 mb-4">
        <h1 id="title" className="font-poppins font-semibold mt-15 h2 mb-5 text-center">
          <span className="text-gradient">Case Studies and Blog Posts</span>
        </h1>
      </div>

      <div className=" lg:grid md:grid sm:pb-10 p-6 gap-x-10 pr-10 md:grid-cols-2 lg:grid-cols-2">
        {blogList.map((item) => (
          <div
            className="relative my-auto p-4 neon-border bg-gradient-to-tr from-n-8 via-n-11/30 to-n-13/50 rounded-[2.4375rem] overflow-hidden"
            key={item.id}
          >
            <div className="relative z-1">
              <div className="mb-4 mx-auto">
                <img
                  src={item.imageUrl}
                  className=" h-auto mx-auto rounded-md"
                  width={300}
                  alt={item.title}
                />
              </div>
              <h4 className="h4 mb-4 text-center">{item.title}</h4>
              <p className="body-2 text-n-1 font-thin mb-6 text-center">{item.summary}</p>
              <div className="flex justify-center mb-4">
                <Link 
                  to={`/blogs/blog${item.id}`} 
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
      <Route path="blogs/blog1" element={<BlogPage1 />} />
      <Route path="blogs/blog2" element={<BlogPage2 />} />
      <Route path="blogs/blog3" element={<BlogPage3 />} />
      {/* Add more routes for other blog posts as needed */}
    </Routes>
    <Outlet />
  </div>
);

export default BlogList;
