import React, { memo, useState } from "react";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import logo from "../../../assets/images/logo.png";
import BuyProButton from "../../Utils/Buttons/BuyProButton/BuyProButton";
import HeaderNavigationSection from "../../Utils/HeaderUtils/HeaderNavigationSection/HeaderNavigationSection";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="min-h-[4.375rem] w-full py-2 bg-transparent z-50">
      <div className="max-w-[93.75rem] mx-auto sm:px-6 lg:px-8 px-4">
        <div className="flex items-center lg:flex-row-reverse justify-between h-16">
          <BurgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
          <BuyProButton />
          <HeaderNavigationSection />
          <div onClick={() => window.scrollTo({ top: 0 })} className="flex-center h-full cursor-pointer">
            <img className="max-w-[9.375rem] lg:ml-4" src={logo} alt="Logo" />
          </div>
        </div>
      </div>
      <div>{/* <NavLinks /> */}</div>
    </header>
  );
}

export default memo(Header);
