import React from "react";
import ButtonSvg from "../assets/svg/ButtonSvg";

const Button = ({ className, href, onClick, children, px, white }) => {
  const classes = `button relative inline-flex items-center justify-center h-11 transition-colors hover:text-color-1 ${
    px || "px-7"
  } ${white ? "text-n-8" : "text-n-1"} ${className || ""}`;
  const spanClasses = "relative z-10";

  const handleClick = (e) => {
    if (onClick) {
      onClick(e);
    }
    // Prevent default anchor behavior if an onClick handler is provided
    if (onClick && e.currentTarget.tagName === "A") {
      e.preventDefault();
    }
  };

  const renderButton = () => (
    <button className={classes} onClick={handleClick}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
    </button>
  );

  const renderLink = () => (
    <a href={href} className={classes} onClick={handleClick}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
    </a>
  );

  return href ? renderLink() : renderButton();
};

export default Button;
