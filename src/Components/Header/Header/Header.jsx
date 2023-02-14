import React, { memo, useState } from "react";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import BuyProButton from "../../Utils/Buttons/BuyProButton/BuyProButton";
import HeaderNavigationSection from "../../Utils/HeaderUtils/HeaderNavigationSection/HeaderNavigationSection";
import Logo from "../../Utils/HeaderUtils/Logo/Logo";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="min-h-[4.375rem] w-full py-2 bg-transparent z-50">
      <div className="max-w-[93.75rem] mx-auto sm:px-6 lg:px-8 px-4">
        <div className="flex items-center lg:flex-row-reverse justify-between h-16">
          <BurgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
          <BuyProButton />
          <HeaderNavigationSection />
          <Logo />
        </div>
      </div>
      <div>{/* <NavLinks /> */}</div>
    </header>
  );
}

export default memo(Header);
