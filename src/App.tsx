import React, { useState } from "react";
import HeroSection from "./Components/Header/HeroSection/HeroSection";
import SideBar from "./Components/SideBar/SideBar";
import MyContext from "./Context/MyContext";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <MyContext.Provider value={{ isOpen, setIsOpen }}>
      <div className="grid">
        <main>
          <HeroSection />
        </main>
        <aside>
          <SideBar />
        </aside>
      </div>
    </MyContext.Provider>
  );
}

export default App;
