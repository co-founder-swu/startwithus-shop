import React, { useState } from 'react';
import ButtonGradient from '../assets/svg/ButtonGradient';
import { HashLink as Link } from "react-router-hash-link";
import Hero from './Hero';
import Services from './Services';
import Pricing from './Pricing';
import StickyRequestQuoteButton from './StickyButton';
import RequestAQuote from './RequestAQuote';
import StarsCanvas from './canvas/Stars'; // Adjust import path if necessary
import StartWithUs from './StartWithUs';
import Approach from './HowWeDoIt';
import Contact from './Contact';
import JewelleryShowcase from './design/JewelleryShowcase';

const HomePage = () => {
  const [showRequestQuote, setShowRequestQuote] = useState(false);

  const toggleRequestQuote = () => {
    setShowRequestQuote(!showRequestQuote);
  };

  return (
    <>
      <div className='pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden' id='home'>
        <StickyRequestQuoteButton onClick={toggleRequestQuote} />
        <div className='relative z-0'>
          <Hero id="hero"/>
          <StartWithUs id="about" />
          <Approach/>
          <Services id="services"/>
          <JewelleryShowcase id="jewellery"/>
          <Pricing id="pricing"/>
          <Contact id="contact"/>
          {showRequestQuote && (
            <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'>
              <div className='relative bg-white p-4 rounded-lg shadow-lg max-w-lg w-full'>
                <button className='absolute top-4 right-4 text-gray-700' onClick={toggleRequestQuote}>
                  ✖
                </button>
                <RequestAQuote />
              </div>
            </div>
          )}
        </div>
      </div>
      <ButtonGradient />
    </>
  );
};

export default HomePage;
