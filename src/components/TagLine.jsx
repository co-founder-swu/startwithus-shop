import React from "react";
import ChatBubbleWing from "../assets/svg/ChatBubbleWing";

const TagLine = ({ className, children }) => {
  return (
    <div className="relative">
      <div className="absolute top-8 left-0 z-10 max-w-[17.5rem] py-6 px-4 bg-gradient-to-bl from-n-8 via-n-14/20 to-n-14/20 text-extrabold rounded-t-xl rounded-bl-xl font-grotesk text-lg lg:top-4 lg:max-w-[20.5rem]">
        <div className={`tagline flex items-center underline underline-offset-8 decoration-aqua-300 decoration-1 ${className || ""}`}>
          <div className="mx-3 text-gradient md:text-2xl lg:text-xl">{children}</div>
        </div>
      </div>
      <div className="absolute left-full bottom-0">
        <ChatBubbleWing />
      </div>
    </div>
  );
};

export default TagLine;
