import React, { useState } from "react";
import MainBody from "./Components/Body/MainBody/MainBody";
import SideBar from "./Components/SideBar/SideBar";
import MyContext from "./Context/MyContext";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSecondHeader, setActiveSecondHeader] = useState(false);

  return (
    <MyContext.Provider value={{ isOpen, setIsOpen, activeSecondHeader, setActiveSecondHeader }}>
      <div className="grid overflow-x-hidden">
          <SideBar />
        <main className="pb-8 bg-white z-10">
          <MainBody />
        </main>
      </div>
    </MyContext.Provider>
  );
}

export default App;
