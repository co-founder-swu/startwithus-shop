import { heroBackground, robot } from "../assets";
import Button from "./Button";
import Section from "./Section";
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";
import { ScrollParallax } from "react-just-parallax";
import Generating from "./Generating";
import Notification from "./Notification";
import { notificationImages } from "../constants";
import { useRef,  } from "react";


const Hero = () => {
  const parallaxRef = useRef(null);

  return (
    <Section
      className="pt-[14rem] -mt-[5.25rem] bg-gradient-tol from-n-8 via-n-14/20 to-n-14/40"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className="container relative" ref={parallaxRef}>
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
          <h1 id="title" className="font-poppins font-semibold h1 mb-6 ">
                  Explore your{" "}
                  <span className="text-gradient">Business Potential </span>
                  <br/> <span>with </span>
                   <span className="inline-block relative">Start With Us
                </span>
                </h1>
                <p className="body-1 max-w-5xl mx-auto text-n-2 mt-2 mb-8">
                    Transform your Brand with Expert Website, <br/>Marketing and Branding Solutions
                </p>
          <Button href="#pricing" white>
            Get started
          </Button>
        </div>
       
        <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24 ">
          <div className="relative z-1 p-0.5 rounded-2xl ">
            <div className="relative rounded-[1rem] bg-conic-gradient">
              <div className="h-[1.4rem] bg-conic-gradient rounded-t-[0.9rem]" />
                
              <div
                className="aspect-[33/42] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/590] bg-conic-gradient lg:aspect-[1024/720]"
              >
                
                  <img
                    src={robot}
                    className="w-full scale-[1.7] translate-y-[8%] md:scale-[1] md:-translate-y-[10%] lg:-translate-y-[13%]"
                    width={1024}
                    height={490}
                    alt="AI"
                  />

                <Generating className="absolute left-4 right-4 top-12 md:left-1/2 md:right-auto md:bottom-8 md:w-[31rem] md:-translate-x-1/2" />

                <ScrollParallax isAbsolutelyPositioned>
                  <Notification
                    className="hidden absolute right-[4rem] top-[14rem] w-[18rem] xl:flex"
                    title="Web Design"
                    image={notificationImages[0]}
                  />
                </ScrollParallax>

                <ScrollParallax isAbsolutelyPositioned>
                  <Notification
                    className="hidden absolute left-[45.5rem] top-[22rem] w-[18rem] xl:flex neon-border"
                    title="Web Development"
                    image={notificationImages[1]}
                  />
                </ScrollParallax>

                <ScrollParallax isAbsolutelyPositioned>
                  <Notification
                    className="hidden absolute -right-[0.5rem] top-[22rem]  w-[18rem] xl:flex neon-border"
                    title="SEO Optimization"
                    image={notificationImages[2]}
                  />
                </ScrollParallax>

                <ScrollParallax isAbsolutelyPositioned>
                  <Notification
                    className="hidden absolute left-[40.5rem] top-[30rem] w-[18rem] xl:flex "
                    title="Graphic & Product Design"
                    image={notificationImages[3]}
                  />
                </ScrollParallax>

                <ScrollParallax isAbsolutelyPositioned>
                  <Notification
                    className="hidden absolute -right-[5.5rem] top-[30rem] w-[18rem] xl:flex"
                    title="Branding"
                    image={notificationImages[4]}
                  />
                </ScrollParallax>

                <ScrollParallax isAbsolutelyPositioned>
                  <Notification
                    className="hidden absolute left-[50.5rem] top-[14rem] w-[18rem] xl:flex "
                    title="Content & Copy Writing"
                    image={notificationImages[5]}
                   /> 
                </ScrollParallax>
                <ScrollParallax isAbsolutelyPositioned>
                  <Notification
                    className="hidden absolute -right-[23rem] top-[38rem] w-[18rem] xl:flex neon-border"
                    title="Reliable Hosting"
                    image={notificationImages[6]}
                  />
                </ScrollParallax>

              </div>
            </div>

            <Gradient />
          </div>
          <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]">
            <img
              src={heroBackground}
              className="w-full"
              width={1440}
              height={1800}
              alt="hero"
            />
          </div>

          <BackgroundCircles />
        </div>
      </div>
    </Section>
  );
};

export default Hero;
