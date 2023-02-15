import React, { useContext } from "react";
import MyContext from "../../Context/MyContext";
import BurgerMenu from "../Utils/HeaderUtils/BurgerMenu/BurgerMenu";
import Logo from "../Utils/HeaderUtils/Logo/Logo";

function SideBar() {
  const context = useContext(MyContext);
  const width = context.isOpen ? "max-md:w-[20.625rem] md:w-[22.5rem]" : "w-0";

  return (
    <div className={`${width} lg:hidden transition-all duration-500`}>
      <header className="min-h-[5rem] flex justify-between px-4">
        <Logo />
        <BurgerMenu />
      </header>
    </div>
  );
}

export default SideBar;
