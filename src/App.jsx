import React, { useEffect } from "react";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Token from "./Components/Token";
import Map from "./Components/Map";
import AOS from "aos";
import "aos/dist/aos.css";
import Swap from "./Components/Swap";

const App = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="min-h-screen w-full overflow-hidden relative bg-black text-white">
      <Header />
      <Hero />
      <About />
      <Token />
      <Map />
      <Swap />
    </div>
  );
};

export default App;
