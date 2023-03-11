import React, { useEffect, useState } from "react";
import MainBody from "./Components/Body/MainBody/MainBody";
import SideBar from "./Components/SideBar/SideBar";
import MyContext from "./Context/MyContext";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSecondHeader, setActiveSecondHeader] = useState(false);
  useEffect(() => {
    const container = document.getElementById("container");
    container!.addEventListener("scroll", () => {
      if (container!.scrollTop > 100) {
        setActiveSecondHeader(true);
      } else {
        setActiveSecondHeader(false);
      }
    });
  }, []);

  return (
    <MyContext.Provider value={{ isOpen, setIsOpen, activeSecondHeader, setActiveSecondHeader }}>
      <div id="container" className="grid overflow-x-hidden h-full">
        <SideBar />
        <main className="pb-8 bg-white z-10">
          <MainBody />
        </main>
      </div>
    </MyContext.Provider>
  );
}

export default App;
