import React from 'react';
import Section from '../Section';
import Button from '../Button';
import { video1 } from '../../assets';

const JewelleryShowcase = () => {
  return (
    <Section
      id="services"
      className="font-poppins bg-gradient-to-tr from-n-8 via-n-14/20 to-n-14/300 py-12"
    >
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center md:items-stretch gap-8 px-4 sm:px-6 lg:px-8">
        
        {/* Left side - Text content */}
        <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left items-center md:items-start">
          <h1 className="font-poppins font-semibold text-3xl md:text-4xl mb-6 leading-tight">
            <span className="text-gradient">
              Showcase Your Jewellery Like Never Before
            </span>
          </h1>

          {/* Mobile video */}
          <div className="w-full mb-6 md:hidden flex justify-center items-center">
            <div className="w-[300px] h-[440px] overflow-hidden rounded-xl shadow-lg bg-black">
              <video
                src={video1}
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
              />
            </div>
          </div>

          <p className="font-poppins text-base sm:text-lg md:text-lg mb-4 max-w-md">
            Send us clear product images, and we’ll create stunning, lifelike shots of models wearing your jewellery — perfect for your website, social media, and campaigns.
          </p>

          <ul className="text-gray-300 text-base sm:text-lg space-y-2 mb-6 py-4 max-w-md">
            <li>3–4 day delivery</li>
            <li>Free kickoff meeting before we start</li>
            <li>4K images in multiple formats</li>
            <li>Smooth, hands-off process</li>
            <li>Affordable & scalable</li>
          </ul>

          {/* Buttons in one line */}
          <div className="flex flex-wrap gap-4 mt-6">
            <Button href="https://www.startwithus.shop/blogs/transform-your-jewellery-brand-along-hyper-realistic-ai-model-photography" className="w-fit">
              Learn More
            </Button>
            <Button
              href="https://startwithus.notion.site/1d023ad8484f80e0ac4bd9e1b9376db7?pvs=105"
              className="w-fit"
              white
            >
              Get It Now
            </Button>
          </div>
        </div>

        {/* Right side - Desktop video */}
        <div className="w-full md:w-1/2 hidden md:flex justify-center items-center">
          <div className="w-[360px] h-[520px] overflow-hidden rounded-xl shadow-lg bg-black">
            <video
              src={video1}
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              controls
              playsInline
            />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default JewelleryShowcase;