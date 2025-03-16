import React from "react";
import Section from "./Section";
import Tagline from "./TagLine";
import { grid, grid3, roadmap1, roadmap2, roadmap3, roadmap4 } from "../assets";
import Timeline from "./Timeline";

const Roadmap = () => (
  <Section className="overflow-hidden" id="about">
    <div className="container p-6">
      <h1 id="title" className="font-poppins text-center font-semibold h2 mb-12">
        <span className="inline-block text-gradient relative">Turning Vision, Into Reality{" "}</span>
        <br /> <span>with Start With Us</span>
      </h1>
      <div className="relative z-1 lg:grid md:grid md:grid-cols-2 gap-8 lg:grid-cols-2">
        
        {/* Left Column */}
        <div className="relative min-h-[60rem] lg:pr-4 border border-n-1/10 rounded-3xl">
    <div className="absolute inset-0">
      <Tagline className="top-4 left-4 sm:top-8 sm:left-8 md:top-10 md:left-10 lg:top-12 lg:left-12">
        WHY START WITH US?
      </Tagline>
      <img
        src={roadmap1}
        className="h-full w-full object-cover contain"
        alt="robot"
      />
    </div>
    <div className="absolute inset-0 flex flex-col justify-end p-2 lg:p-10">
      <div className="w-full pt-8 lg:h-1/3">
        <h4 className="text-left mb-4 text-lg sm:text-3xl md:text-2xl lg:text-3xl">
          We create compelling online experiences that attract and retain customers, transforming your business vision into reality.
        </h4>
        <p className="body-2 mb-[3rem] text-n-3 text-left">
          Our mission is to deliver bespoke web design, development, and comprehensive digital marketing solutions tailored to your unique needs.
        </p>
      </div>
    </div>
  </div>

        {/* Right Column */}
        <div className="p-4 bg-back rounded-3xl overflow-hidden lg:min-h-[46rem]">
          <Tagline className="top-4 left-4 sm:top-8 sm:left-8 md:top-10 md:left-10 lg:top-12 lg:left-12">
            WHAT WE DO?
          </Tagline>
          <div className="py-14 px-4 xl:px-8">
            <h4 className="h4 pt-15 mb-4">
              We ensure your brand's message and product shine with clarity. Our commitment is to help you build a loyal customer base and turn your brand into a superstar.
            </h4>
            <p className="body-2 -mb-6 text-n-3">
              At Start With Us, we revolutionize how businesses connect online with custom-made, user-centric web solutions. We enhance user experience, drive business growth, and leverage strategic marketing, advertising, and SEO practices.
            </p>
          </div>

          <div className="relative h-[20rem] bg-n-8 rounded-xl overflow-hidden md:h-[25rem]">
            <div className="p-0.25 rounded-[2.5rem] bg-conic-gradient">
              <div className="relative p-8 bg-n-8 rounded-[2.4375rem] overflow-hidden xl:p-15">
                <div className="absolute top-0 left-0 w-full">
                  <img
                    className="w-full"
                    src={grid}
                    alt="Grid"
                  />
                </div>
                <div className="relative z-1">
                  <div className="mb-10 lg:-my-10 lg:-mx-15 sm:cover">
                    <img
                      className="w-full"
                      src={roadmap3}
                      alt="Roadmap 3"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative z-1 lg:grid md:grid md:grid-clos-2 gap-8 lg:grid-cols-2">
        <div className="p-4 bg-back rounded-3xl overflow-hidden lg:min-h-[46rem]">
          <div className="relative h-[15rem] bg-n-8 rounded-xl overflow-hidden md:h-[30rem]">
            <div className="p-0.25 rounded-[2.5rem] bg-conic-gradient">
              <div className="relative p-8 bg-n-8 rounded-[2.4375rem] overflow-hidden xl:p-15">
                <div className="absolute top-0 left-0 w-full">
                  <img
                    className="w-full"
                    src={grid}
                    alt="Grid"
                  />
                </div>
                <div className="relative z-1">
                  <div className="mb-10 lg:-my-20 lg:-mx-15 sm:cover">
                    <img
                      src={roadmap2}
                      alt="Roadmap 2"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Tagline className="top-4 left-4 sm:top-8 sm:left-8 md:top-10 md:left-10 lg:top-12 lg:left-12">
            OUR STORY
          </Tagline>
          <div className="py-14 px-4 xl:px-8">
            <h4 className="h4 pt-15 mb-4">
              Great stories often arise from identifying gaps and turning them into opportunities, driven by passion and built on a foundation of knowledge.            
            </h4>
            <p className="body-2 -mb-6 text-n-3">
              Shubhada noticed businesses struggling with their digital presence, while Vaibhav recognized ineffective marketing strategies. As friends, they combined their expertise in web development, SEO, and marketing to craft tailored solutions. Through extensive research and testing, they forged an efficient system driven by passion and innovation.
            </p>
          </div>
          <div className="flex flex-col md:flex-row text-white h-auto md:h-80 w-full md:w-[40rem] my-4 animate-timeline">
            <div className="w-full md:w-1/2 justify-center h-80 md:h-full hidden sm:block">
              <img src={roadmap4} alt="founders" className="object-cover w-full h-full" />
            </div>
            <div className="w-full md:w-1/2 h-auto md:h-full flex flex-col justify-center p-4">
              <h4 className="h4 pt-4 md:pt-0 mb-4 text-center md:text-left">Founder's Note</h4>
              <p className="body-2 mb-6 text-n-3 text-center md:text-left">
                "At 'Start With Us,' we empower businesses with unique digital experiences. Our passion for web design, development, and marketing, combined with over six years of experience, drives us to create personalized solutions that transform businesses. Thank you for trusting us with your vision; let's build something extraordinary together."
              </p>
            </div>
          </div>
        </div>
        <div className="p-4 bg-back rounded-3xl overflow-hidden">
          <Tagline className="top-4 left-4 sm:top-8 sm:left-8 md:top-10 md:left-10 lg:top-12 lg:left-12">
            ROADMAP
          </Tagline>
          <div className="py-14 px-4 xl:px-8">
            <h4 className="h4 pt-15 mb-4">
              Experience our streamlined roadmap meticulously tailored to meet each client's distinct needs.</h4>
            <Timeline id="roadmap"/>
            <img
              className="w-full -pt-10"
              src={grid3}
              alt="Grid"
            />
          </div>
        </div>
      </div>
    </div>
  </Section>
);

export default Roadmap;
