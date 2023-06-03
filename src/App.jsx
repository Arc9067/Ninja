import React from "react";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import About from "./Components/About";

const App = () => {
  return (
    <div className="min-h-screen w-full relative bg-primary text-white">
      <Header />
      <Hero />
      <About />
    </div>
  );
};

export default App;
