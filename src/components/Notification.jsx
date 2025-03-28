import { useRef } from "react";
import { ScrollParallax } from "react-just-parallax";
import { notificationImages } from "../constants";

const Notification = ({ className, title, image }) => {
  return (
    <div
      className={`relative ${className || ""} flex items-center p-4 pr-6 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl gap-5`}
    >
      <img
        src={image}
        width={62}
        height={62}
        alt="image"
        className="rounded-xl"
      />

      <div className="flex-1">
        <h6 className="mb-1 font-semibold text-base">{title}</h6>
      </div>
    </div>
  );
};

export default Notification;
