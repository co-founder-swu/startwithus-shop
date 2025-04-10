import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Homepage from './components/HomePage'; // Import Homepage
import BlogListPage from './components/BlogListPage'; // Import BlogListPage
import RequestAQuote from './components/RequestAQuote';
import BlogPage1 from './components/BlogPage1';
import BlogPage2 from './components/BlogPage2';
import BlogPage3 from './components/BlogPage3';
import JewelleryBlog from './components/JewelleryBlogPage';

const App = () => {
  const [showRequestQuote, setShowRequestQuote] = useState(false);

  const toggleRequestQuote = () => {
    setShowRequestQuote(!showRequestQuote);
  };

  return (
    <>
      <div className=' overflow-hidden'>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/blogs/*" element={<BlogListPage />} />
          <Route path="blogs/strong-online-presence-business-success" element={<BlogPage1 />} />
      <Route path="/blogs/custom-web-solutions-to-boost-business" element={<BlogPage2 />} />
      <Route path="/blogs/branding-to-build-customer-loyalty" element={<BlogPage3 />} />
      <Route path="/blogs/transform-your-jewellery-brand-along-hyper-realistic-ai-model-photography" element={<JewelleryBlog/>} />
        </Routes>
        <Footer />
        {showRequestQuote && (
          <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'>
            <div className='relative bg-white p-4 rounded-lg shadow-lg max-w-lg w-full'>
              <button className='absolute top-4 right-4 text-gray-700' onClick={toggleRequestQuote}>
                ✖
              </button>
              {/* Assuming RequestAQuote component is defined elsewhere */}
              <RequestAQuote />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default App;
