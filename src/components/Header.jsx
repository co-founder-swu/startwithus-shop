// src/components/Header.jsx
import React, { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { useLocation } from "react-router-dom";
import { enableBodyScroll, disableBodyScroll } from "body-scroll-lock";
import { startwithus } from "../assets";
import { navigation } from "../constants";
import Button from "./Button";
import MenuSvg from "../assets/svg/MenuSvg";
import { HamburgerMenu } from "./design/Header";

const Header = () => {
  const pathname = useLocation().pathname;
  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enableBodyScroll();
    } else {
      setOpenNavigation(true);
      disableBodyScroll();
    }
  };

  const handleClick = () => {
    if (!openNavigation) return;

    enableBodyScroll();
    setOpenNavigation(false);
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${
        openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"
      }`}
    >
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <Link to="/#home" className="flex items-center">
          <img src={startwithus} alt="Start With Us" className="block -ml-4 w-[13.8rem] md:w-[15rem] lg:w-[14rem] lg:-ml-6"/>
        </Link>

        <nav
          id="nav"
          className={`${
            openNavigation ? "flex" : "hidden"
          } fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
        >
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
            {navigation.map((item) => (
              <Link
                key={item.id}
                smooth
                to={item.url}
                onClick={handleClick}
                className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 ${
                  item.onlyMobile ? "lg:hidden" : ""
                } py-6 md:py-8 lg:text-sm ${
                  item.url === pathname
                    ? "z-2 lg:text-n-1"
                    : "lg:text-n-1/50"
                } lg:leading-5 hover:text-n-14/100 xl:px-7`}
              >
                {item.title}
              </Link>
            ))}
          </div>

          <HamburgerMenu />
        </nav>
        <Button className="hidden text-n-1 hover:text-n-14/100 lg:flex"
          href="https://calendly.com/ms-shubhada/start-with-us-getting-started-meeting"
          rootElement={document.getElementById("root")}
        >
          Book a Call
        </Button>

        <Button
          className="ml-auto lg:hidden"
          px="px-3"
          onClick={toggleNavigation}
        >
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>
    </div>
  );
};

export default Header;
