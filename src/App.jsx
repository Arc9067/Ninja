import React from "react";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Token from "./Components/Token";
import Map from "./Components/Map";

const App = () => {
  return (
    <div className="min-h-screen w-full relative bg-black text-white">
      <Header />
      <Hero />
      <About />
      <Token />
      <Map />
    </div>
  );
};

export default App;
