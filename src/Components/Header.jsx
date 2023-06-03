import React from "react";
import Logo from "../assets/logo.png";
import { FaTelegramPlane } from "react-icons/fa";
import { TiSocialTwitter } from "react-icons/ti";

const Header = () => {
  return (
    <header className="py-3 w-full bg-tertiary absolute top-0">
      <div className="container flex justify-between items-center">
        <a
          href=""
          className="bg-secondary flex justify-between items-center px-2 py-2 text-3xl text-black capitalize rounded-xl font-primary"
        >
          <img src={Logo} className="w-[3rem]" alt="" />
          zoonji
        </a>

        <div className="flex items-center gap-2 justify-between">
          <a
            href=""
            target="_blank"
            className="bg-secondary h-10 w-10 flex justify-center items-center text-center text-2xl text-black rounded-full"
          >
            <FaTelegramPlane />
          </a>
          <a
            href=""
            target="_blank"
            className="bg-secondary h-10 w-10 flex justify-center items-center text-center text-2xl text-black rounded-full"
          >
            <TiSocialTwitter />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
