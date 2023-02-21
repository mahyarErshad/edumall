import React, { useState } from "react";
import MainBody from "./Components/Body/MainBody/MainBody";
import SideBar from "./Components/SideBar/SideBar";
import MyContext from "./Context/MyContext";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <MyContext.Provider value={{ isOpen, setIsOpen }}>
      <div className="grid">
        <aside>
          <SideBar />
        </aside>
        <main>
          <MainBody />
        </main>
      </div>
    </MyContext.Provider>
  );
}

export default App;
