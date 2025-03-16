import React, { useState, useEffect } from 'react';
import Section from './Section';
import Heading from './Heading';
import { service2, service3, service4, service5, service6, service7, service8, service9, service10, service11, service12, service13, check } from '../assets';
import { BackgroundCircles } from './design/Hero';


const Services = () => {
  const tabData = {
    'WebDesign': {
      id:"webdesign",
      image1: service3,
      image2: service2,
      title2: 'Features',
      title: 'Advantages',
      services: ["Custom Industry Layouts", "Seamless User Experience", "Customer-Driven Layouts", "Interactive Prototypes", "Visual Brand Essence"],
      services1: ["Enhanced engagement", "Industry-specific branding", "Higher conversions", "Tailored identity", "Satisfied customers"],
      paragraph: 'Elevate your online presence with our expert web design services. We create visually stunning, responsive designs tailored to your industry, enhancing user engagement and boosting conversions. We value your time and resources, offering guidance and support to make every investment count. Let’s bring your vision to life.'
    },
    'Web Dev': {
      id:"webdev",
      image1: service5,
      image2: service4,
      title2: 'Features',
      title: 'Advantages',
      services: ["Responsive Design", "Seamless User Experience", "Custom Industry Solutions", "WordPress Expertise", "Scalable & Secure"],
      services1: ["Smooth navigation", "User-centric design", "Industry-focused development", "Flexible CMS solutions", "Future-proof infrastructure"],
      paragraph: 'Build a robust, scalable website with our professional web development services. From custom coding to WordPress development, we ensure your site is secure, fast, and user-friendly. We prioritize your business goals, providing top-notch support and future-proof technology. Lets create your online success together.'
    },
    'Branding': {
      id:"branding",
      image1: service7,
      image2: service6,
      title2: 'Features',
      title: 'Advantages',
      services: ["Custom Logos", "Brand Identity", "Visual Guidelines", "Market Positioning", "Consistent Messaging"],
      services1: ["Memorable logos", "Strong brand identity", "Clear visual guidelines", "Effective market positioning", "Unified brand message"],
      paragraph: 'Make a lasting impression with our comprehensive branding services. We craft industry-specific logos, visual identities, and brand messaging that resonate with your audience. We value your brand’s impact, ensuring consistent and compelling communication. Lets elevate your brand and connect with your customers'
    },
    'Marketing': {
      id:"marketing",
      image1: service9,
      image2: service8,
      title2: 'Features',
      title: 'Advantages',
      services: ["Custom Campaigns", "Social Media Strategy", "Email Marketing", "PPC Management", "Analytics & Reporting"],
      services1: ["Targeted reach", "Effective social engagement", "Personalized communication", "Optimized ad spend", "Data-driven insights"],
      paragraph: 'Amplify your reach with our targeted marketing services. From social media management to PPC advertising, we design strategies that increase visibility and engagement. We prioritize your ROI, using data-driven insights to optimize your campaigns. Share your story and achieve your business goals with us.'
    },
    'SEO & Hosting': {
      id:"seo&hosting",
      image1: service11,
      image2: service10,
      title2: 'Features',
      title: 'Advantages',
      services: ["On-page SEO", "Technical SEO", "High-speed Hosting", "Secure Servers", "24/7 Support"],
      services1: ["Improved rankings", "Enhanced site performance", "Reliable hosting", "Top-notch security", "Continuous support"],
      paragraph: 'Boost your online visibility with our SEO and hosting services. We specialize in keyword optimization, technical SEO, and secure hosting to improve your search rankings and site performance. We ensure your website is fast, secure, and user-friendly, driving more organic traffic. Lets enhance your online presence.'
    },
    'Content Writing': {
      id:"contentwriting",
      image1: service13,
      image2: service12,
      title2: 'Features',
      title: 'Advantages',
      services: ["Industry-based Content", "SEO Optimized", "Engaging Copy", "Blog Posts", "Product Descriptions"],
      services1: ["Relevant and targeted", "Higher search rankings", "Captivating writing", "Regular updates", "Compelling product info"],
      paragraph: 'Craft compelling content with our professional writing services. From engaging blogs to SEO-optimized website copy, we create content that captivates your audience and improves search rankings. We value your brands voice, delivering polished and impactful writing. Lets tell your story and boost your online presence.'
    },
  };

  const tabs = Object.keys(tabData);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoSwitching, setIsAutoSwitching] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isAutoSwitching) {
        setActiveIndex(prevIndex => (prevIndex + 1) % tabs.length);
      }
    }, 7000); // Switch tabs every 7 seconds

    return () => clearInterval(interval);
  }, [isAutoSwitching, tabs.length]);

  const handleTabClick = (index) => {
    setActiveIndex(index);
    setIsAutoSwitching(false); // Stop automatic switching on manual tab click
  };

  return (
    <Section id="services" className=" font-poppins bg-gradient-to-tr from-n-8 via-n-14/20 to-n-14/300">
      <div className="relative ">
        {/* Content container */}
        <div className="container mx-auto relative z-10">
          {/* Heading */}
          <div className="flex flex-col items-center mb-4">
            <h1 id="title" className="font-poppins font-semibold h2 mb-6 ">
              <span className="text-gradient">Services We Offer</span>
            </h1>
          </div>

          {/* Tabs for Small Screens */}
          <div className="block lg:hidden mb-6">
            <nav className="flex flex-row space-x-2 overflow-x-auto">
              {tabs.map((tab, index) => (
                <button
                  key={index}
                  className={`py-3 px-4 fellow uppercase focus:outline-none whitespace-nowrap ${activeIndex === index ? 'text-black bg-conic-gradient font-bold border-b-4 border-gray-900' : 'text-sm'}`}
                  onClick={() => handleTabClick(index)}
                >
                  {tab}
                </button>
              ))}
            </nav>
          </div>

          {/* Content area */}
          <div className="flex lg:flex-row-reverse">
            {/* Tabs for Large Screens */}
            <div className="hidden lg:flex flex-col items-center justify-center mt-6 p-4 lg:mt-0 lg:ml-4 h-full">
              <Heading className="text-white" text="Explore our Services With a Click" />
              <nav className="flex flex-col space-y-2">
                {tabs.map((tab, index) => (
                  <button
                    key={index}
                    className={`py-3 px-4 fellow uppercase focus:outline-none ${activeIndex === index ? 'text-black bg-conic-gradient font-bold border-l-4 border-gray-900' : 'text-sm'}`}
                    onClick={() => handleTabClick(index)}
                  >
                    {tab}
                  </button>
                ))}
              </nav>
            </div>

            {/* Content */}
            <div className="flex-1 p-4">
              {tabs.map((tab, index) => (
                <div key={index} className={`${activeIndex === index ? '' : 'hidden'}`}>
                  <div className="relative flex flex-col space-y-4 lg:space-y-6">
                    {/* Paragraph */}
                    <p className="mb-4 font-poppins">{tabData[tab].paragraph}</p>

                    <div className="relative flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4">
                      {/* Column 2: image1 on the right */}
                      <div className={`relative flex-1 min-h-[8rem] lg:min-h-[8rem] opacity-85 border border-n-1/10 rounded-3xl overflow-hidden ${index % 2 === 0 ? 'bg-gradient-to-b from-n-8 to-n-14/20' : 'bg-gradient-to-t from-n-8/0 to-n-3/80'}`}>
                        <div className="absolute inset-0">
                          <img
                            src={tabData[tab].image1}
                            className="h-full w-full object-cover"
                            width={630}
                            height={200}
                            alt={tabData[tab].title2}
                          />
                        </div>
                        <div className={`relative max-w-[17rem] right-1/3 inset-0 flex flex-col justify-start p-4 ${index % 2 === 0 ? 'bg-gradient-to-b from-n-8 to-n-14/20' : 'bg-gradient-to-t from-n-8/0 to-n-3/80'}`}>
                          {/* Content for the right column */}
                          <h4 className="h5 mt-2 mb-2 text-white">{tabData[tab].title2}</h4>
                          <ul className="body-2">
                            {tabData[tab].services.map((item, index) => (
                              <li key={index} className="flex items-start text-bold text-white py-4 border-t border-n-6">
                                <img width={28} height={28} src={check} alt="check mark" />
                                <p className="ml-4">{item}</p>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Column 1: image1 on the left */}
                      <div className={`relative flex-1 min-h-[8rem] lg:min-h-[8rem] border opacity-85  border-n-1/10 rounded-3xl  overflow-hidden ${index % 2 === 0 ? 'bg-gradient-to-t from-n-3/80 to-n-8/0' : 'bg-gradient-to-b from-n-8/60 to-n-14/80'}`}>
                        <div className="absolute inset-0">
                          <img
                            src={tabData[tab].image2}
                            className="h-full w-full object-cover"
                            width={630}
                            height={200}
                            alt={tabData[tab].title}
                          />
                        </div>
                        <div className={`relative max-w-[17rem] right-1/3 inset-0 flex flex-col justify-end p-4 ${index % 2 === 0 ? 'bg-gradient-to-t from-n-8/0 to-n-3/80' : 'bg-gradient-to-b from-n-8/30 to-n-14/20'}`}>
                          {/* Content for the left column */}
                          <h4 className="h5 mt-2 mb-2 text-black">{tabData[tab].title}</h4>
                          <ul className="body-2">
                            {tabData[tab].services1.map((item, index) => (
                              <li key={index} className="flex items-start text-bold text-n-11 py-4 border-t border-n-6">
                                <img width={28} height={28} src={check} alt="check mark" />
                                <p className="ml-4">{item}</p>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <BackgroundCircles/>
      </div>
    </Section>
  );
};

export default Services;
