import React from "react";
import Logo from "../assets/logo.png";

const Hero = () => {
  return (
    <section className="pt-[100px] w-full min-h-screen flex justify-center items-center">
      <div className="container flex flex-col justify-center items-center text-center gap-3">
        <img
          src={Logo}
          alt=""
          className="bg-secondary w-[15rem] rounded-full"
        />
        <h1
          className="font-primary text-3xl max-w-[600px] leading-relaxed"
          data-aos="fade-right"
          data-aos-duration="1500"
        >
          Big welcome to Zoonji, the golden shinobi launched on the Ethereum
          blockchain.{" "}
        </h1>
        <div className="flex gap-4 flex-wrap justify-center items-center">
          {" "}
          <a
            href="https://t.me/ZOONJIERC"
            target="_blank"
            className="capitalize bg-secondary px-5 py-3 font-primary text-primary"
            data-aos="fade-up"
            data-aos-duration="700"
          >
            telegram
          </a>
          <a
            href="https://www.dextools.io/app/en/ether/pair-explorer/0x6e04333b1b364fbc21380abaa9c3fc29f83c3cb1"
            className="capitalize bg-secondary px-5 py-3 font-primary text-primary"
            data-aos="fade-left"
            data-aos-duration="700"
          >
            chart
          </a>
        </div>{" "}
        <p
          className="text-secondary font-primary break-all text-2xl mt-8
        "
          data-aos="fade-up"
          data-aos-duration="900"
        >
          0x365a8b9c2937d99986eb49ce39ad442bf04574a7
        </p>
        <p
          className="text-secondary font-primary break-all text-2xl mt-8
        "
          data-aos="fade-up"
          data-aos-duration="900"
        >
          Team@zoonji.cm
        </p>
      </div>
    </section>
  );
};

export default Hero;
