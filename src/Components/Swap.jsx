import React from "react";
import Logo from "../assets/img2.jpg";

const Swap = () => {
  return (
    <section className="py-[50px] w-full bg-white min-h-screen">
      <div className="container grid lg:grid-cols-2 gap-10 justify-between items-center">
        <img src={Logo} alt="" className="rounded-t-full"/>
      </div>
    </section>
  );
};

export default Swap;
