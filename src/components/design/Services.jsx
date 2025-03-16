import { brainwaveWhiteSymbol, play } from "../../assets";
import ChatBubbleWing from "../../assets/svg/ChatBubbleWing";

export const Gradient = () => {
  return (
<div className="absolute top-0 left-0 right-0 w-screen h-[56.625rem] opacity-50 mix-blend-color-dodge pointer-events-none">
  <img
    className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
    src={gradient}
    width={1417}
    height= "auto"
    alt="Gradient"
  />
</div>


  );
};

export const PhotoChatMessage = () => {
  return (
    <div className="absolute top-8 right-8 font-code text-lg max-w-[17.5rem] py-6 px-8 bg-n-4 rounded-t-xl rounded-bl-xl text-gradient lg:top-10 lg:right-[15.75rem] lg:max-w-[27.5rem]">
      <h1 className="h4 flex">WHY START WITH US?</h1>
      <ChatBubbleWing className="absolute left-full bottom-0" />
    </div>
  );
};

export const VideoChatMessage = () => {
  return (
    <div className="absolute top-[13rem] right-[1.125rem] w-full max-w-[14rem] pt-2.5 pr-2.5 pb-7 pl-5 bg-n-6 rounded-t-xl rounded-br-xl font-code text-xl md:max-w-[17.5rem]">
      <div className="mx-3 text-xl text-gradient ">OUR PROMISE</div>
      <div className="absolute left-5 -bottom-[1.125rem] flex items-center justify-center w-[2.25rem] h-[2.25rem] bg-color-1 rounded-[0.75rem]">
        <img
          src={brainwaveWhiteSymbol}
          width={26}
          height={26}
          alt="Brainwave"
        />
      </div>
      <ChatBubbleWing
        className="absolute right-full bottom-0 -scale-x-100"
        pathClassName="fill-n-6"
      />
    </div>
  );
};

export const VideoBar = () => {
  return (
    <div className="absolute left-0 bottom-0 w-full flex items-center p-6">
      <img
        src={play}
        width={24}
        height={24}
        alt="Play"
        className="object-contain mr-3"
      />

      <div className="flex-1 bg-[#D9D9D9]">
        <div className="w-1/2 h-0.5 bg-color-1"></div>
      </div>
    </div>
  );
};