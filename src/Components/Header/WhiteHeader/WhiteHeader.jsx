import React, { memo, useContext } from "react";
import BurgerMenu from "../../Utils/HeaderUtils/BurgerMenu/BurgerMenu";
import BuyProButton from "../../Utils/Buttons/BuyProButton/BuyProButton";
import HeaderNavigationSection from "../../Utils/HeaderUtils/HeaderNavigationSection/HeaderNavigationSection";
import Logo from "../../Utils/HeaderUtils/Logo/Logo";
import MyContext from "../../../Context/MyContext";

function WhiteHeader() {
  const context = useContext(MyContext);
  window.addEventListener("scroll", () => {
    let secondHeader = window.scrollY;
    if (secondHeader > 100) {
      context.setActiveSecondHeader(true);
    } else {
      context.setActiveSecondHeader(false);
    }
  });

  return (
    <header className={`transition-all duration-700 min-h-[4.375rem] w-full py-2 z-50 fixed ${context.activeSecondHeader ? "top-0" : "-top-20"} bg-[#FFFEFA] shadow-md text-[#111]`}>
      <div className="max-w-[93.75rem] mx-auto sm:px-6 lg:px-8 px-4">
        <div className="flex items-center lg:flex-row-reverse justify-between h-16">
          {!context.isOpen && <BurgerMenu white />}
          <BuyProButton className="flex-center max-sm:hidden text-black" />
          <HeaderNavigationSection />
          {!context.isOpen && <Logo dark />}
        </div>
      </div>
    </header>
  );
}

export default memo(WhiteHeader);
