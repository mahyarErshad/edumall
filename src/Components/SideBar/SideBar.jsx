import React, { useContext } from "react";
import MyContext from "../../Context/MyContext";

function SideBar() {
  const context = useContext(MyContext);
  const width = context.isOpen ? "max-md:w-[20.625rem] md:w-[22.5rem]" : "w-0";

  return <div className={`${width} lg:hidden transition-all duration-500`}>SideBar</div>;
}

export default SideBar;
