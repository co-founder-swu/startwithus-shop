import Section from "./Section";
import PricingList from "./PricingList";
import { BackgroundCircles } from "./design/Hero";

const Pricing = () => {
  return (
    <Section className="overflow-hidden bg-gradient-to-tr from-n-8 via-n-14/20 to-n-14/300 -top-26" id="pricing">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-2">
        <div className="flex flex-col items-center mb-4">
          <h1 id="title" className="font-poppins text-center font-semibold h2 mb-12">
        <span className="inline-block text-gradient relative">Price Your Path to Sucess</span>
      </h1>
          <p className=" body-2  text-n-1/50">Save 15% with Annual Billing!</p>
        </div>
        <div className="relative z-0">
          <PricingList />
        </div>
        <BackgroundCircles />
      </div>
    </Section>
  );
};

export default Pricing;
