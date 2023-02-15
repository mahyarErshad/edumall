import React, { useState } from "react";
import HeroSection from "./Components/Header/HeroSection/HeroSection";
import MyContext from "./Context/MyContext";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <MyContext.Provider value={{isOpen, setIsOpen}} >
      <HeroSection />
    </MyContext.Provider>
  );
}

export default App;
