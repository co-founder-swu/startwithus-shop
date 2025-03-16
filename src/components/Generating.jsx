import { Typewriter } from "react-simple-typewriter";
import { ring } from "../assets";

const Generating = ({ className }) => {
  const words = [
    "Web Design Services",
    "Web Development Services",
    "Marketing Services",
    "Advertising Services",
    "Branding Services",
    "Graphic Design Services",
    "Content Writing",
    "Copy Writing",
    "SEO Optimization",
    "Reliable Hosting",
  ];

  return (
    <div
      className={`flex items-center w-[20rem] h-[4rem] font-normal px-6 bg-n-8/80 rounded-[1.7rem] poppins ${
        className || ""
      } text-base`}
    >
      <img className="w-10 h-10 mr-4" src={ring} alt="Loading indicator" />
      <span>
        <Typewriter
          words={words}
          loop={0} // Infinite loop
          cursor
          cursorStyle="_"
          typeSpeed={160}
          deleteSpeed={20}
          delaySpeed={1000}
        />
      </span>
    </div>
  );
};

export default Generating;
