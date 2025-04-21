import React, { useEffect } from "react";
import Header from "./components/header";
import Hero from "./components/Hero";
import AbtGame from "./components/AbtGame";
import Trailer from "./components/Trailer";
import Plataforms from "./components/Plataforms";

const App = () => {

  useEffect(() => {
    ScrollReveal().reveal("body");
    ScrollReveal().reveal(".scroll-reveal");
  }, []);

  return (
    <div>

      <header className="w-full h-29 transform -translate-y-full hover:translate-y-0 transition-all duration-500 absolute top-0 left-0">
        <Header />
      </header>

      <Hero/>

      <AbtGame />

      <Trailer />

      {/* <Plataforms /> */}

    </div>
  );
};

export default App;
